import React from "react";
import * as tf from "@tensorflow/tfjs";
import {
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
  Button
} from "@material-ui/core";
import colors from "./colors";
import { useStoreContext } from "../store";
import { RETURN_DATA } from "../store/action";
import API from "../utils/API"
import Wikipedia from "./Wikipedia"
import WikiCard from "./WikiCard"
import LoadResults from "./LoadResults";
import CarouselImg from "./carousel/CarouselImg";

// -------------------------------- PAGE STYLING----------------------------------------//
const useStyles = makeStyles((theme) => ({
  searchBar: {
    marginTop: theme.spacing(15),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    backgroundColor: colors.blue2,
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

// import * from "../../../tfjs-models/model.json"
export default function FileUpload() {
  const [, dispatch] = useStoreContext();
  const CLASSES = {
    0: "Actinic Keratoses (Solar Keratoses) or intraepithelial Carcinoma (Bowenâ€™s disease)",
    1: "Basal Cell Carcinoma",
    2: "Benign Keratosis",
    3: "Dermatofibroma",
    4: "Melanoma",
    5: "Melanocytic Nevi",
    6: "Vascular skin lesion",
  };

  const [image, setImage] = React.useState("");
  const imageRef = React.useRef();
  console.log("imageRef.current: " + imageRef.current);

  const [result, setResult] = React.useState("");
  const [showMore, setShowMore] = React.useState("");
  const [showMore1, setShowMore1] = React.useState("");
  const [showMore2, setShowMore2] = React.useState("");
  const [findings, setFindings] = React.useState("");
  console.log("These are findings" + findings);

  const [predicting, setPredicting] = React.useState(false);

  function uploader(e) {
    const imageFile = e.target.files[0];

    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
      setResult(e.target.result);
    });

    reader.readAsDataURL(imageFile);
    // console.log(result);
    console.log("Image file " + imageFile);
    return imageFile;
  }

  async function predict() {
    let tensor = tf.browser
      .fromPixels(imageRef.current)
      .resizeNearestNeighbor([224, 224])
      .toFloat();
    console.log("Tensor " + tensor);
    let offset = tf.scalar(127.5);

    tensor = tensor.sub(offset).div(offset).expandDims();
    const model = await tf.loadLayersModel(`/tfjs-models/model.json`);
    let predictions = await model.predict(tensor).data();
    console.log(predictions);
    let top3 = Array.from(predictions)
      .map(function (p, i) {
        return {
          probability: p,
          className: CLASSES[i],
        };
      })
      .sort(function (a, b) {
        return b.probability - a.probability;
      })
      .slice(0, 3);
    // ???
    // dispatch({ type: RETURN_DATA, payload: { top3 } });

    console.log(top3);
    const preds = await setFindings(top3)
    // return top3[0].probability + ", " +top3[1].probability + ", " + top3[2].probability
    // -----------------------------GLOBALSTATE SAVE -------------------------------------//
    return top3;
  }

  const showResults = async () => setFindings(await predict());

  // dispatch({ type: RETURN_DATA, payload: findings });

  const saveResults = async (event) => {
    event.preventDefault();
    try {
      const savedResults = await API.savePredictions({findings})
      console.log(savedResults)     
    } catch (error) {
      console.log(error)
      
    }
  };

  function refreshPage(){ 
    window.location.reload(); 
}

// function readMore(){
//   setShowMore("");
// }


  const classes = useStyles();

  return (
    <>
      <Container className={classes.searchBar} maxWidth='md'>
        <Grid container spacing={2}>
          <Grid item xs>
            <h2 className={classes.title}>Upload Skin Image</h2>

            <input
              className={classes.uploader}
              type='file'
              inputRef={imageRef}
              onChange={(e) => {
                setImage(e.target.files[0]);
                uploader(e);
              }}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              label='Image Upload'
              autoFocus
            />
                        <Button variant="contained" color="secondary" onClick= {() => {
              setResult("")
              setPredicting(false)
              setFindings("")
              setShowMore(false)
              setShowMore1(false)
              setShowMore2(false)
            }
              
              }> Clear</Button>
            {result && (
              <img
                ref={imageRef}
                src={result}
                alt=''
                className={classes.image}
              />
            )}
            {result && !predicting &&
            <>{result && <h3> Please click Predict button and wait while your image is being processed</h3>}
            {result && <Button variant="contained" color="primary" onClick= {() => {
              predict()
              setPredicting(true)
            }
              
          }> Predict</Button>}</> }
            {predicting && !findings && <h3>Processing results</h3>}

          </Grid>
          <Grid item xs>
            {findings && <h1> Findings are: </h1>}
            {findings &&
              findings.map((item, index) => (
                <li key={index}>
                  {" "}
                  {item.className} with a probability of{" "}
                  {(item.probability*100).toFixed(3) + "%"}
                </li>
              ))}
            {findings && <Button variant="contained" color="primary" onClick={saveResults}> Save Results</Button>}
            {findings && <Button variant="contained" color="primary" onClick={refreshPage}> Refresh the Page</Button>}

            {/* once findings are rendered build out the wikipedia results tab*/}
            {findings && <h1 className={classes.title}> Wikipedia lookup: </h1>}
            {findings && 
              <li>
                Wikipedia description of { findings[0].className }: 
                {findings && <Button color="primary" onClick= {() => {
                  setShowMore(true)
                  setShowMore1(false)
                  setShowMore2(false)
                }}> Show More </Button>}
                < Wikipedia diseaseName = { findings[0].className } />
              </li>
            }
            {findings && 
              <li>
                Wikipedia description of { findings[1].className }: 
                {findings && <Button color="primary" onClick= {() => {
                  setShowMore(false)
                  setShowMore1(true)
                  setShowMore2(false)
                }}> Show More </Button>}
                < Wikipedia diseaseName = { findings[1].className } />
              </li>
            }
            {findings && 
              <li>
                Wikipedia description of { findings[2].className }: 
                {findings && <Button color="primary" onClick= {() => {
                  setShowMore(false)
                  setShowMore1(false)
                  setShowMore2(true)
                }}> Show More </Button>}
                < Wikipedia diseaseName = { findings[2].className } />
              </li>
            }

          </Grid>
        </Grid>
        <Grid> 
          { findings && showMore && !showMore1 && !showMore2 &&
            <h1> Images of { findings[0].className } </h1>
          }
          <br></br>
          {findings && (showMore || showMore1 || showMore2 ) &&
            < CarouselImg />
          }
          <br></br>
          { findings && showMore && !showMore1 && !showMore2 &&
            <h1> Description of { findings[0].className } </h1>
          }
          { findings && showMore && !showMore1 && !showMore2 &&
            <WikiCard diseaseNameSearch = { findings[0].className }/> 
          }

          {/* for finding[1] */}
          { findings && !showMore && showMore1 && !showMore2 &&
            <h1> Description of { findings[1].className } </h1>
          }
          { findings && !showMore && showMore1 && !showMore2 &&
            <WikiCard diseaseNameSearch = { findings[1].className }/> 
          }

          {/* for finding[2] */}
          { findings && !showMore && !showMore1 && showMore2 &&
            <h1> Description of { findings[2].className } </h1>
          }
          { findings && !showMore && !showMore1 && showMore2 &&
            <WikiCard diseaseNameSearch = { findings[2].className }/> 
          }
        </Grid>
        <Grid>
          <LoadResults />
        </Grid>
      </Container>
    </>
  );
}


