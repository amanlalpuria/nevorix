import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "NEVORIX - Innovative Tech Solutions",
  description:
    "NEVORIX specializes in web development, mobile development, digitalization, automation, and UI/UX design. Discover our flagship product Nemo - a comprehensive eCommerce platform.",
  generator: "aman.lalpuria",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${openSans.style.fontFamily};
  --font-work-sans: ${workSans.variable};
  --font-open-sans: ${openSans.variable};
}
        `}</style>
      </head>
      <body className={`${workSans.variable} ${openSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
