const countdown = new Promise((resolve,rejects)=>{
    setTimeout(()=>{
        resolve("hello there")
    },2000)
    const success = true;
    if(success){
        rejects(new Error("Terminated"))
    }else{
        rejects(new Error("Unkown"))
    }
})

countdown
.then((param1)=>console.log(param1))
.catch((err)=>{
    switch(err.message){
        case "Terminated":{
            console.log("Fail", err.message)
            break
        }
        default :{
            console.log("Fail", err.message)
        }
    }
})