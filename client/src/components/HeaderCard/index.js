import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import colors from "../colors";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    marginTop: theme.spacing(15),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    backgroundColor: colors.primary,
    marginBottom: theme.spacing(15),
  },
  title: {
    padding: "10px",
  },
}));

const HeaderCard = () => {
  const classes = useStyles();
  return (
    <>
      <Container
        className={classes.searchBar}
        maxWidth='md'
        style={{ backgroundColor: colors.primary }}
      >
        <Typography>
          <h3 className={classes.title}>Header Card</h3>
        </Typography>
      </Container>
    </>
  );
};

export default HeaderCard;
