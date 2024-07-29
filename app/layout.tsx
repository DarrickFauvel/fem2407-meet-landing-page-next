import type { Metadata } from "next"
import { Red_Hat_Display } from "next/font/google"
import "./globals.css"

const red_hat_display = Red_Hat_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Frontend Mentor | Meet landing page",
  description:
    "This is a solution for the Frontend Mentor 'Meet landing page' challenge.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${red_hat_display.className} bg-fem-seasalt`}>
        {children}
      </body>
    </html>
  )
}
