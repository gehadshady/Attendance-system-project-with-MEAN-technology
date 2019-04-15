let express=require("express"),
    mongoose=require("mongoose"),
    EmpRouter=require("./Routes/employeeRouter"),
    AtdRouter=require("./Routes/AttendanceRouter"),
    body_parser=require("body-parser").json();






//1-create server
let app=express();

app.listen(8080,()=>{
    console.log("I'm listining")
})


//db connection
mongoose.connect("mongodb://localhost:27017/AtendanceSystem");


// app.use((req,res,next)=>{
//     res.status(200).json({message:"hi"})
// })

app.use(body_parser);
/****** Router *****/

app.use("/employee",EmpRouter);
app.use("/employee",AtdRouter);

