import { Toaster } from "@/components/ui/toaster"
import ProvidersWrapper from "app/ProvidersWrapper"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TP - WEB1",
  description: "Fórum sobre linguagens de programação"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }}>
      <body className={inter.className}>
        <ProvidersWrapper>
          {children}
          <Toaster />
        </ProvidersWrapper>
      </body>
    </html>
  )
}
