import { useDispatch, useSelector } from 'react-redux';
import productSlice from '../../store/products';

export default function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);

  return (
    <>
      <h1>Categories</h1>
      <ul>
        {Array.isArray(categories) &&
          categories.map((category) => (
            <li key={category._id}>
              <button
                onClick={() => {
                  dispatch(
                    productSlice.actions.setActiveCategory(category.name)
                  );
                }}
              >
                {category.name}
                {category.displayName}
                {category.description}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}
