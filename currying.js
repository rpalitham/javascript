const multiply = (a, b) => {
    return a*b;
}
// Using Bind function;
const multiplyBy2 = multiply.bind({}, 2);
const multiplyBy3 = multiply.bind({}, 3);
console.log(multiplyBy2(5))
console.log(multiplyBy3(5))

// Using closures
const add = (a) => {
    return (b) => {
        return a + b
    }
}

const add2 = add(2);
const add3 = add(3);
console.log(add2(5));
console.log(add3(6));

// Currying is the process of transforming a function with multiple arguments
// into a sequence of functions that take one argument at a time.
console.log(add(2)(3));
console.log('------------------------------')

// Let's implement a generic function which can curry any given function;
function curry(fn){
    return function curry(...args){
        if(args.length >= fn.length){
            return fn.apply(this, args)
        } else {
            return function(...nextArgs){
                return curry.apply(this, [...args, ...nextArgs])
            }
        }
    }
}

function multiplication(a, b, c){
    return a*b*c
}

const curriedMultiply = curry(multiplication)
console.log(curriedMultiply(2, 3, 5))
console.log(curriedMultiply(2, 3)(5))
console.log(curriedMultiply(2)(3)(5));