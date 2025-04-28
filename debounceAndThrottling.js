function handleSearch(query){
    console.log('searching for', query)
}

// Simulate rapid typing:
handleSearch('h');
handleSearch('he');
handleSearch('hel');
handleSearch('hell');
handleSearch('hello'); // Only this one triggers after 500ms


function debounce(fn, delay = 200){
    let timer;
    return function (...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

function throttle(fn, delay = 200){
    let flag = true;
    return function(...args){
        if(flag){
            flag = false;
            fn.apply(this, ...args);
            setTimeout(() => {
                flag = true
            }, delay)
        }
    }
}

const debouncedSearch = debounce(handleSearch, 500);
debouncedSearch('h');
debouncedSearch('he');
debouncedSearch('hel');
debouncedSearch('hell');
debouncedSearch('hello'); // Only this one triggers after 500ms