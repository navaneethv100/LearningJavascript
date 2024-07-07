// class User{
//     constructor(userName, firstName, password){
//         this.userName = userName
//         this.firstName = firstName
//         this.password = password
//     }
//     changeUsername(){
//         return (`${this.userName}+username`);
//     }
//     changePassword(){
//         return (`${this.password}`);
//     }
// } 

// const newUser = new User("navaneethv100","navaneeth","zxyabc123::::")

// console.log(newUser.changeUsername());
// console.log(newUser.changePassword());



function User(userName, firstName, password){
    this.userName = userName
    this.firstName = firstName
    this.password = password
}

User.prototype.encrytText = function(){
    return (`${this.password}::12`);
}
User.prototype.changeName = function(){
    return (`${this.userName}+username`);
}

const lolUser = new User("Chamarai","chamari@lol","dox")
console.log(lolUser.changeName());
console.log(lolUser.encrytText());