const setTimer = (timer) => {
    return new Promise((resolve,reject)=>{
        console.log(`You set time to ${timer} sec`)
        if(timer == 0){
            reject(new Error("Timer is Zero"))
        }else if(timer > 0){
            setTimeout(()=>{
                resolve(timer)
            },timer*1000)
        }else{
            reject(new Error("Not a Number"))
        }
    })
}

async function timeManj(timer){
    try{
        const result = await setTimer(timer)
        console.log(`Time done, Total time is ${result} sec`);
    }catch(err){
        switch (err.message){
            case "Timer is Zero":{
                console.log(err.message,"You should input time");
                break
            }
            default:{
                console.log("You should input number");
            }
        }
    }
}

timeManj(0)