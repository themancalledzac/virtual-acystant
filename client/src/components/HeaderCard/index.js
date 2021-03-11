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

const HeaderCard = (props) => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.searchBar} maxWidth='md'>
        <Typography>
          <h3 className={classes.title}>Header Card{props.title}</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,
            obcaecati? Libero iusto assumenda natus odio excepturi quos totam
            sapiente facilis perferendis nisi dolor architecto accusantium quam
            autem possimus a, blanditiis voluptatum doloribus? Ea similique
            dolor neque odit tempore. Maxime impedit excepturi, ab voluptate
            deserunt doloremque odit ea eum sunt qui? {props.paragraph}
          </p>
        </Typography>
      </Container>
    </>
  );
};

export default HeaderCard;
