import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart } from '../../store/cart';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

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
              </div>
            ))}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
