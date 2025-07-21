import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Impetus Global Podcast - Unlock Elite Performance",
  description: "Join industry leaders as we explore breakthrough insights on motivation, behavior, and communication. Discover how the iDrive methodology is transforming organizations worldwide.",
  keywords: ["leadership development", "performance optimization", "iDrive assessment", "business transformation", "team performance"],
  authors: [{ name: "Impetus Global" }],
  openGraph: {
    title: "Impetus Global Podcast - Unlock Elite Performance",
    description: "Join industry leaders exploring breakthrough insights on motivation, behavior, and communication.",
    type: "website",
    images: [
      {
        url: "/impetus-logo.svg",
        width: 1200,
        height: 630,
        alt: "Impetus Global Podcast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impetus Global Podcast",
    description: "Unlock elite performance with science-backed insights",
    images: ["/impetus-logo.svg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}