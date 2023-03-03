import Home from '@/views/home';
import { PrismaClient, Location, Cuisine, PRICE } from '@prisma/client';

export interface RestaurantType {
    id: number
    name: string
    slug: string
    main_image: string
    location: Location
    cuisine: Cuisine
    price: PRICE
}

const prisma = new PrismaClient();

const fetchAllRestaurants = async (): Promise<RestaurantType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
      main_image: true,
      location: true,
      cuisine: true,
      price: true,
    }
  });
  return restaurants;
};

export default async function HomeRoute() {
  const restaurants = await fetchAllRestaurants();
  return <Home restaurants={restaurants} />
}
