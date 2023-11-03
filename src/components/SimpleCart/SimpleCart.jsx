import { useSelector } from 'react-redux';

export default function SimpleCart() {
  const cart = useSelector((state) => state.cart.cartCount);
  const cartData = useSelector((state) => state.cart.cartData);

  return (
    <>
      <h2>{cart}</h2>
      <h2>{cartData}</h2>
    </>
  );
}
