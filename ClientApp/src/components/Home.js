import React, { useState } from 'react';
import axios from "axios";

export const Home = () => {

  const [file, setFile] = useState();

  /*
  * Handles the form submission - create form data which can then be passed into axios and posted to the server.
  */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = "FileUpload/Upload";
    const url = `https://localhost:7216/${endpoint}`;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    const config = {
      headers: {
        'content-type': "multipart/form-data"
      }
    };
    
    try{
      const response = await axios.post(url, formData, config);
      console.log(response);
    }
    catch(ex)
    {
      console.log(ex);
    }
  }

  /*
  * Handles the file change event - in this case, set the file that was selected into local form state
  */
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  return(
    <div>
      <h1>Task 1: Data Load</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="file" name="uploadFile" onChange={handleFileChange}/>
        </div>
        <button type="submit" >Upload</button>
      </form>
    </div>
  )
}