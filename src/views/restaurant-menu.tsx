import React, { Fragment } from 'react'
import RestaurantNavigation from '@/components/RestaurantNavigation'
import Header from '@/components/Header'
import MenuCard from '@/components/MenuCard'

export default function RestaurantMenu() {
  return (
    <Fragment>
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[100%] rounded p-3 shadow">
          <RestaurantNavigation />
          <main className="bg-white mt-5">
            <div>
              <div className="mt-4 pb-1 mb-1">
                <h1 className="font-bold text-4xl">Menu</h1>
              </div>
              <div className="flex flex-wrap justify-between">
                <MenuCard />
              </div>
            </div>
          </main>
        </div>
      </div>
    </Fragment>

  )
}
