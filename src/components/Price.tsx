import React from 'react'
import { PRICE } from '@prisma/client'

export default function Price({ price }: { price: PRICE }) {

  function renderPrice() {
    switch (price) {
      case PRICE.CHEAP:
        return <><span>$</span><span className="text-gray-400">$$$</span></>;
      case PRICE.REGULAR:
        return <><span>$$</span><span className="text-gray-400">$$</span></>;
      case PRICE.MEDIUM:
        return <><span>$$$</span><span className="text-gray-400">$</span></>;
      case PRICE.EXPENSIVE:
        return <span>$$$$</span>;
      default:
        return null;
    }
  };

  return <p className="mr-3">{renderPrice()}</p>
}
