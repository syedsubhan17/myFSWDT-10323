const headingObject = document.getElementById('heading')
const listObject = document.getElementById('list')

const listElement = document.getElementsByClassName('list-ele')

console.log(listElement); //getElementsbyClassname returns Array  eve nit conatins 1 value
console.log(listObject); //it is normal



// const arr = ['element1', 'element2', 'element3', 'element4', 'element5',]

// const textNode = document.createTextNode('Hello World')

// listObject.innerHTML = ' '
// arr.forEach((element) => {
//     const li = document.createElement('li')
//     const text = document.createTextNode(element)
//     li.appendChild(text)
//     listObject.appendChild(li)
// })