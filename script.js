const a = {
    name: 'subhan',
    age: 22,  // shallow clone
    car:{
        brand: 'BMW',
        model: 'XS'// deep clone
    }
}

const {name:name1, 
    age:personAge, 
    car:hteircar
} = a

console.log(name1, personAge, hteircar);
