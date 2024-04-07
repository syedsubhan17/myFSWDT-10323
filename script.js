const age = 123
const Name = "this is. a string"
const isAdult = true

const names =['name1', 'name2', 'name3']

//scope
function greet(){
    const name = 'me'
}
console.log(greet);

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);
