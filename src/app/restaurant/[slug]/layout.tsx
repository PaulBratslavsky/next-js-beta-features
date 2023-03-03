import React from 'react'
import Header from '@/components/Header'

export const metadata = {
  title: 'Restaurant Details',
  description: 'Restaurant pages',
}


export default function RestaurantLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div>
      <Header />
      { children }
    </div>
  )
}
