const fetch = require('node-fetch')

async function getData (){
	try{
	const result = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await result.json()
	data.map((obj)=>{
		console.log(obj.name);
	})
	}catch(err){
		//console.log(err);
	}
}

getData()