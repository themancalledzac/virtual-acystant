import axios from "axios";
import React, { Component } from "react";
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

  function uploader(e) {
    const imageFile = e.target.files[0];

    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
      setResult(e.target.result);
    });
    // db image save
    reader.readAsDataURL(imageFile);

    console.log("Image file " + imageFile);
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
    let top5 = Array.from(predictions)
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
    // .then
    // state save
    console.log(top5);
  }

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
            console.log(e.target.files[0]);
          }}
        />
        {result && <img ref={imageRef} src={result} alt='' />}
        {result && <button onClick={predict}> Predict</button>}
      </div>
    </>
  );
}
