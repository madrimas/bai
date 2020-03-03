const reverse = function(arr) {
    arrReversed = [];
    arr.forEach(item => arrReversed.push(item));
    arrReversed.reverse();
    return arrReversed;
}

const sort = function(arr) {
    arrSorted = [];
    arrSorted = arr.sort();
    return arrSorted;
}

const even = function(arr) {
    let arrEven = [];
    arr.forEach((item, index) => {if(index%2 == 0){arrEven.push(item)}} )
    return arrEven;
}

numbers = [8,3,2,1,5,4,6];
console.log(numbers);
console.log(reverse(numbers));
console.log(even(numbers));
console.log(reverse(even(numbers)));
console.log(even(sort(numbers)));
