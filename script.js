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
        console.log('1');
        const result = await fetch('https://jsonplaceholder.typicode.com/todos');
        console.log(result);
        console.log('2');
        const data  = await result.json()
        console.log(data);
        console.log('3');
    }
    catch (err){
        console.log(err);
    }
};

getTodos()
console.log('hello');