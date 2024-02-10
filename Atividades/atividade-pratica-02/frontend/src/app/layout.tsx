import ProvidersWrapper from "@/app/ProvidersWrappercomponents"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Toaster } from "@/components/ui/toastercomponents"
import "./global.css"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Atividade Prática 02",
  description: "CSI477"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProvidersWrapper>
          <div className="flex min-h-screen overflow-y-auto">
            <div className="p-7 flex-1 bg-slate-50">{children}</div>
          </div>
          <Toaster />
        </ProvidersWrapper>
      </body>
    </html>
  )
}
