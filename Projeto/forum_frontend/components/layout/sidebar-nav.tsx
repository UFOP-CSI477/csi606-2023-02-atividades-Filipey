"use client"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { useSidebar } from "@/hooks/useSidebar"
import { ChevronDown, type LucideIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "../../lib/utils"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { useEffect, useState } from "react"

export interface NavItem {
  title: string
  href: string
  icon: LucideIcon
  color?: string
  isChidren?: boolean
  children?: NavItem[]
}

interface SideNavProps {
  items: NavItem[]
  setOpen?: (open: boolean) => void
  className?: string
}

export function SideNav({ items, setOpen, className }: SideNavProps) {
  const path = usePathname()
  const { isOpen } = useSidebar()
  const [openItem, setOpenItem] = useState("")
  const [lastOpenItem, setLastOpenItem] = useState("")

  useEffect(() => {
    if (isOpen) {
      setOpenItem(lastOpenItem)
    } else {
      setLastOpenItem(openItem)
      setOpenItem("")
    }
  }, [isOpen, lastOpenItem, openItem])

  return (
    <nav className="space-y-2">
      {items.map(item =>
        item.isChidren ? (
          <Accordion
            type="single"
            collapsible
            className="space-y-2"
            key={item.title}
            value={openItem}
            onValueChange={setOpenItem}
          >
            <AccordionItem value={item.title} className="border-none ">
              <AccordionTrigger
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "group relative flex h-12 justify-between px-4 py-2 text-base duration-200 hover:bg-gray-300 hover:text-black hover:no-underline"
                )}
              >
                <div>
                  <item.icon className={cn("h-5 w-5", item.color)} />
                </div>
                <div
                  className={cn(
                    "absolute left-12 text-base duration-200 hover:bg-gray-300 hover:text-black",
                    !isOpen && className
                  )}
                >
                  {item.title}
                </div>

                {isOpen && (
                  <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                )}
              </AccordionTrigger>
              <AccordionContent className="mt-2 space-y-4 pb-1">
                {item.children?.map(child => (
                  <Link
                    key={child.title}
                    href={child.href}
                    onClick={() => {
                      if (setOpen) setOpen(false)
                    }}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "group relative flex h-12 justify-start gap-x-3",
                      path === child.href && "bg-muted font-bold hover:bg-muted"
                    )}
                  >
                    <child.icon className={cn("h-5 w-5", child.color)} />
                    <div
                      className={cn(
                        "absolute left-12 text-base duration-200",
                        !isOpen && className
                      )}
                    >
                      {child.title}
                    </div>
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <Link
            key={item.title}
            href={item.href}
            onClick={() => {
              if (setOpen) setOpen(false)
            }}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "group relative flex h-12 justify-start hover:bg-zinc-600",
              path === item.href && "bg-muted font-bold hover:bg-muted"
            )}
          >
            <item.icon className={cn("h-5 w-5", item.color)} />
            <span
              className={cn(
                "absolute left-12 text-base duration-200 text-white",
                !isOpen && className
              )}
            >
              {item.title}
            </span>
          </Link>
        )
      )}
    </nav>
  )
}
