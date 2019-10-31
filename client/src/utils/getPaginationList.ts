const getPaginationList = (
  currentPage: number = 1,
  totalRecords: number = 5,
  diffNumber: number = 2
) => {
  let pageList =
    currentPage >= totalRecords || currentPage < 3 ? [] : [currentPage];
  if (currentPage >= 3 && currentPage <= totalRecords) {
    for (let i = 1; i <= diffNumber; i++) {
      const rightShift = currentPage + i;
      const leftShift = currentPage - i;
      if (rightShift < totalRecords) {
        pageList = [...pageList, rightShift];
      }
      if (leftShift > 1) {
        pageList = [leftShift, ...pageList];
      }
    }
  } else {
    const lastNumber = totalRecords > 5 ? 6 : totalRecords;
    for (let i = 2; i < lastNumber; i++) {
      pageList = [...pageList, i];
    }
  }
  return pageList;
};

export default getPaginationList;
