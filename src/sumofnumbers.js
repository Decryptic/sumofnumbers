// Function to calculate sum using a for loop
function sumFor(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return sum;
}

// Function to calculate sum using a while loop
function sumWhile(list) {
    let sum = 0;
    let i = 0;
    while (i < list.length) {
        sum += list[i];
        i++;
    }
    return sum;
}

// Function to calculate sum using recursion
function sumRecursion(list) {
    if (list.length === 0) {
        return 0;
    } else {
        return list[0] + sumRecursion(list.slice(1));
    }
}

// Function to calculate sum using underscore
function sumTheSimpleWay(list) {
    return _.reduce(list, function (memo, num) {
        return memo + num;
    }, 0);
}

