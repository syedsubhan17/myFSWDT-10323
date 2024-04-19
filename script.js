

fetch('https://jsonplaceholder.typicode.com/todos')

.then(data=>data.json())
.then(result=>{
    console.log(result);
})