const connectToMongo = require('./db');
const express = require('express');
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');
const path = require('path');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const userRoute  = require("./routes/userRoute");
const errorHandler = require("../backend/middleware/errorMiddleware");
const app = express()
app.use(fileUpload({
    useTempFiles:true
}))


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);




app.use("/uploads",express.static(path.join(__dirname,"uploads")));
// Routes Middleware
app.use("/api/users", userRoute);

app.get("/",(req,res)=>{
  console.log("hello");
  res.send("Home Page");
})

app.use(errorHandler);

connectToMongo();
const port = 5000;


app.use('/NGOdata', require('./routes/Ngosdata'));

// app.get("/", async(req, res)=>{
//   res.render('form');
// })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})