const calculateAmount = (items = []) => {
  return items.reduce((acc, item) => {
    if (!item.price) return 0;
    return acc + parseInt(item.price);
  }, 0);
};

export default calculateAmount;
