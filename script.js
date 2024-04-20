// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(data => data.json())
// .then(result => {
//     console.log(result);
// })
// .catch(error => {
//     console.log(error);
// })

const getTodos = async () =>{
    try{
        const result = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data  = await result.json()
    }
    catch (err){
        console.log(err);
    }
};

getTodos()