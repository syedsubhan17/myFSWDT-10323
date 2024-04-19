// const getProducts1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const products = [
//                 { name: 'Apple', price: 100 },
//                 { name: 'Orange', price: 100 },
//                 { name: 'Banana', price: 100 },
//                 { name: 'Grape', price: 100 },
//                 { name: 'Pineapple', price: 100 },
//                 { name: 'Mango', price: 100 },
//                 { name: 'Strawberry', price: 100 },
//                 { name: 'Watermelon', price: 100 },
//                 { name: 'Peach', price: 100 },
//                 { name: 'Cherry', price: 100 },
//             ];
//             resolve(products);
//         }, 3000);
//     });
// };

// const syncFunction = () => {
//     for (let i = 0; i < 10000; i++) {
//         console.log('loop');
//     }
// };

// const result = getProducts1()
// result.then(phone =>{
//     console.log(phone);
// })

// console.log(result);

const age = 11


const myPromise = new Promise((resolve,reject) => {
    setTimeout(()=>{
        if(age>18) resolve('You are eligible to vote') //this are blocking task
        else reject('You are not eligible to vote')
    },5000)
    
})

setTimeout(()=>{
    console.log(myPromise);
},6000)