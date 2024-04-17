const body = document.querySelector('body')
const button = document.querySelector('button')

body.addEventListener('click', (event) =>{
    console.log(`Your clicked on this position: ${event.clientX} ${event.clientY}`);
})