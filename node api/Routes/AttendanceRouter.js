let express=require("express"),
    AtdRouter=express.Router(),
    mongoose=require("mongoose");

    require("../models/employee");
    require("../models/Attendance");
    let employeeModel=mongoose.model("Employee");
    let AttendanceModel=mongoose.model("Attendance");


    AtdRouter.get("/dailyReport/:id",(req,res)=>{

        AttendanceModel.findOne({Date:new Date().toLocaleDateString(),employee:req.params.id},
        (err,result)=>{

            if(!err)
            {
                if(result!=null)
                {
                    res.send(200,result)
                }
                else
                {
                    res.send(404)
                }

            }else
            {
                console.log(err.message)
            }
        })

    })
    AtdRouter.get("/monthlyReport/:id",(req,res)=>{
        AttendanceModel.find({ Date: { $lte: new Date("4/30/2019"),$gte:new Date("4/1/2019")
    },employee:req.params.id},
        (err,result)=>{

            if(!err)
            {
                if(result!=null)
                {
                    res.send(200,result)
                }
                else
                {
                    res.send(404)
                }

            }else
            {
                console.log(err.message)
            }
        })
    })

module.exports=AtdRouter;
