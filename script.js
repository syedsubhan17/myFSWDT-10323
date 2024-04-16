const body = document.querySelector('body')

const toggleTheme = () =>{
    if(body.classList.contains('dark')){
        body.classList.remove('dark')
        body.classList.add('light')
    }
    else{
        body.classList.remove('light')
        body.classList.add('dark')
    }
}