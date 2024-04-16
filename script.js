// const a = [1, 2, 3 , 4, 5]

// const b = [6, 7, 8, 9, 10]

// const c = [...a,b]
// console.log(c);

const a = {
    name: 'subhan',
    age: 22
}

const b = {
    ...a,
}

a.name = "syed"

console.log(b);