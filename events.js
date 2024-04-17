const body = document.querySelector('body')
const button = document.querySelector('button')

body.addEventListener('click', (event) =>{
    console.log(`Your clicked on this position: ${event.clientX} ${event.clientY}`);
    const ele = document.createElement('div')
    ele.style =`
    position: absolute`
    ele.style.top = `${event.clientY}px`
    ele.style.left = `${event.clientX}px`
    ele.style.width = `10px`
    ele.style.height = `10px`
    ele.style.backgroundColor = `cyan`
    ele.style.borderRadius = `50%`
    body.appendChild(ele)
})