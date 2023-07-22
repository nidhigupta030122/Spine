let mongoose =require('mongoose');
//connection
mongoose.connect(process.env.DB_url,{
    useUnifiedTopology: true,
     useNewUrlParser: true,
    }).
then( ()=> console.log("connect is successfully"))
.catch((err)=>
console.log("Something Went Wrong",err)
)

