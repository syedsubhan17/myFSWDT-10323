const a = {
    name: 'subhan',
    age: 22,
    car:{
        brand: 'BMW',
        model: 'XS'
    }
}

const b = {
    ...a,
}

a.name = 'syed'
a.age = 23
a.car.brand = 'mercedes'
a.car.model = 'C300D' // this is also called nested spread operator

console.log(b);