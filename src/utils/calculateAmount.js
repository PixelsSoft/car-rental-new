const calculateAmount = (items = []) => {
  return items.reduce((acc, item) => acc + parseInt(item.price), 0);
};

export default calculateAmount;
