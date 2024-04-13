const a = {
    name: 'subhan',
    age:22,
    car:{
        brand: 'BMW',
        model: 'X5'
    }
}


Object.keys(a).forEach(key =>{
    console.log(key); //behind the itration in objects
})

for(let key in a){
    console.log([key]);
    console.log(a[key]);
}