import { Box } from "@chakra-ui/react";
import { StarIcon } from "./StarIcon";
import { IReviewRating } from "@/typings/Review.type";

export const StarReviewIcons = ({ reviewRating }: IReviewRating) => {
  return (
    <Box className={`review-rating rating-${reviewRating}`}>
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
    </Box>
  );
};
