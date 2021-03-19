export const genPageArray = (number) => {
  const totalPages = Math.ceil(number / 10);
  let pageCount = 0;
  const numberArray = Array(totalPages)
    .fill(0)
    .map(() => {
      pageCount++;
      return pageCount;
    });

  return numberArray;
};
