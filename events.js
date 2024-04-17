const body = document.querySelector('body')
const button = document.querySelector('button')

body.addEventListener('keydown', (event) =>{
    console.log(`key pressed: ${event.key}`);
})