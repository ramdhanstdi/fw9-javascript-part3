async function getData (){
	try{
	const result = await fetch('https://jsonplaceholder.typicode.com/users',{
		method: 'GET'
	})
	console.log(result);
	}catch{

	}
}