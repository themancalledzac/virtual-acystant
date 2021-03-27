import React, { useState, useEffect } from "react";
// import { Grid, Grid, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import {
  Grid,
  Button,
  Container,
  ListItem,
  List,
  makeStyles,
} from "@material-ui/core";
import colors from "./colors";
import API from "../utils/API";
import "../index.css";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(5),

    marginBottom: theme.spacing(15),
    borderRadius: "5px",
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

export default function LoadResults() {
  const classes = useStyles();
  const [results, setResults] = useState({});
  const [show, toggleShow] = React.useState(true);
  // state = {

  const getAllResults = () => {
    API.loadPredictions()
      .then((res) => setResults(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllResults();
  }, []);

  return (
    <Container maxWidth='lg' className={classes.searchBar}>
      <h1>All Saved Results</h1>
      {/* <Grid container spacing={2}> */}
      {/* <Grid item xs> */}
      {results.length ? (
        <div>
          {results.map((result) => (
            <Grid
              style={{ justifyContent: "space-between" }}
              container
              spacing={10}
              key={result._id}
            >
              <Grid item xs={12} sm={6}>
                <h4>Saved Result as of {result.date.slice(0, -14)} </h4>
              </Grid>
              <Grid item xs={12} sm={6}>
                <li>
                  {result.findings[0].className} with probability{" "}
                  {(result.findings[0].probability * 100).toFixed(3)} %
                </li>
                <li>
                  {result.findings[1].className} with probability{" "}
                  {(result.findings[1].probability * 100).toFixed(3)} %
                </li>
                <li>
                  {result.findings[2].className} with probability{" "}
                  {(result.findings[2].probability * 100).toFixed(3)} %
                </li>
              </Grid>
            </Grid>
          ))}
          <br></br>
        </div>
      ) : (
        <p className='search__form--alert'>
          It looks like you don't have any saved results!
        </p>
      )}
      {/* </Grid> */}
      {/* </Grid> */}
    </Container>
  );
}
// }
