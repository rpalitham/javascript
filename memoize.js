// Memoization is an optimization technique where the results of expensive
// function calls are cached, so if the same inputs occur again,
// we can return the result immediately without re-executing the function.

const add = (a, b) => {
    return a + b
}

function memoize(fn){
    let cache = new Map();
    return function(...args){
        let key = JSON.stringify(args);
        if(cache.has(key)){
            console.log('return from cache')
            return cache.get(key)
        }
        const result = fn.apply(this, args)
        cache.set(key, result)
        return result
    }
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 3))
console.log(memoizedAdd(1, 3))