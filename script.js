const a = {
    name: 'subhan',
    age: 22,
    car:{
        brand: 'BMW',
        model: 'XS'
    }
}

Object.keys(a).forEach(key =>{
    console.log(key);
})

// for(let key in a){
//     console.log(a[key])
// }