import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './src/layout/RootLayout';
import ShoppingCart from './src/components/ShoppingCart/ShoppingCart';
import App from './src/App';
import ProductDetails from './src/components/ProductDetails/ProductDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/cart',
        element: <ShoppingCart />,
      },
      {
        path: '/productDetails',
        element: <ProductDetails />,
        children: [
          {
            path: ':id',
            element: <ProductDetails />,
          },
        ],
      },
    ],
  },
]);
