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
  //event
  return {
    type: "ClearItems",
    payload: [],
  };
};
export const SubtractToCart = (cartItem) => {
  return {
    type: "SubtractToCart",
    payload: cartItem,
  };
};



