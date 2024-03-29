import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertStringDate(dateString: string): string {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone: "UTC"
  }

  return date.toLocaleDateString("pt-BR", options)
}

export function convertDateToString(date: Date): string {
  const year = date.getFullYear()
  const month = ("0" + (date.getMonth() + 1)).slice(-2)
  const day = ("0" + date.getDate()).slice(-2)

  return year + "-" + month + "-" + day
}

export function removeUnusedOptionalParams<T extends Record<string, any>>(
  obj: T
): T {
  Object.keys(obj).forEach(key => {
    if (obj.hasOwnProperty(key) && obj[key] === null) {
      delete obj[key]
    }
  })
  return obj
}
