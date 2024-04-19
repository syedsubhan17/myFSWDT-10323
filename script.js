const response = fetch('https://jsonplaceholder.typicode.com/todos')

response.then(data=>{
    const streamData = data.json()
    streamData.then(finalData=>{
        console.log(finalData);
    })
})