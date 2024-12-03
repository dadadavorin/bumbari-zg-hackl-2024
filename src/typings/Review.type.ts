export interface IReview {
  id: string;
  email: string;
  comment: string;
  rating: number;
}

export interface IReviewList {
  reviews: Array<IReview>;
}

export interface IReviewRating {
  reviewRating: number;
}
