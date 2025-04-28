const orders = [
    {
        id: 101,
        customer: {
            name: 'Alice',
            email: 'alice@example.com',
            address: {
                street: '123 Main St',
                city: 'New York',
                zip: '10001',
            },
        },
        items: [
            { product: 'Laptop', quantity: 1, price: 1200 },
            { product: 'Mouse', quantity: 2, price: 25 },
        ],
        status: 'shipped',
    },
    {
        id: 102,
        customer: {
            name: 'Bob',
            email: 'bob@example.com',
            address: {
                street: '456 Maple Ave',
                city: 'Los Angeles',
                zip: '90001',
            },
        },
        items: [
            { product: 'Phone', quantity: 1, price: 800 },
            { product: 'Case', quantity: 1, price: 20 },
        ],
        status: 'processing',
    }]

const ordersClone = structuredClone(orders);
console.log(ordersClone === orders); // false

function deepClone(obj){
    if(obj === null || typeof obj !== 'object'){
        return obj
    }
    let result = Array.isArray(obj) ? [] : {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            result[key] = deepClone(obj[key])
        }
    }
    return result;
}


const person = {
    name : 'ram',
    age : 15,
    interests : ['badminton', 'cricket']
}

const personClone = deepClone(person);
// const ordersDeepClone = deepClone(orders)
// console.log('orders clone ',ordersDeepClone)
console.log('person clone', personClone)
console.log(personClone === person)


// what happens if an obj is being referring to itself if it has a circular dependency
let a = {};
a.self = a;

console.log(a); //<ref *1> { self: [Circular *1] }
// what if we want to clone with the deepClone we have created now.

// const aCopy = deepClone(a);
// console.log(aCopy) // It throws an maximum call stack exceeded.
// This leads to maximum call stack exceeded — a recursion loop you can’t escape.

// Solution
function deepCloneWithWeakMap(obj, hash = new WeakMap()){
    if(obj === null || typeof obj !== 'object'){
        return obj
    }
    if(hash.has(obj)){
        return hash.get(obj)
    }
    let result = Array.isArray(obj) ? [] : {};
    hash.set(obj, result)
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(result)
            result[key] = deepCloneWithWeakMap(obj[key], hash)
        }
    }
    return result;
}
const aCopyWithCircularRef = deepCloneWithWeakMap(a);
console.log(aCopyWithCircularRef)