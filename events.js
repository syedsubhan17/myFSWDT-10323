const body = document.querySelector('body')
const button = document.querySelector('button')
const content = document.querySelector('#content')
const progressBar = document.querySelector('progress')

// console.log(content.clientHeight);
const contentHeight = content.clientHeight

document.addEventListener('scroll', (event) => {
    const scroll = window.scrollY
    const percentage = scroll / (contentHeight - window.innerHeight)
    console.log(percentage * 100);
    progressBar.value = (percentage * 100).toFixed(0)
})