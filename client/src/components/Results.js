import { Button, Container, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import colors from "./colors";
import LoadResults from "./LoadResults";

const useStyles = makeStyles((theme) => ({
  resultsButton: {
    backgroundColor: colors.blue2,
    "&:hover": {
      backgroundColor: colors,
    },
  },
}));

const Results = () => {
  const classes = useStyles();
  const [show, toggleShow] = useState(true);
  return (
    <Container>
      <Button
        variant='contained'
        className={classes.resultsButton}
        onClick={() => toggleShow(!show)}
      >
        saved results: {show ? "hide" : "show"}
      </Button>
      {show && <LoadResults />}
    </Container>
  );
};

export default Results;
