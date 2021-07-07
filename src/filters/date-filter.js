module.exports = function dateFilter(value) {
  const dateObject = new Date(value);
  let dd = null;
  let mm = null;

  if (dateObject.getDate() < 10) {
    dd = `0${dateObject.getDate()}`;
  } else {
    dd = dateObject.getDate();
  }

  if (dateObject.getMonth() < 10) {
    mm = `0${dateObject.getMonth()}`;
  } else {
    mm = dateObject.getMonth();
  }

  return `${dd}/${mm}`;
};
