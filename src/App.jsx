import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { useStyles } from './AppStyle';

function App() {
  const classes = useStyles();
  
  return (
   <Grid container justifyContent="center" alignItems="center">
      <Grid container justifyContent="center" alignItems="center" className={classes.container}>
        <Typography variant="h1">
          Personal Website
        </Typography>
      </Grid>
    </Grid>
  );
}

export default App;
