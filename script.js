const a = {
    name: 'subhan',
    age: 22,  // shallow clone
    car:{
        brand: 'BMW',
        model: 'XS'// deep clone
    }
}

// const name = a.name
// const age = a.age
// const car = a.car

// const {name, age, car} = a
 const {name, age, brand} = a     //brand will be undefine
// console.log(name, car, age);
 console.log(name, age, brand);

const arr = ['john', 'jane', 'copper']

// const [name1,name2, name3] = arr
const [name3,name2, name1] = arr

// console.log(name1, name2, name3);
console.log(name2, name3);