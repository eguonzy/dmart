export const dateFormater = (dateString = 0) => {
  let date = new Date(parseInt(dateString));
  return date.toDateString();
};
