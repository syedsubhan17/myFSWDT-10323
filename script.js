// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(data => data.json())
// .then(result => {
//     console.log(result);
// })
// .catch(error => {
//     console.log(error);
// })

const getTodos = async () =>{
    const result = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data  = await result.json()
    console.log(data);
}

getTodos()