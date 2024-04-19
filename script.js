const response = fetch('https://jsonplaceholder.typicode.com/todos')

response
.then(data=>{
    return data.json()
})
.then(finalData =>{
    console.log(finalData);
})