function f(g, h) {
    setTimeout(() => {
        if(10 < 0) {
            g('P');
        } else {
            h('Q');
        }
    }, 3000);
}

const myPromise = new Promise(f);

// function executeIfResolved(value) {
//     console.log('Resolved with value ' + value);
// }

// function executeIfRejected(value) {
//     console.log('Rejected with value ' + value);
// }

// myPromise.then(executeIfResolved);

// myPromise.then(value => {
//     console.log('Resolved with value ' + value);
// });

myPromise
.then(value => {
    console.log('Resolved with value ' + value);
})
.catch(value => {
    console.log('Rejected with value ' + value);
});

console.log(myPromise);