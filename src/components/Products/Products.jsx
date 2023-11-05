import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart';

export default function Products({ selectedCategory, products }) {
  const dispatch = useDispatch();
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const click = (product) => {
    console.log('item added to cart', product.name);
    dispatch(addToCart(product));
  };

  return (
    <>
      <h2>Products</h2>
      <List>
        {filteredProducts.map((product) => (
          <ListItem key={product.price}>
            <ListItemText>{product.name}</ListItemText>
            <ListItemText>{product.description}</ListItemText>
            <ListItemText>${product.price}</ListItemText>
            <ListItemText>In Stock: {product.inStock}</ListItemText>

            <ButtonGroup>
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
