import axios from 'axios'; 
import React,{Component} from 'react'; 
import * as tf from "@tensorflow/tfjs"
// import * from "../../../tfjs-models/model.json"


  
// class FileUpload extends Component { 
   
    // state = { 
    //     selectedFile: null,
        // status: false
    // }; 
     
    // onFileChange = event => { 
    //       this.setState({ 
    //         selectedFile: URL.createObjectURL(event.target.files[0])
            
    //       }); 
    // }; 
    

    // onFileUpload = () => { 


    //   const data = new FormData(); 

    //   data.append( 
    //       "myFile", 
    //       this.state.selectedFile, 
          // this.state.selectedFile.name
        // ); 
     

    //   var file = document.getElementById('fileItem').files[0];

    //   console.log(this.state.selectedFile); 
    //   console.log(file);
    //   this.setState({status: true})
    //   console.log(data)
     

    //   axios.post("/image", data); 
    // }; 
     
     
  //   render() { 
  //     return ( 
  //         <div>
  //             <div>
  //               <br/>
  //                 <input
  //                     id="fileItem"
  //                     type="file"
  //                     label="Upload your skin lesion!"
  //                     custom
  //                     onChange={this.onFileChange} 
  //                     />
  //                 <button onClick={this.onFileUpload}>
  //                     Upload!
  //               </button>
  //               <img id="target" src = {this.state.selectedFile}/>

  //             </div>
  //         </div> 
  //     ); 
  //   } 
  // } 
  


  // export default FileUpload; 

  export default function FileUpload() {
    const [image, setImage] = React.useState("");
    const imageRef = React.useRef();
    console.log("imageRef.current: "+ imageRef.current)
  
      const [result, setResult] = React.useState("");
  
      function uploader(e) {
        const imageFile = e.target.files[0];

  
        const reader = new FileReader();
        reader.addEventListener("load", (e) => {
          setResult(e.target.result);
          // imageRef.current.src = e.target.result

          // let tensor = tf.browser.fromPixels(imageRef.current)
          //   .resizeNearestNeighbor([224,224])
          //   .toFloat();
          //   console.log("Tensor " + tensor)
            // let offset = tf.scalar(127.5);
    
            // tensor = tensor.sub(offset)
            // .div(offset)
            // .expandDims();

        });
        reader.readAsDataURL(imageFile);
        console.log("Image file " + imageFile)

      }

       
    async function predict() {


          let tensor = tf.browser.fromPixels(imageRef.current)
            .resizeNearestNeighbor([224,224])
            .toFloat();
            console.log("Tensor " + tensor)
            let offset = tf.scalar(127.5);
    
            tensor = tensor.sub(offset)
            .div(offset)
            .expandDims();
            const  model = await tf.loadLayersModel(`/tfjs-models/model.json`);
            let predictions = await model.predict(tensor).data();
            console.log(predictions)

    }

    // let model;
    // async function loadModel(name) {
    //     model = undefined;
    //     model = await tf.loadLayersModel(`../../../tfjs-models/model.json`);
    //     console.log(model)
    // }
  
    return (
      <div className="image">
        <h2> Upload skin image</h2>
        <input
          type="file"
          ref={imageRef}
          onChange={(e) => {
            setImage(e.target.files[0]);
            uploader(e);
            console.log(e.target.files[0])

          }}
        />
        {result && <img ref={imageRef} src={result} alt="" />}
        {result &&<button onClick = {predict}> Predict</button>}
      </div>
    );
  }