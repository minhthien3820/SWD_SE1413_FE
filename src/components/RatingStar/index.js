import Rating from "@material-ui/lab/Rating";
import React from "react";

export default function RatingStar(props) {
  let number = props.children;
  let rating = parseInt(number / 2);
  if (number % 2 > 0) {
    rating = parseFloat(rating) * 1.0 + 0.5;
  }
  return (
    <Rating
      name="half-rating-read"
      defaultValue={rating}
      precision={0.5}
      readOnly
      {...props}
    />
  );
}
