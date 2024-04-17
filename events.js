const body = document.querySelector('body')
const button = document.querySelector('button')

document.addEventListener('scroll', (event) =>{
    if(window.scrollY > 400){
        const ele = document.createElement('hi')
        ele.innerHTML = 'Hello SUBHAN'
        body.appendChild(ele)
        ele.style =`
        font-size: 20px;
        transition: 1s ease;
        position: absolute;
        top: 450px;
        left: 500px;
        `
    }
})