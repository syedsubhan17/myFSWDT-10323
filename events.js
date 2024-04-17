const body = document.querySelector('body')
const button = document.querySelector('button')

body.addEventListener('mousemove', (event) =>{
    console.log(`Your clicked on this position: ${event.clientX} ${event.clientY}`);
    const ele = document.createElement('div')
    
    ele.style=`
    position: absolute;
    top: ${event.clientY}px;
    left: ${event.clientX}px;
    width: 10px;
    height:10px;
    background-Color: cyan;
    border-radius: 50%;
    `

    body.appendChild(ele)
})