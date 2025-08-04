const getOrderSummary = (products) => {
  const details = products.map((product) => {
    const {
      name,
      price,
      discount,
      quantity,
      bulkDiscount = { minQuantity: Infinity, extraDiscount: 0 },
    } = product;

    let totalDiscount = discount;

    if (quantity >= bulkDiscount.minQuantity) {
      totalDiscount += bulkDiscount.extraDiscount;
    }

    const finalPrice = Math.round(price * (1 - totalDiscount));
    const subtotal = finalPrice * quantity;

    return { name, finalPrice, quantity, subtotal };
  });

  const totalBeforeDiscount = products.reduce(
    (sum, { price, quantity }) => sum + price * quantity,
    0
  );

  const totalAfterDiscount = details.reduce(
    (sum, { subtotal }) => sum + subtotal,
    0
  );

  return {
    totalBeforeDiscount,
    totalAfterDiscount,
    details,
  };
};

const products = [
  { name: "A", price: 100, discount: 0.1, quantity: 2 },
  {
    name: "B",
    price: 200,
    discount: 0.2,
    quantity: 1,
    bulkDiscount: { minQuantity: 2, extraDiscount: 0.05 },
  },
  {
    name: "C",
    price: 300,
    discount: 0,
    quantity: 3,
    bulkDiscount: { minQuantity: 3, extraDiscount: 0.1 },
  },
];

console.log(getOrderSummary(products));
