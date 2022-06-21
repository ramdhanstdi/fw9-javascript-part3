const time = (cb) =>{
    setTimeout(()=>{
        cb()
    },2000)
}

const time2 = (cb) =>{
    time(()=>{
        time(()=>{
            cb()
        })
    })
}

time2 (()=>{
    console.log("time out");
})