import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';

export default function Products({ selectedCategory, products }) {
  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <>
      <h2>Products</h2>
      <List>
        {filteredProducts.map((product) => (
          <ListItemText key={product.price}>
            <ListItem>{product.name}</ListItem>
            <ListItem>{product.description}</ListItem>
          </ListItemText>
        ))}
      </List>
    </>
  );
}
