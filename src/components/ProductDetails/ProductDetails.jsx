import Header from '../Header/Header';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../store/products';

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getProductDetails(id)).then(() => setIsLoading(false));
  }, [dispatch, id]);

  const product = useSelector((state) => state.product.productDetails);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
      <p>Product Name: {product.name}</p>
      <p>Price: ${product.price}</p>
      <p>In Stock: {product.inStock ? 'Yes' : 'No'}</p>
      <p>Category: {product.category}</p>
      <div>
        <h3> Review</h3>
        <p>
          This product is amazing! I would definitely recommend it to my
          friends.
        </p>
      </div>
      <div>
        <h3>Suggestions</h3>
        <p>If you like this product, you might also like these:</p>
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
        </ul>
      </div>
    </>
  );
}
