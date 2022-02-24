export const AddToCart = (cartItem) => {
  return {
    type: "AddToCart",
    payload: cartItem,
  };
};

export const RemoveFromCart = (id) => {
  return {
    type: "RemoveFromCart",
    payload: {id: id},
  };
};

export const ClearItems = () => {
  return {
    type: "ClearItems",
    payload: [],
  };
};
