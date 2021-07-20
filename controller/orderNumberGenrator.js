export const generateOrderNumber = (prefix = "", date, suffix = "") => {
  let randomizedNumber = (Math.random() * parseInt(date)).toString();
  let base64String = btoa(parseInt(date) + Math.random() * date)
    .toString()
    .slice(0, 5);
  let base64Date =
    randomizedNumber.length >= 10
      ? btoa(randomizedNumber).slice(0, 5)
      : btoa(randomizedNumber);

  return `${prefix}-${base64Date + base64String}-${suffix}`;
};
