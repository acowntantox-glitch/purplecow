import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const JURISDICTION_SLUGS = ["mainland", "free-zone", "offshore"];

const INSIGHT_SLUGS = [
  "mainland-freezone-offshore",
  "uae-corporate-tax-small-business",
  "dubai-company-setup-cost-2026",
  "employment-visas-pro-services",
  "uae-corporate-bank-account-guide",
  "vat-registration-uae-guide",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/business-setup`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/corporate-services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/accounting-tax`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const jurisdictionRoutes: MetadataRoute.Sitemap = JURISDICTION_SLUGS.map((slug) => ({
    url: `${SITE_URL}/business-setup/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const insightRoutes: MetadataRoute.Sitemap = INSIGHT_SLUGS.map((slug) => ({
    url: `${SITE_URL}/insights/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...jurisdictionRoutes, ...insightRoutes];
}
