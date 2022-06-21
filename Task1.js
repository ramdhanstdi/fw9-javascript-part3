const cekHariKerja = (day) => {
    return new Promise ((resolve, rejects)=>{
        setTimeout(()=>{
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                rejects(new Error ("Hari ini bukan hari kerja"))
            }
        },3000)
    })
}

//menggunakan then dan catch
cekHariKerja('kamis')
//jika promise resolve maka akan mengeksekusi then
.then ((day)=>{
    //dalam then terdapat callback yang isinya datang dari resolve
    console.log(day, 'selamat bekerja');
})
//jika promise reject maka akan mengeksekusi catch
.catch ((err)=>{
    //dalam catch berisikan error massage yang di dapatkan dalam reject
    switch(err.message){
        //ini adalah handle error yang sekiranya dapat di gunakan saat mengatasi error
        case 1 :{
        console.log("Istirahat", err.message)
            break
        }
        default :{
        console.log("Istirahat", err.message)
        }
    }
})

//menggunakan async await
async function evalDay(day){
    //jika promise resolve maka try akan di eksekusi
    try{
        //disini untuk memanggil fungsi promise yang di tulis setelah await dan hasilnya akan menjadi result
        const result = await cekHariKerja(day)
        //result akan di tuliskan disini
        console.log(result,'selamat bekerja');
    //jika promise reject maka catch akan menangkap error yang sebelumnya sudah di tulis di reject
    }catch(err){
        //ini untuk handling err yang di dapatkan dari reject
        switch(err.message){
            case 1:{
                console.log("Istirahat", err.message)
                break
            }
            default :{
                console.log("Istirahat", err.message)
            }
        }
    }
}

evalDay('sabtu')