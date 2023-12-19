import { createTheme } from '@mui/material';

export default function MuiTheme() {
    const theme = createTheme({
        status: {
          danger: orange[500],
        },
      });

  return theme;
}
