import React from "react";
import * as tf from "@tensorflow/tfjs";
// import * from "../../../tfjs-models/model.json"

export default function FileUpload() {
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
  console.log("These are findings" + findings)

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
    return imageFile
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
    // db save
    // loadData(top3, result);
    // db(top5)
    // state save
    console.log(top3);
    return top3[0].probability + ", " +top3[1].probability + ", " + top3[2].probability
  }

  const showResults = async () => setFindings( await predict() );

  const saveResults = async () => {
    // API.saveResults(findings, result)
  }

  // db function that takes in predict data and then
  // calls state function to save data

  // function loadData(top3, result) {
  //   API.uploadData(top3, result)
  //     .then((res) => stateChange())
  //     .catch((err) => console.log(err));
  // }

  // call to update local state
  // function stateChange() {};

  return (
    <>
      <div className='image'>
        <h2> Upload skin image</h2>
        <input
          type='file'
          ref={imageRef}
          onChange={(e) => {
            setImage(e.target.files[0]);
            uploader(e);
            console.log("from onClick"+e.target.files[0]);
            console.log("JSON stuff" + image[0]);
          }}
        />
        {result && <img ref={imageRef} src={result} alt='' />}
        {result && <button onClick={predict}> Predict</button>}
        {result && <button onClick={showResults}> Show Results</button>}
        {findings && <button onClick={saveResults}> Save Results</button>}
        {findings && <p> Findings are: {findings}</p>}
      </div>
    </>
  );
}
