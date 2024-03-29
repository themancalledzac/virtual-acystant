import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MapEmbed from "./MapEmbed";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  }
}));

const MapContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <MapEmbed />
        </Grid>
      </Grid>
    </div>
  );
}

export default MapContainer;