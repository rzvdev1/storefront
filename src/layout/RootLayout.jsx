import { Link, Outlet } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export function RootLayout() {
  return (
    <>
      <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
        <Link href='/'></Link>
        <Link href='/cart'></Link>
        <Link href='/productDetails'></Link>
      </Typography>
      <Outlet />
    </>
  );
}
