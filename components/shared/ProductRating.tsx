"use client";
import type { ItemStyles } from "@smastrom/react-rating";
import { Rating, ThinRoundedStar } from "@smastrom/react-rating";
const myStyles: ItemStyles = {
  itemShapes: ThinRoundedStar,
  activeFillColor: "#ffd700",
  inactiveFillColor: "#BBF7D0",
};
const ProductRating = ({ rating }: { rating: number }) => {
  return (
    <Rating
      radius="medium"
      className="!w-24 mx-auto"
      value={rating}
      readOnly
      itemStyles={myStyles}
    />
  );
};

export default ProductRating;
