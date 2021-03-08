import axios from 'axios'; 
import React,{Component} from 'react'; 
import { Link, Switch, Redirect, Route } from 'react-router-dom'
// import button from 'react-bootstrap/button'
// import div from 'react-bootstrap/div'
// import Results from './Results'
  
class FileUpload extends Component { 
   
    state = { 
        selectedFile: null,
        status: false
    }; 
     

    onFileChange = event => { 
          this.setState({ 
            selectedFile: URL.createObjectURL(event.target.files[0])
          }); 
    }; 
    

    onFileUpload = () => { 

     
      // Details of the uploaded file 
      var file = document.getElementById('fileItem').files[0];

      console.log(this.state.selectedFile); 
      console.log(file);
      this.setState({status: true})
     
      // Request made to the backend api 
      // Send formData object 
      // axios.post("api/uploadfile", formData); 
    }; 
     
    content = () => {
        if (this.state.selectedFile && this.state.status) {  // if file is uploaded, redirect to results page
            return(
                <div> 
                    <div className= "title"> Your Results: </div>
                    <button variant="success" href='/' style={{marginLeft:'30px'}}>Upload another image</button>
                    <button variant="success" href='/doctor' style={{marginLeft:'10px'}}>Find Doctor</button>


                {/* <Switch>
                <Redirect from='/' to='/results'/>
                <Route path='/results'>
                  <Results image={this.state.selectedFile}/>
                </Route>
                </Switch> */}
                </div>  
            )

        } else { // else display upload page
            return (
            <div className="m-5">
              <div className="div">
                <button variant="success" href="/login">Log In</button>{' '}
                <button variant="success" href="/signup">SignUp</button>{' '}
              </div>
                      
            <div>
                <input
                  id="fileItem"
                  type="file"
                  label="Upload the image"
                  custom
                  onChange={this.onFileChange}/>
                  <button variant="success"onClick={this.onFileUpload}> 
                  Upload! 
                </button> 
            </div>
            <div className= "title"> Your Results: </div>
            

            {/* <img className = "img" alt="image-upload" src={props.image}/> */}
            <br/>
            <button variant="success" href='/' style={{marginLeft:'30px'}}>Upload another image</button>
            <button variant="success" href='/doctor' style={{marginLeft:'10px'}}>Find Doctor</button>



            </div>
            )
        }
    }
     
    render() { 
      return ( 
        <div> 
            {this.content()}
        </div> 
      ); 
    } 
  } 
  
  export default FileUpload; 