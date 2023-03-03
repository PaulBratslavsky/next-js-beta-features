import React from "react";
import { PrismaClient } from "@prisma/client";
import RestaurantDetails from "@/views/restaurant-details";

export interface RestaurantDetailsType {
  id: number
  name: string
  description: string
  images: string[]
}

const prisma = new PrismaClient();

const fetchRestaurantDetails = async (slug: string): Promise<RestaurantDetailsType> => {
  const restaurant: any = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
    }
  });

  if (!restaurant) throw new Error("Restaurant not found");
  return restaurant;
};

export default async function RestaurantDetailsRoute({ params }: { params: { slug: string } }) {
  const restaurant = await fetchRestaurantDetails(params.slug);
  return <RestaurantDetails restaurant={restaurant} />;

}
