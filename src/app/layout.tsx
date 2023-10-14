import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Painting Service",
  description: "Generated by create next app",
  icons: "/icon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
