// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushFront(arr, val) {
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i+1] = arr[i];
    }
    arr[0] = val;
}

// var test=[3,4,5,6];
// pushFront(test,2);
// console.log(test);


// ---------------------------------------------
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

function popFront(arr) {
    var pullNum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        arr[i-1] = arr[i];
    }
    arr.pop();
    return pullNum;
}

// var test=[3,4,5,6];
// popFront(test);
// console.log(test);


// ---------------------------------------------
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(array, val, spot) {
    for (var i = array.length - 1; i >= spot; i--) {
        array[i+1] = array[i];
    }
    array[spot] = val; 
}

// var chk = [3,9,4,8,5,7];
// insertAt(chk,11,4);
// console.log(chk);