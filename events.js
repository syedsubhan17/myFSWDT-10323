const body = document.querySelector('body')
const button = document.querySelector('button')

const callback = (event) =>{
    console.log(event);
}

button.addEventListener('click', callback)