const a = {
    name: 'subhan',
    age: 22,
    car:{
        brand: 'BMW',
        model: 'XS'
    }
}

for(let key in a){
    console.log(a[key])
}