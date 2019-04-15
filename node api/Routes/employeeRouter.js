let express=require("express"),
    EmpRouter=express.Router(),
    mongoose=require("mongoose"),
    nodemailer = require("nodemailer");
    // session = require('express-session');



    
    require("../models/employee");
    require("../models/Attendance");
    let employeeModel=mongoose.model("Employee");
    let AttendanceModel=mongoose.model("Attendance");






//enable cors
EmpRouter.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });


EmpRouter.post("/register",(req,res,next)=>{

    let newEmp=employeeModel({
        _id:req.body._id,
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        Email:req.body.Email
    })

    newEmp.save((err,result)=>{
        if(err)
        {
            res.send(400);
            console.log(err.message)
        }
        else
        {
            res.send(201,req.body);
            console.log("done")
            //send mail


            // async..await is not allowed in global scope, must use a wrapper
            async function main(){
                console.log("send mail")

            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
            let testAccount = await nodemailer.createTestAccount();

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                user: testAccount.user, // generated ethereal user
                pass:testAccount.pass // generated ethereal password
                }
            });

            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: 'gehadkhaledshady1993@gmail.com', // sender address
                to: "mohamedabdulaal9@gmail.com", // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: "<b>Hello world?</b>" // html body
            });

            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            }

            main().catch(console.error);
        }

    })
})

EmpRouter.post("/CofirmAttend",(req,res,next)=>{

    employeeModel.findOne({_id:req.body.employee},(err,result)=>{

        if(!err)
        {
            if(result!=null)
            {
                let DayAttend=AttendanceModel({
                    Date:req.body.Date,
                    employee:req.body.employee,
                    attenTime:req.body.attenTime,
                    lateFalg:req.body.lateFalg
                });
                DayAttend.save((err,result1)=>{
                    if(!err)
                    {
                        res.send(200,result);
                    }
                    else
                    {
                        res.send(400)
                    }
                })


            }
            else
            {
                res.send(404);

            }
        }
        else
            console.log(err.message)
    })
})

EmpRouter.post("/Login",(req,res,next)=>{

    employeeModel.findOne({Email:req.body.Email},(err,result)=>{
        if(!err)
        {
            if(result!=null)
            {
                employeeModel.findOne({FirstName:req.body.Fname},(err1,result1)=>{
            
                    if(!err1)
                    {
                        if(result1!=null)
                        {
                            res.send(200,result1)
                        }
                        else
                        {
                            res.send(404,"invaled name")
                        }
                    }
                    else
                    {
                        console.log(err1.message)
                    }
                })
            }
            else
            {
                request.session.loggedIn=true;
                res.send(404,"invaled Email")
            }
                
        }
        else
        {
            console.log(err.message)
        }


    })
   

})

module.exports=EmpRouter;