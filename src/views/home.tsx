import React, { Fragment } from 'react';
import RestaurantCard from '@/components/RestaurantCard';
import SearchField from '@/components/SearchField';
import { RestaurantType } from '@/app/page';

export default function Home({ restaurants }: { restaurants: RestaurantType[] }) {
  return (
    <Fragment>
      <SearchField />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants && restaurants.map((restaurant : RestaurantType ) => {
          return  <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
        />
        } )}
      </div>
    </Fragment>
  )
}
