import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Delete } from "./Admin_delete";
import { Post } from "./Admin_post";
import {Update} from "./Admin_update"

export const Dashboard = ()=>{
   const [mode, setMode ] = useState(null)
  return (
       <>  

          <div>
             <button onClick={()=>setMode("post")}>  <Link to="dashboard/post">Post </Link></button>
             <button onClick={()=>setMode("")}>Delete</button>
             <button>Update</button>
          </div>
       
       </>
  )

}


