// const getProducts1 = () =>{

// }




let products

const getProducts2 = () => {
    setTimeout(()=>{
        products = [
            {name:'Apple', price: 100},
            {name:'Orange', price: 100},
            {name:'Banana', price: 100},
            {name:'Grape', price: 100},
            {name:'Pineapple', price: 100},
            {name:'Mango', price: 100},
            {name:'Strawberry', price: 100},
            {name:'Watermelon', price: 100},
            {name:'Peach', price: 100},
            {name:'Cherry', price: 100},
        ]
    },3000)
}

getProducts2()

console.log(products);

setTimeout(() => {
    console.log(products)
},1000)
setTimeout(() => {
    console.log(products)
},2000)
setTimeout(() => {
    console.log(products)
},3000)