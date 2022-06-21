const checkOut = (price,pay) => {
    return new Promise ((resolve, rejects)=>{
        console.log(`The Price is ${price}, you pay ${pay}`);
        if(price==pay){
            resolve(price)
        }else if (price > pay){
            rejects(new Error("Not Enough"))
        }else{
            rejects(new Error("Not Valid"))
        }
    })
}

async function payNow(price,pay){
    try{
        const result = await checkOut(price,pay)
        console.log(`Payment success, you pay ${result}`);
    }catch(err){
        switch(err.message){
            case "Not Enough":{
                console.log("Your Payment is",err.message);
                break
            }default:{
                console.log("Your Payment is",err.message);
            }
        }
    }
}

payNow(1000,100)