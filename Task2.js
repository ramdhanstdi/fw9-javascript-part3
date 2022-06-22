const getmonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['Januari','February','March','April','May','June','July','August','September','October','November','Decemcer'];
        if(!error){
            callback(null, month)
        }else{
            callback(new Error('Sorry Data Not Found'),[])
        }
    }, 4000);
}

const print = (param1,param2) =>{
    if(param1!=null){
        console.log(param1)
    }else{
        param2.map((arr)=>{
        console.log(arr)
    })
}}

getmonth(print)