import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
  return (
    <BottomNavigation>
      <BottomNavigationAction
        label='Copyright'
        icon={<CopyrightIcon />}
        showLabel={true}
      />
      =
    </BottomNavigation>
  );
}
