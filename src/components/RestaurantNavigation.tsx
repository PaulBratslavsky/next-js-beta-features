import React from 'react'
import Link from 'next/link'

export default function RestaurantNavigation() {
  return (
    <nav className="flex text-reg border-b pb-2">
    <Link href="/restaurant/some-restaurant" className="mr-7"> Overview </Link>
    <Link href="/restaurant/some-restaurant/menu" className="mr-7"> Menu </Link>
  </nav>
  )
}
