function getTempPromise(location){
    return new Promise(function(resolve, reject){
        if(typeof location === 'string'){
            resolve(30);
        } else {
            reject('city not found');
        }
    });
}

getTempPromise('Bengaluru').then(function(temp){
    console.log(temp);
}, function(err){
    console.log(err);
});

// Challenge Area
function addNumbers(a, b){
    return new Promise(function(resolve, reject){
        var sum = a + b;
        if(typeof sum === 'number'){
            resolve(sum);
        } else {
            reject('please enter numbers');            
        }
    });
}

addNumbers(6, 10).then(function(sum){
    console.log(sum);
}, function(err){
    console.log(err);
});