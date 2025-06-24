import { useDispatch, useSelector } from "react-redux";
import "../styles/cart.css";
import { asyncupdateuser } from "../store/actions/userAction";
import { toast } from "react-toastify";

const Cart = () => {
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch()

  const increaseQuantity = (product) => {
    const copyuser = {...users, cart: [...users.cart]}
    const i = copyuser.cart.findIndex((c) => c.product?.id == product.id)
      copyuser.cart[i] = {
        product: product,
        quantity: copyuser.cart[i].quantity+1
      };
    dispatch(asyncupdateuser(users.id,copyuser))
  }

  const decreaseQuantity = (product) => {
    const copyuser = {...users, cart: [...users.cart]}
    const i = copyuser.cart.findIndex((c) => c.product?.id == product.id)
      if(copyuser.cart[i].quantity > 1){
        copyuser.cart[i] = {
          product: product,
          quantity: copyuser.cart[i].quantity-1
        }
      } else {
        copyuser.cart.splice(i,1)
      }
    dispatch(asyncupdateuser(users.id,copyuser))
  }
  const removeItem = (Index) => {
    const copyuser = {...users, cart: [...users.cart]}  
    copyuser.cart.splice(Index,1)
    dispatch(asyncupdateuser(users.id,copyuser))
    toast.error("Item Removed!")
  }

  const cartItems = users?.cart?.map((cart,Index) => {
    return (
      <div className="cart-item" key={cart.product?.id}>
        <div className="cart-image-wrapper">
          <img
            src={cart.product?.image}
            alt={cart.product?.title}
            className="cart-image"
          />
        </div>
        <div className="cart-content">
          <h3 className="cart-title">{cart.product?.title}</h3>
          <div className="cart-quantity-wrapper">
            <button 
              className="cart-user-btn cart-decrease" 
              onClick={() => decreaseQuantity(cart.product)}
            >-</button>
            <span className="cart-quantity">{cart.quantity}</span>
            <button 
              className="cart-user-btn cart-increase" 
              onClick={() => increaseQuantity(cart.product)}
            >+</button>
            <button 
              className="cart-delete-btn"
              onClick={() => removeItem(Index)}
            ><i className="fa-solid fa-trash"></i></button>
          </div>
          <p className="cart-price">
            <span>
              Total:{" "}
            </span>
            <span className="product-price">
              ${(cart.product?.price * cart.quantity).toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="cart-page">
      <h2 className="cart-heading">Your Cart</h2>
      {cartItems?.length > 0 ? (
        <div className="cart-list">{cartItems}</div>
      ) : (
        <p className="cart-empty">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
