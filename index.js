function receivesAFunction(callback) {
    return callback();
}


function returnsANamedFunction() {
    return function fn () {console.log('success')}
}

function returnsAnAnonymousFunction() {
    return function () {console.log('success')}
}