'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'

export default function ClientOnlyNavbar() {
  const path = usePathname()

  // Do NOT show navbar on /about or any nested route
  if (path.startsWith('/about')) return null

  return <Navbar />
}
