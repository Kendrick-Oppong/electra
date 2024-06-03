export function getUrlSortOptions(sortQuery: string | null) {
  let sort = {};
  switch (sortQuery) {
    case "name-desc":
      sort = { title: -1 };
      break;
    case "price-asc":
      sort = { price: 1 };
      break;
    case "price-desc":
      sort = { price: -1 };
      break;
    case "rating-highest":
      sort = { rating: -1 };
      break;
    case "rating-lowest":
      sort = { rating: 1 };
      break;
    default:
      sort = { title: 1 }; // Default sorting by title ascending
      break;
  }
  return sort;
}
