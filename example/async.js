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

async function evalcount() {
    try{
        const result = await countdown
        console.log(`Success ${result}`);
    }catch(err){
        switch(err.message){
            case "Terminated":{
                console.log("Failed",err.message);
                break
            }
            default: {
                console.log("Failed",err.massage);
            }
        }
    }
}

evalcount()