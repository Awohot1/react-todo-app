const option = {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
};
//get day added
const getDate = () => {
  return new Intl.DateTimeFormat(navigator.language, option).format(new Date());
};

export default getDate;
