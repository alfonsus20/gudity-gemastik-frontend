export const countRatingAverage = (reviews: any) => {
  if (reviews.length === 0) {
    return 0;
  }
  let total = reviews.reduce(
    (acc: number, review: any) => acc + review.star,
    0
  );
  return total / reviews.length;
};