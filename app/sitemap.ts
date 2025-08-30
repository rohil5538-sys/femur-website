import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")

  const paths = ["", "/about", "/services", "/portfolio", "/process", "/contact"]

  const now = new Date()
  return paths.map((p) => ({
    url: `${base}${p || "/"}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }))
}
