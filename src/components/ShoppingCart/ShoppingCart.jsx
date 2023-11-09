import Header from '../Header/Header';
import { useState } from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useSelector } from 'react-redux';

export default function ShoppingCart() {
  const cartData = useSelector((state) => state.cart.cartData);
  const totalItems = cartData.length;
  const totalAmount = cartData.reduce((total, item) => total + item.price, 0);

  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    billingAddress: '',
    shippingAddress: '',
    creditCardInfo: '',
    firstName: '',
    lastName: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted', formData);
    setShowAlert(true);
  };

  return (
    <>
      <Header />

      <h2>Order Summary</h2>

      <h2>Total Items: {totalItems}</h2>

      <h2>Items:</h2>
      <ul>
        {cartData.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>

      <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>

      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <Input
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <Input
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Billing Address:
          <Input
            type='text'
            name='billingAddress'
            value={formData.billingAddress}
            onChange={handleChange}
          />
        </label>
        <label>
          Shipping Address:
          <Input
            type='text'
            name='shippingAddress'
            value={formData.shippingAddress}
            onChange={handleChange}
          />
        </label>
        <label>
          Credit Card Info:
          <Input
            type='text'
            name='creditCardInfo'
            value={formData.creditCardInfo}
            onChange={handleChange}
          />
        </label>
        {/* Your form fields here */}
        {showAlert && (
          <Alert severity='success'>Thank you for your purchase!</Alert>
        )}
        <Button type='submit'>Submit</Button>
      </form>
    </>
  );
}
