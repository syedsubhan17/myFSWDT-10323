fetch('https://jsonplaceholder.typicode.com/todos')
.then(data=>data.json())
.then(finalData =>{
    console.log(finalData);
})
.catch(err=>{
    console.log(err);
})