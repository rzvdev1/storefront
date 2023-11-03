import { useSelector, useDispatch } from 'react-redux';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import cartSlice from '../../store/cart';
import { useEffect } from 'react';

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
  const cart = useSelector((state) => state.cart.cartCount);
  const dispatch = useDispatch();
  const cartItemsAdded = useSelector((state) => state.cart.caddToCart);

  const handleDelete = (id) => {
    console.log('delete item');
    console.log(id);
    dispatch(cartSlice.actions.deleteFromCart);
  };

  useEffect(() => {
    if (cartItemsAdded) dispatch(cartSlice.actions.addToCart());
  }, [cartItemsAdded]);

  return (
    <>
      <h2>{cart}</h2>
      <div>
        <Button style={{ color: 'black' }} onClick={handleOpen}>
          View Items
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Your shopping cart:
            </Typography>
            <Typography
              id='modal-modal-description'
              variant='h6'
              component='h2'
            >
              {Array.isArray(cartItemsAdded) ? (
                cartItemsAdded.map(
                  (item) =>
                    item && (
                      <div key={item.name}>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <Button onClick={() => handleDelete(item.id)}>
                          Delete
                        </Button>
                      </div>
                    )
                )
              ) : (
                <p>Nothing in cart</p>
              )}
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}
