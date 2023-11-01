import { useSelector } from 'react-redux';
import { useState } from 'react';
import Products from '../Products/Products';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = useSelector(
    (state) => state.product.productData.categories
  );
  const products = useSelector((state) => state.product.productData.products);

  const selectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <>
      <h1>Categories</h1>

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
