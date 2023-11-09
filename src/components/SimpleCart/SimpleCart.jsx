import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart } from '../../store/cart';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid';
import { addToCart } from '../../store/cart';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'black',
};

export default function SimpleCart() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartCount);
  const cartData = useSelector((state) => state.cart.cartData);

  const itemRemove = (product) => {
    console.log('item removed from cart', product.name);
    dispatch(deleteFromCart(product));
    console.log(dispatch(deleteFromCart(product)));
  };

  const API_updateProducts = useSelector((state) => state.product.products);

  const itemUpdate = (product) => {
    console.log('item was updated from cart');
    console.log('item stock was add by 1');
    console.log(API_updateProducts.map((product) => product.inStock + 1));
    const productWithId = {
      ...product,
      id: uuidv4(),
    };
    dispatch(addToCart(productWithId));
    console.log('item stock was remove by 1');
    console.log(API_updateProducts.map((product) => product.inStock - 1));
  };

  return (
    <>
      <h2> {cart}</h2>
      <Button style={{ color: 'white' }} onClick={handleOpen}>
        View Cart
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Cart Items ({cart})
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {cartData.map((product) => (
              <div key={product.price}>
                <Typography>{product.name}</Typography>
                <Typography>{product.description}</Typography>
                <Typography>${product.price}</Typography>
                <Button onClick={() => itemRemove(product)}>
                  Remove From Cart
                </Button>
                <Button onClick={() => itemUpdate(product)}>
                  Update Cart By 1
                </Button>
              </div>
            ))}
          </Typography>
          <Button onClick={() => navigate('/cart')}>Checkout</Button>
        </Box>
      </Modal>
    </>
  );
}
