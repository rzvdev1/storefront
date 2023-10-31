import { useDispatch, useSelector } from 'react-redux';
import productSlice from '../../store/products';

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.productData.products);
  return (
    <>
      <h1>Products</h1>
      <ul>
        {Array.isArray(products) &&
          products.map((product) => (
            <li key={product.price}>
              <button
                onClick={() => {
                  dispatch(
                    productSlice.actions.setActiveCategory(product.name)
                  );
                }}
              >
                {product.name}
                {product.displayName}
                {product.description}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}
