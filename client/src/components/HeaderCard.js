import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import colors from "./colors";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    marginTop: theme.spacing(15),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    backgroundColor: colors.blue2,
    marginBottom: theme.spacing(15),
    borderRadius: "4px",
  },
  title: {
    padding: "0px 10px 10px 5px",
    marginTop: "0px",
    color: colors.white,
  },
  image: {
    maxHeight: "500px",
    maxWidth: "100%",
    borderRadius: "5px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paragraph: {
    padding: "15px",
    borderRadius: "5px",
    backgroundColor: colors.white,
  },
  background: {
    backgroundColor: colors.blue1
  }
}));

const HeaderCard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      {/* <Container className={classes.searchBar} maxWidth='md'> */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <h2 className={classes.title}>{props.title}</h2>

            <p className={classes.paragraph}>{props.paragraph}</p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              className={classes.image}
              src={props.image}
              alt='headerImage'
            />
          </Grid>
        </Grid>
      {/* </Container> */}
    </div>
  );
};

export default HeaderCard;
