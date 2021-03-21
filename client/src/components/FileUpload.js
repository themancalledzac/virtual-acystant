import React from "react";
import * as tf from "@tensorflow/tfjs";
import {
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import colors from "./colors";
import { useStoreContext } from "../store";
import { RETURN_DATA } from "../store/action";
import API from "../utils/API"
import Wikipedia from "./Wikipedia"

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
  const [findings, setFindings] = React.useState("");
  console.log("These are findings" + findings);

  const [predicting, setPredicting] = React.useState(false);

  function uploader(e) {
    const imageFile = e.target.files[0];

    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
      setResult(e.target.result);
    });
    // save to cloudinary or aws
    // db image url save
    // create and pass down image ID
    // result
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

  // db function that takes in predict data and then
  // calls state function to save data

  // function loadData(top3, result) {
  //   API.uploadData(top3, result)
  //     .then((res) => stateChange())
  //     .catch((err) => console.log(err));
  // }

  // call to update local state
  // function stateChange() {};

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
            {result && <button onClick= {() => {
              predict()
              setPredicting(true)
            }
              
              }> Predict</button>}</> }
            {predicting && !findings && <h3>Processing results</h3>}

          </Grid>
          <Grid item xs>
            {findings && <h1> Findings are: </h1>}
            {findings &&
              findings.map((item, index) => (
                <li key={index}>
                  {" "}
                  {item.className} with a probability of{" "}
                  {item.probability.toFixed(3) * 100 + "%"}
                </li>
              ))}
            {findings && <button onClick={saveResults}> Save Results</button>}

            <h2 className={classes.title}>Wikipedia lookup</h2>
            {findings && 
              <p>
                Wikipedia description of top finding:
                < Wikipedia diseaseName = { findings[0].className } />
              </p>
            }

          </Grid>
        </Grid>
      </Container>
    </>
  );
}

// <div className='image'>
//   <h2> Upload skin image</h2>
//   <input
//     type='file'
//     ref={imageRef}
//     onChange={(e) => {
//       setImage(e.target.files[0]);
//       uploader(e);
//       console.log("from onClick" + e.target.files[0]);
//       console.log("JSON stuff" + image[0]);
//     }}
//   />
//   {result && <img ref={imageRef} src={result} alt='' />}
//   {result && <button onClick={predict}> Predict</button>}
//   {result && <button onClick={showResults}> Show Results</button>}
//   {findings && <button onClick={saveResults}> Save Results</button>}
//   {/* {findings && <p> Findings are: {findings}</p>} */}
//   {findings && <h1> Findings are: </h1>}
//   {findings &&
//     findings.map((item, index) => (
//       <li key={index}>
//         {" "}
//         {item.className} with probability {item.probability}
//       </li>
//     ))}
// </div>;
