const headingObject = document.getElementById('heading')
const listObject = document.getElementById('list')

const arr = ['element1', 'element2', 'element3', 'element4', 'element5',]

const textNode = document.createTextNode('Hello World')

arr.forEach((element) => {
    const li = document.createElement('li')
    const text = document.createTextNode(element)
    li.appendChild(text)
    listObject.appendChild(li)
})