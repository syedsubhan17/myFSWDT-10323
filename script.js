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

        const p1 = new Promise((resolve) => {
            setTimeout(() => resolve(), 4000)
        })
        // await p1
        // console.log(2);

        // we want to run both of this at same time ===> soo we use "promise.all"

        const p2 = new Promise((resolve) => {
            setTimeout(()=>resolve(), 5000)            
        })
        // await p2
        // console.log(3); 

        const p3 = Promise.all([p1,p2])
        await p3
        console.log(p3);
    }
    catch (err){
        console.log(err);
    }
};

getTodos(); 
console.log('hello');