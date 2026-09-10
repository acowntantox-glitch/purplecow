"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent, type MouseEvent as ReactMouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";

type InsightItem = {
  title: string;
  image: string;
  slug: string;
  badge: string;
};

const AUTOPLAY_MS = 4000;
const RESUME_DELAY_MS = 2600;
const TRANSITION_MS = 420;
const EASE = "cubic-bezier(0.32, 0.72, 0, 1)";
const DRAG_RANGE = 170;
const SWIPE_COMMIT_PX = 64;
const CLICK_THRESHOLD_PX = 6;
const CARD_HEIGHT = 378;
const BACK_OFFSET = 30;

const REST = [
  { y: 0, scale: 1, opacity: 1 },
  { y: 16, scale: 0.94, opacity: 0.88 },
  { y: BACK_OFFSET, scale: 0.88, opacity: 0.68 },
];
const PREV_REST = { y: -60, scale: 0.9, opacity: 0 };
const EXIT_UP = { y: -(CARD_HEIGHT + BACK_OFFSET + 40), scale: 1.02, opacity: 0 };

function lerp(a: number, b: number, f: number) {
  return a + (b - a) * f;
}

function mix(
  a: { y: number; scale: number; opacity: number },
  b: { y: number; scale: number; opacity: number },
  f: number
) {
  return {
    transform: `translateY(${lerp(a.y, b.y, f)}px) scale(${lerp(a.scale, b.scale, f)})`,
    opacity: lerp(a.opacity, b.opacity, f),
  };
}

function pinned(rest: { y: number; scale: number; opacity: number }) {
  return { transform: `translateY(${rest.y}px) scale(${rest.scale})`, opacity: rest.opacity };
}

// Only the one card actively entering/exiting moves — every other slot stays
// pinned at its resting spot, so a single card visibly changes at a time.
function styleForSlot(slot: -1 | 0 | 1 | 2, t: number): { transform: string; opacity: number } {
  if (t <= 0) {
    const f = Math.min(-t, 1);
    if (slot === -1) return { transform: `translateY(${PREV_REST.y}px) scale(${PREV_REST.scale})`, opacity: 0 };
    if (slot === 0) return mix(REST[0], EXIT_UP, f);
    if (slot === 1) return pinned(REST[1]);
    return pinned(REST[2]);
  }
  const f = Math.min(t, 1);
  if (slot === -1) return mix(PREV_REST, REST[0], f);
  if (slot === 0) return pinned(REST[0]);
  if (slot === 1) return pinned(REST[1]);
  return pinned(REST[2]);
}

const Z_BY_SLOT: Record<number, number> = { "-1": 40, "0": 30, "1": 20, "2": 10 };

export default function InsightsCardStack({ items }: { items: InsightItem[] }) {
  const count = items.length;
  const [index, setIndex] = useState(0);
  const [t, setT] = useState(0);
  const [suppressTransition, setSuppressTransition] = useState(false);

  const phaseRef = useRef<"idle" | "dragging" | "animating">("idle");
  const pausedRef = useRef(false);
  const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragStartY = useRef(0);
  const draggedPastThreshold = useRef(false);
  const activePointerId = useRef<number | null>(null);
  const tRef = useRef(0);

  const updateT = (value: number) => {
    tRef.current = value;
    setT(value);
  };

  const pause = () => {
    pausedRef.current = true;
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
  };
  const scheduleResume = () => {
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      pausedRef.current = false;
    }, RESUME_DELAY_MS);
  };

  const commit = (dir: 1 | -1) => {
    window.setTimeout(() => {
      setSuppressTransition(true);
      setIndex((i) => (i + dir + count) % count);
      updateT(0);
      // A plain timer (not requestAnimationFrame) reliably fires even when the
      // tab isn't actively compositing frames, unlike rAF which can stall silently.
      window.setTimeout(() => {
        setSuppressTransition(false);
        phaseRef.current = "idle";
      }, 30);
    }, TRANSITION_MS);
  };

  const advance = (dir: 1 | -1) => {
    if (phaseRef.current !== "idle" || count < 2) return;
    phaseRef.current = "animating";
    updateT(dir);
    commit(dir);
  };

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || count < 2) return;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      advance(1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    return () => {
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    };
  }, []);

  const onPointerDown = (e: ReactPointerEvent<HTMLAnchorElement>) => {
    if (phaseRef.current !== "idle") return;
    pause();
    dragStartY.current = e.clientY;
    draggedPastThreshold.current = false;
    activePointerId.current = e.pointerId;
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLAnchorElement>) => {
    if (activePointerId.current !== e.pointerId) return;
    const dy = e.clientY - dragStartY.current;
    if (!draggedPastThreshold.current) {
      if (Math.abs(dy) < CLICK_THRESHOLD_PX) return;
      draggedPastThreshold.current = true;
      phaseRef.current = "dragging";
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
    const resisted = Math.abs(dy) > DRAG_RANGE ? Math.sign(dy) * DRAG_RANGE : dy;
    updateT(resisted / DRAG_RANGE);
  };

  const endDrag = (e: ReactPointerEvent<HTMLAnchorElement>) => {
    if (activePointerId.current !== e.pointerId) return;
    activePointerId.current = null;
    if (!draggedPastThreshold.current) {
      scheduleResume();
      return;
    }
    const dyPx = tRef.current * DRAG_RANGE;
    if (Math.abs(dyPx) > SWIPE_COMMIT_PX && count > 1) {
      const dir: 1 | -1 = dyPx < 0 ? 1 : -1;
      phaseRef.current = "animating";
      updateT(dir);
      commit(dir);
    } else {
      phaseRef.current = "animating";
      updateT(0);
      window.setTimeout(() => {
        phaseRef.current = "idle";
      }, TRANSITION_MS);
    }
    scheduleResume();
  };

  const onClickCapture = (e: ReactMouseEvent<HTMLAnchorElement>) => {
    if (draggedPastThreshold.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  if (count === 0) return null;

  const slots: Array<-1 | 0 | 1 | 2> = t > 0 ? [-1, 0, 1, 2] : [0, 1, 2];
  const transitionStyle =
    suppressTransition || (phaseRef.current === "dragging" && activePointerId.current !== null)
      ? "none"
      : `transform ${TRANSITION_MS}ms ${EASE}, opacity ${TRANSITION_MS}ms ${EASE}`;

  return (
    <div>
      <div className="relative" style={{ height: CARD_HEIGHT + BACK_OFFSET }}>
        {slots.map((slot) => {
          const item = items[(index + slot + count) % count];
          const style = styleForSlot(slot, t);
          const isFront = slot === 0;
          const cardStyle: CSSProperties = {
            height: CARD_HEIGHT,
            transform: style.transform,
            opacity: style.opacity,
            zIndex: Z_BY_SLOT[slot],
            transition: transitionStyle,
            touchAction: "none",
            willChange: "transform, opacity",
          };
          return (
            <Link
              key={`${item.slug}-${slot === -1 ? "prev" : slot}`}
              href={`/insights/${item.slug}`}
              draggable={false}
              onPointerDown={isFront ? onPointerDown : undefined}
              onPointerMove={isFront ? onPointerMove : undefined}
              onPointerUp={isFront ? endDrag : undefined}
              onPointerCancel={isFront ? endDrag : undefined}
              onClickCapture={isFront ? onClickCapture : undefined}
              className="absolute inset-x-0 top-0 flex select-none flex-col overflow-hidden rounded-3xl border border-surface-border bg-white shadow-2xl shadow-black/10"
              style={cardStyle}
              aria-hidden={!isFront}
              tabIndex={isFront ? 0 : -1}
            >
              <div className="relative h-[230px] w-full shrink-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="90vw"
                  draggable={false}
                  className="pointer-events-none object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                  {item.badge}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="line-clamp-3 h-[66px] text-base font-semibold leading-snug text-ink">
                  {item.title}
                </h3>
                <span className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-[11px] font-bold uppercase tracking-wide text-white">
                  Explore More
                  <span aria-hidden>&rarr;</span>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
