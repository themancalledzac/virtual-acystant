import React, { Component } from "react";
// import { Grid, Grid, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import {Grid,Button, Container, ListItem, List} from "@material-ui/core";
import API from "../utils/API";
import "../index.css";

class LoadResults extends Component {
  state = {
    results: {},
    errorMessage: ""
  };

  componentDidMount() {
    this.getAllResults();
    console.log(this.getAllResults())
  }

  getAllResults = () => {
    API.loadPredictions()
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };
 


  render() {
    return (
      <Container >
          <h1>All Saved Results (loaded from db)</h1> 
        <Grid>
          <Grid item xs>
            {this.state.results.length ? (
              <List>
                {this.state.results.map(result => (
                  <ListItem key={result._id}>

                    <h4>Saved Result as of {result.date} </h4>
                    <li >{result.findings[0].className} with probability {((result.findings[0].probability)*100).toFixed(3)} %</li>
                    <li >{result.findings[1].className} with probability {((result.findings[1].probability)*100).toFixed(3)} %</li>
                    <li >{result.findings[2].className} with probability {((result.findings[2].probability)*100).toFixed(3)} %</li>
                  </ListItem>
                ))}
              </List>
            ) : (
              <p className="search__form--alert">It looks like you don't have any saved results!</p>
              )}
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default LoadResults;