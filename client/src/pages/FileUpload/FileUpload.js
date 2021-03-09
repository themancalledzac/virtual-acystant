import axios from 'axios'; 
import React,{Component} from 'react'; 
// import { Link, Switch, Redirect, Route } from 'react-router-dom'
// import Results from './Results'
  
class FileUpload extends Component { 
   
    state = { 
        selectedFile: null,
        status: false
    }; 
     
    // On file select (from the pop up) 
    onFileChange = event => { 
          this.setState({ 
            selectedFile: URL.createObjectURL(event.target.files[0])
          }); 
    }; 
    
    // backend api stuff ???????????
    onFileUpload = () => { 

      // Create an object of formData 
      // const formData = new FormData(); 
     
      // // Update the formData object 
      // formData.append( 
      //     "myFile", 
      //     this.state.selectedFile, 
      //     this.state.selectedFile.name
      //   ); 
     
      // Details of the uploaded file 
      var file = document.getElementById('fileItem').files[0];

      console.log(this.state.selectedFile); 
      console.log(file);
      this.setState({status: true})
     
      // Request made to the backend api 
      // Send formData object 
      // axios.post("api/uploadfile", formData); 
    }; 
     

     
    render() { 
      return ( 
          <div>
              <div>
                  <input
                      id="fileItem"
                      type="file"
                      label="Upload your skin lesion!"
                      custom
                    //   onChange={this.onFileChange} 
                      />
                  <button variant="success" 
                //   onClick={this.onFileUpload}
                  >
                      Upload!
                </button>
              </div>
          </div> 
      ); 
    } 
  } 
  
  export default FileUpload; 
