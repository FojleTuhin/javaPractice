// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(res=> res.json())
    // .then(data=>console.log(data))


    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(Response=> Response.json())
    // .then(data=> console.log(data))


   

    function loadData(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
    }

    function loadData2(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => console.log(data))
    }

    function loadData3(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => loadInfo(data))
    }

    function loadInfo(data){
        for(let user of data){
            console.log(user.name)
        }
    }