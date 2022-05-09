
// Reverse
function reverseArray(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}

// var arr1=[12,11,10,9,8,7,6];
// reverseArray(arr1);
// console.log(arr1);


/* Rotate -------------------------------------------------------------- */

function rotateArray(array, moves) {
    if (moves > 0) {
        // for moves to the right
        for (var i = 0; i < moves; i++) {
            var temp = array[array.length - 1];
            for (var posn = array.length - 2; posn >= 0; posn--) {
                array[posn + 1] = array[posn];
            }
            array[0] = temp; // Put temp value at the beginning of the array
        }
    } else {
        // for moves toward left 
        for (var i = 0; i < Math.abs(moves); i++) {
            var temp = array[0];
            for (var posn = 1; posn < array.length; posn++) {
                array[posn - 1] = array[posn];
            }
            array[array.length - 1] = temp; // Put temp value at end of array
        }
    }
}

// var testArray=[10,20,30,40,50];
// rotateArray(testArray,3);
// console.log(testArray);


/* Filter Range ---------------------------------------------------------------- */
function filterRange(array, minVal, maxVal) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] < minVal || array[i] > maxVal) {
            for (var x = i + 1; x < array.length; x++) {
                array[x - 1] = array[x];
            }
            array.length--; 
            i--; // from video walkthru @1:18: this "cancels out" the i++
        }
    }
}


// var testArray=[21,22,23,24,25,26];
// filterRange(testArray, 22, 25);
// console.log(testArray);


/* Concat ---------------------------------------------------------------- */
// First version
function concatArrays(array1, array2) {
    var newArray = [];
    var nowPosn = 0; 
    for (var i = 0; i < array1.length; i++) {
        newArray[nowPosn] = array1[i];
        nowPosn++;
    }
    for (var i = 0; i < array2.length; i++) {
        newArray[nowPosn] = array2[i];
        nowPosn++;
    }
    return newArray;
}

// var test=concatArrays([2,4,6],['A','B',9]);
// console.log(test);