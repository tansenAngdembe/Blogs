import { useState } from "react";
import axios from "axios";


export const Post = () => {
    const [formData, setFormData] = useState({
        title: "",
        introduction: "",
        mainContent: "",
        conclusion: ""
      })
      const formChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
      }
      const formSubmit = async (e) => {
        e.preventDefault()
        try {
          const response = await fetch("http://localhost:8000/posting",{
            method:"POST",
            headers:{
              'Content-Type':"application/json"
            },
            body:JSON.stringify(formData)
    
          })
          if(response.ok){
            console.log("Sucessfuly data posted")
          }else{
            console.log("Data not posted")
          }    
        } catch (error) {
          console.log(error)
        }
      }
      const getAllData = async (e) => {
        e.preventDefault()
        const response = await axios.get("http://localhost:8000/");
        console.log(response)
    
    
      }

    return (
        <>
            <form onSubmit={formSubmit} method='post'>
                <input type="text"
                    name="title"
                    placeholder="Enter tile"
                    value={formData.title}
                    onChange={formChange} /><br />

                <input type="text"
                    name="introduction"
                    placeholder='enter introduction'
                    value={formData.introduction}
                    onChange={formChange}
                /><br />

                <textarea name="mainContent"
                    cols="30" rows="10"
                    placeholder='enter main content'
                    value={formData.mainContent}
                    onChange={formChange}
                /> <br />
                <textarea name="conclusion"
                    cols="30" rows="10"
                    placeholder='enter conclusion'
                    value={formData.conclusion}
                    onChange={formChange}
                />
                <button type="submit">Post</button>
            </form>
            <div>
                <button onClick={getAllData}>Get data</button>
            </div>


        </>
    )
}