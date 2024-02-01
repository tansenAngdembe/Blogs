require("dotenv").config()
const express = require("express");
const cors = require("cors")
const cookieParser = require("cookie-parser")

const app = express();
const User = require("./Router/routers")
const connectDb = require("./server")

// middleware 
app.use(express.json());
app.use(cookieParser())
app.use("/",User)
// app.use(cors({
//    "origin":"http://localhost:5173"
  
// }))
// app.options("/posting",cors())
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
//   });
const PORT = process.env.PORT || 8000;
const URI = process.env.URI_MONGOOSE;
const server =async ()=>{
     try {
        await connectDb(URI)
        app.listen(PORT,()=>{
            console.log(`Server running on port ${PORT}`);
        })
        console.log("Database connected sucessfully")

     } catch (error) {
         console.log("Server not workoing")
     }
}
server();


