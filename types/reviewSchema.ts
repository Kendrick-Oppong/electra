export interface Review {
    _id: string;
    userId: string;
    username: string;
    rating: number;
    comment: string;
    createdAt: string;
}

export interface ReviewsResponse {
  data: Review[];
}