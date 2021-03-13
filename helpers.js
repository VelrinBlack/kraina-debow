export const scrollToRef = (scrollRef) => {
  scrollRef.current.scrollIntoView({ behavior: 'smooth' });
};
