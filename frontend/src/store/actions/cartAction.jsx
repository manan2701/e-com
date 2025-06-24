import { toast } from "react-toastify";

export const addToCart = (users, product, dispatch, asyncupdateuser) => {
    const copyuser = { ...users, cart: [...users.cart] };
    const i = copyuser.cart.findIndex((c) => c.product?.id === product.id);
  
    if (i === -1) {
      copyuser.cart.push({ product, quantity: 1 });
    } else {
      copyuser.cart[i] = {
        product: product,
        quantity: copyuser.cart[i].quantity + 1,
      };
    }
    dispatch(asyncupdateuser(users.id, copyuser));
    toast.success("Added To Cart!")
  };
  