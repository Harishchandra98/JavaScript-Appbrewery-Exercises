var fibonacciSequence = [];

function fibonacciGenerator(num) {
    for (var i=0; i<num; i++) {
        var ret = fibonacciNumber(i);
        // console.log(ret);
        fibonacciSequence.push(ret);
    }
    console.log(fibonacciSequence);
}

function fibonacciNumber(n) {
    if (n===0) {
        return 0;
    }
    if (n===1) {
        return 1;
    }
    return fibonacciNumber(n-1)+fibonacciNumber(n-2);
}

fibonacciGenerator(10);