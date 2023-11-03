import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import SimpleCart from '../SimpleCart/SimpleCart';

export default function Products({ selectedCategory, products }) {
  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const click = (e) => {
    e.preventDefault();
    console.log('item added to cart');
    return <SimpleCart />;
  };

  return (
    <>
      <h2>Products</h2>

      <List>
        {filteredProducts.map((product) => (
          <ButtonGroup
            variant='outlined'
            aria-label='outlined button group'
            key={product.price}
          >
            <ListItemText>
              <ListItem>{product.name}</ListItem>
              <ListItem>{product.description}</ListItem>
              <ListItem>${product.price}</ListItem>
              <ListItem>In Stock: {product.inStock}</ListItem>
              <Button onClick={click}>Add to Cart</Button>
            </ListItemText>
          </ButtonGroup>
        ))}
      </List>
    </>
  );
}
