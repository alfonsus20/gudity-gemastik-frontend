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

export const longFormatDate = (
  date: string,
  addedDays?: number,
  withHour: boolean = true
) => {
  let x: any = "";

  if (addedDays) {
    x = new Date().setDate(new Date(date).getDate() + addedDays);
  }

  let d = new Date(addedDays ? x : date),
    month = d.getMonth(),
    day = "" + d.getDate(),
    year = d.getFullYear(),
    hour = "" + d.getHours(),
    minute = "" + d.getMinutes();

  if (day.length < 2) day = "0" + day;
  if (hour.length < 2) hour = "0" + hour;
  if (minute.length < 2) minute = "0" + minute;

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

  let formatted = [day, months[month], year].join(" ");

  if (withHour) {
    formatted += ", " + hour + ":" + minute;
  }

  return formatted;
};
