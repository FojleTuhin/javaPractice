/*fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res=> res.json())
.then(data=>console.log(data))


fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(Response=> Response.json())
.then(data=> console.log(data))




function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
}

function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => console.log(data))
}

function loadData3() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => loadInfo(data))
        .catch(error => console.error('error happend', error))
}

function loadInfo(data) {
    const ol = document.getElementById('unOrderList');

    for (let user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ol.appendChild(li)
    }
}

*/

// loadData3()

const stuInfo = JSON.stringify({ name: "James", roll: 3 });
// console.log(stuInfo.name); 

const dreamGirl = [
    {
        sokina: {
            name: "bbu",
            height: "5.4",
            family: [{ father: "rock", mother: "shila", sister: "chinki" }],
            age: undefined,
            contactInfo: [
                {
                    facebook: {
                        link: "https://www.facebook.com/",
                        followers: "12545",
                        status: "single",
                        friendsList: [{ name: "rofik" }, undefined],
                    },
                },
                { instagram: "https://www.instagram.com/" },
            ],
        },
    },
];

// console.log(dreamGirl[0].sokina.contactInfo[1].instagram)

const phones = [
    { name: "sony", price: 500 },
    { name: "apple", price: 700 },
    { name: "sony", price: 700 },
];
//    console.log(phones.filter((phone) => phone.price != 500))

async function f() {
    let result = 'first!';
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000);
    });
    result = await promise;
    // console.log(result);
}
f();


const myLoader = () =>{
    return new Promise ((resolve,reject) =>{
        const success= Math.random()
        if(success<=0.5){
            resolve(success)
        }

        else
        {
            reject(success)
        }
    })
}
// myLoader()
// .then(data => console.log('resolved data', data))
// .catch(err => console.log('rejected with value',err))





