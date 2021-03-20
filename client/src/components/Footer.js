import { BottomNavigation, makeStyles } from "@material-ui/core";
import React from "react";
import colors from "./colors";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    marginTop: "5rem",
    paddingTop: "5rem",
    backgroundColor: colors.dark,
    color: "white",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <BottomNavigation className={classes.footerContainer}>
        <h1>Footer not staying off bottom</h1>
      </BottomNavigation>
    </>
  );
};

export default Footer;
