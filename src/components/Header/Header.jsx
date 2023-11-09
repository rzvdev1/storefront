import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SimpleCart from '../SimpleCart/SimpleCart';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Store Front
            </Typography>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              <Link to='/'>Home</Link>
            </Typography>
            Cart
            <ShoppingCartIcon style={{ padding: 5 }} />
            <SimpleCart />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
