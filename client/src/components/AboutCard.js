import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 0
  },
  media: {
    height: 240,
  },
  
});

export default function MediaCard(props) {
  const classes = useStyles();

        return (
            <>
              <Card className={classes.root}>
              <CardActionArea>
                  <CardMedia
                  component="img"
                  className={classes.media}
                  image={props.headshot}
                  title={props.nameTitle}
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                      {props.name}
                  </Typography>
                  </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button size="small" color="primary" href={props.github} target="_blank">
                  GitHub
                  </Button>
                  <Button size="small" color="primary" href={props.linkedin} target="_blank">
                  LinkedIn
                  </Button>
              </CardActions>
              </Card>
          </>
    );
}
