import React from "react";
// import model from "../../tfjs-models/model.json"
import $ from "jquery"
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';
// import * as tfvis from '@tensorflow/tfjs-vis';
// import * as tf from '@tensorflow/tfjs-core';




const PageThree = () => {
    const CLASSES ={
        0: 'Actinic Keratoses (Solar Keratoses) or intraepithelial Carcinoma (Bowenâ€™s disease)',
        1: 'Basal Cell Carcinoma',
        2: 'Benign Keratosis',
        3: 'Dermatofibroma',
        4: 'Melanoma',
        5: 'Melanocytic Nevi',
        6: 'Vascular skin lesion'
      }
    
    
    function loadImage () {
        let reader = new FileReader();
        reader.onload = function () {
            let dataURL = reader.result;
            $("#selected-image").attr("src", dataURL);
            $("#prediction-list").empty();
        }
        let file = $("#image-selector").prop("files")[0];
        reader.readAsDataURL(file);
    };
    
    function selectModel () {
        loadModel($("#model-selector").val());
    };
    
    let model;
    async function loadModel(name) {
        $(".progress-bar").show();
        model = undefined;
        model = await tf.loadLayersModel('../../tfjs-models/model.json');
        console.log(model)
        $(".progress-bar").hide();
    }
    
    async function prediction() {
        let image = $("#selected-image").get(0);
        console.log("clicked button")
        console.log(image)
        console.log(model)
        let modelName = $("#model-selector").val();
        // let tensor = tf.fromPixels(image)
        let tensor = tf.browser.fromPixels(image)
        .resizeNearestNeighbor([224,224])
        .toFloat();
    
        let offset = tf.scalar(127.5);
        
        tensor = tensor.sub(offset)
        .div(offset)
        .expandDims();
    
        let predictions = await model.predict(tensor).data();
        let top5 = Array.from(predictions)
            .map(function (p, i) {
                return {
                    probability: p,
                    className: CLASSES[i]
                };
            }).sort(function (a, b) {
                return b.probability - a.probability;
            }).slice(0, 3);
    
        $("#prediction-list").empty();
        top5.forEach(function (p) {
            $("#prediction-list").append(`<li>${p.className}: ${p.probability.toFixed(6)}</li>`);
        });
    };
    
  return (
      <div>
          <h1>PageThree</h1>
          <div className="container mt-5"></div>
          <main>
                  <div className="row">
                      <div className="col-12">
                          <div className="progress progress-bar progress-bar-striped progress-bar-animated mb-2" style={{display:"none"}}>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-3">
                          <select id="model-selector" className="custom-select" onChange = {selectModel}>
                              <option disabled>Select Model</option>
                              <option>Model</option>

                          </select>
                      </div>

                      <div className="input-group col-8">
                          <div className="input-group-prepend">
                              <span className="input-group-text" id="image-selector-addon">Upload</span>
                          </div>
                          <div className="custom-file">
                              <input type="file" className="custom-file-input" id="image-selector" aria-describedby="image-selector-addon" onChange = {loadImage}/>
                              <label className="custom-file-label" htmlFor="image-selector">Image Selector</label>
                          </div>
                      </div>
                      <div className="col-1">
                          <button id="predict-button" className="btn btn-primary float-right" onClick = {prediction} >Predict</button>
                      </div>
                  </div>
                  <div className="container">
                      <div className="row">
                          <div className="col-6">
                              <h2 className="ml-3">Predictions</h2>
                              <ol id="prediction-list"></ol>
                          </div>
                          <div className="col-6">
                              <h2 className="ml-3">Image</h2>
                              <img id="selected-image" className="ml-3" src="" />
                          </div>
                      </div>
                  </div>

    </main>
    </div>
  );
};

export default PageThree;
