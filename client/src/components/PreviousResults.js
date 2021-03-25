import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useStoreContext } from "../store";
// import { useSelector } from "react-redux";
import colors from "./colors";

const useStyles = makeStyles((theme) => ({
  resultsBar: {
    marginTop: theme.spacing(15),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    backgroundColor: colors.primary,
    marginBottom: theme.spacing(15),
  },
  title: {
    padding: "10px",
  },
  image: {
    maxWidth: "400px",
    maxHeight: "auto",
  },
  uploader: {
    marginBottom: "20px",
  },
}));

export default function PreviousResults() {
  const [state] = useStoreContext();
  // const probabilityData = useSelector((state) => state.probabilityDataState);
  const results = state.probabilityData;
  const classes = useStyles();
  return (
    <>
      <Container className={classes.resultsBar} maxWidth='md'>
        <Grid container spacing={2}>
          <Grid item xs>
            {results && <h1> Findings:</h1>}
            {results &&
              results.map((item, index) => {
                <li key={index}>
                  {" "}
                  {item.className} with a probability of{" "}
                  {item.probability.toFixed(3) * 100 + "%"}
                </li>;
              })}
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </Container>
    </>
  );
}
