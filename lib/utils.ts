import { format } from 'date-fns'
import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatDate(dateString: string): string {
  try {
    return format(new Date(dateString), 'MMMM d, yyyy')
  } catch {
    return dateString
  }
}

export function truncate(str: string, len: number): string {
  return str.length > len ? str.slice(0, len) + '...' : str
}
