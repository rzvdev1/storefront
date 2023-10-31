import { useDispatch, useSelector } from 'react-redux';
import productSlice from '../../store/products';

export default function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector(
    (state) => state.product.productData.categories
  );

  const clickCategory = (e) => {
    e.preventDefault();

    if (e.target.textContent === 'Food')
      console.log(
        dispatch(productSlice.actions.setActiveCategory(e.target.textContent))
      );

    if (e.target.textContent === 'Electronics')
      console.log(
        dispatch(productSlice.actions.setActiveCategory(e.target.textContent))
      );

    if (e.target.textContent === 'Clothing')
      console.log(
        dispatch(productSlice.actions.setActiveCategory(e.target.textContent))
      );
  };

  return (
    <>
      <h1>Categories</h1>

      <ul>
        {Array.isArray(categories) &&
          categories.map((category) => (
            <li key={category._id}>
              <button onClick={clickCategory}>
                {category.displayName}
                {category.description}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}
