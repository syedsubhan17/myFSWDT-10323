const a = {
    name: 'subhan',
    age:22,
    car:{
        brand: 'BMW',
        model: 'X5'
    }
}

const b = {
    ...a,
}

a.name = "syed"
a.age = 18
a.car.brand = 'Mercedes'
a.car.model = 'C300D'

console.log(b);