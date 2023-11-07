import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Products from '../Products/Products';

export default function Categories() {
  const categories = useSelector((state) => state.product.categories);
  const products = useSelector((state) => state.product.products);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const selectCategory = (categoryName) => {
    console.log('category selected');
    setSelectedCategory(categoryName);
  };

  return (
    <>
      <h2>Categories</h2>
      {Array.isArray(categories) &&
        categories.map((category) => (
          <ListItem key={category._id}>
            <Button
              variant='outlined'
              onClick={() => selectCategory(category.name)}
            >
              {category.displayName}
              {category.description}
            </Button>
          </ListItem>
        ))}

      <ListItem>
        <Button variant='outlined' onClick={() => selectCategory(null)}>
          All Products
        </Button>
      </ListItem>
      <Products selectedCategory={selectedCategory} products={products} />
    </>
  );
}
