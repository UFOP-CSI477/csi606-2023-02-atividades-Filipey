import { type NavItem } from "@/components/layout/sidebar-nav"
import {
  CircleUserIcon,
  HomeIcon,
  StarIcon,
  StickyNoteIcon
} from "lucide-react"

export const NavItems: NavItem[] = [
  {
    title: "Home",
    icon: HomeIcon,
    href: "/home",
    color: "text-sky-500"
  },
  {
    title: "Meu perfil",
    icon: CircleUserIcon,
    href: "/profile",
    color: "text-orange-500"
  },
  {
    title: "Novo post",
    icon: StickyNoteIcon,
    href: "/posts/new",
    color: "text-green-500"
  },
  {
    title: "Favoritos",
    icon: StarIcon,
    href: "/posts/favorites",
    color: "text-yellow-500"
  }
]
