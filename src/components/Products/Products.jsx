import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cart';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { getProducts } from '../../store/products';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Products({ selectedCategory, products }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const API_products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const API_updateProducts = useSelector((state) => state.product.products);

  const click = (product) => {
    console.log('item added to cart', product.name);
    // Add a unique id to the product
    const productWithId = {
      ...product,
      id: uuidv4(),
    };
    dispatch(addToCart(productWithId));
  };

  return (
    <>
      <h2>Products</h2>
      <List>
        {API_products.map((product) => (
          <ListItem key={product._id}>
            <ListItemText>{product.name}</ListItemText>
            <ListItemText>{product.description}</ListItemText>
            <ListItemText>${product.price}</ListItemText>
            <ListItemText>In Stock: {product.inStock}</ListItemText>

            <ButtonGroup>
              <Button variant='outlined'>
                <Link to={`/productDetails/${product._id}`}>View Details</Link>
                View Details
              </Button>
              <Button variant='outlined' onClick={() => click(product)}>
                Add to Cart
              </Button>
            </ButtonGroup>
          </ListItem>
        )) &&
          filteredProducts.map((product) => (
            <ListItem key={product._id}>
              <ListItemText>{product.name}</ListItemText>
              <ListItemText>{product.description}</ListItemText>
              <ListItemText>${product.price}</ListItemText>
              <ListItemText>In Stock: {product.inStock}</ListItemText>

              <ButtonGroup>
                <Button variant='outlined'>
                  <Link to={`/productDetails/${product._id}`}>
                    View Details
                  </Link>
                </Button>
                <Button variant='outlined' onClick={() => click(product)}>
                  Add to Cart
                </Button>
              </ButtonGroup>
            </ListItem>
          ))}
      </List>
    </>
  );
}
