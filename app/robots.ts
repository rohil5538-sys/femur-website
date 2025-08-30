import type { MetadataRoute } from "next"

export const dynamic = "force-dynamic"

export default function robots(): MetadataRoute.Robots {
  const base = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  }
}
