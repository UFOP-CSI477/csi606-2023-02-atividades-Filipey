import Header from "@/components/layout/header"
import Sidebar from "@/components/layout/sidebar"
import React from "react"

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="">
      <Header />
      <div className="flex h-screen border-collapse overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden pt-16 bg-secondary/10 pb-1">
          <div className="flex h-full">{children}</div>
        </main>
      </div>
    </div>
  )
}
