import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./Pagination.css"
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const theme = createTheme({
    palette: {
      yellow: {
        main: '#ffd369',
      },
    },
  });
  
export default function BasicPagination() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
    <ThemeProvider theme={theme}>
    <Stack spacing={2}style={{alignItems:"center", marginTop:"100px",marginBottom:"100px"}} >
      <Pagination
      count={5} 
      variant="outlined" 
      color="yellow" 
      size='large'
      defaultPage={1}
      />
    </Stack>
    </ThemeProvider>
    </Grid>
    </Grid>
  );
}