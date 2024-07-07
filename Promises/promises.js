const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task is complete');
        resolve() //after this exection the resolve will get connected to .then() method.
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
}) // Straight connection with Resolve.
//.then() gives a callback.


new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(()=>{
    console.log("Promise is consumerd Part2");
})


//How to pass values ??

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username:"Navaneeth", email:"navaneethv100@gmail.com"})
    },1000)
})

promiseThree.then((user)=>{
    console.log(user);
})



const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:"Navaneeth", email:"navaneethv100@gmail.com"})
        }else{
            reject('ERROR: Something Went Wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})



const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:"Javascript", email:"navaneethv100@gmail.com"})
        }else{
            reject('ERROR: JS Went Wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);  
    } catch (error) {
        console.log(error);
    }
     
}
consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/navaneethv100')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error");
//     }
    
// }
// getAllUsers()


fetch('https://api.github.com/users/navaneethv100')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log((error)))