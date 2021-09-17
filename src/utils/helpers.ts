export const countRatingAverage = (reviews: any) => {
  if (reviews.length === 0) {
    return 0;
  }
  let total = reviews.reduce(
    (acc: number, review: any) => acc + review.star,
    0
  );

  let rounded = Math.round((total / reviews.length) * 100) / 100;

  return rounded;
};

export const longFormatDate = (date: string) => {
  let d = new Date(date),
    month = d.getMonth(),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (day.length < 2) day = "0" + day;

  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  return [day, months[month], year].join(" ");
};
