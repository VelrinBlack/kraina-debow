export const scrollToRef = (scrollRef) => {
  scrollRef.current.scrollIntoView({ behavior: 'smooth' });
};

export const formatDate = (date) => {
  const newDate = new Date(date);

  let day = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();

  if (day.toString().length === 1) {
    day = `0${day}`;
  }

  if (month.toString().length === 1) {
    month = `0${month}`;
  }

  return `${day}.${month}.${year}`;
};
