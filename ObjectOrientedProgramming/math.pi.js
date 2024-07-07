const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);
console.log(Math.PI);

const User = {
    name: "navaneeth",
    age: 24,
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(User,"name"));
Object.defineProperty(User, "age",{
    writable: false,
    enumerable: false,
})
