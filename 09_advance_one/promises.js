const promise1 = new Promise(function(resolve, reject) {
    // Do an async task
    // DB cakks, cryptography, network

    setTimeout(function(){
        console.log("Async task is comolete");
        resolve();
    }, 1000)
});

promise1.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async task2");
        resolve();
    })
},1000).then(function(){
    console.log("Async 2 resolved");
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Raj", email: "Raj@gamil.com"})
    }, 1000)
});

promise3.then(function(user){
    console.log(user);
})

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Raj", password: "123"})
        } else{
            reject('ERROR: Somthing went wrong')
        }
    }, 1000)
})

promise4.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The Promise is either resolved or rejected");
})

const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "RajA", password: "1234"})
        } else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromise5(){
    try {
        const response = await promise5
        console.log(response);
    } catch(error){
        console.log(error);
    }
}

consumePromise5();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error){
//         console.log(error);
//     }
// }

// getAllUsers();


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))