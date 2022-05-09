
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
            for (var k = array.length - 2; k >= 0; k--) {
                array[k + 1] = array[k];
            }
            array[0] = temp; // Put temp value at the beginning of the array
        }
    } else {
        // for moves toward left 
        for (var i = 0; i < Math.abs(moves); i++) {
            var temp = array[0];
            for (var k = 1; k < array.length; k++) {
                array[k - 1] = array[k];
            }
            array[array.length - 1] = temp; // Put temp value at end of array
        }
    }
}

// var testArray=[10,20,30,40,50];
// rotateArray(testArray,3);
// console.log(testArray);


/* Filter Range ---------------------------------------------------------------- */
function filterRange(arr, minVal, maxVal) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < minVal || arr[i] > maxVal) {
            for (var k = i + 1; k < arr.length; k++) {
                arr[k - 1] = arr[k];
            }
            arr.length--; 
            i--;
        }
    }
}

// // Second version with only one for loop
// function filterRangeV2(arr, minVal, maxVal) {
//     var nextInd = 0; // Index where the next array value that's from min to max (inclusively) will go
//     // Loop through the array
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] >= minVal && arr[i] <= maxVal) {
//             arr[nextInd] = arr[i];
//             nextInd++; // Increment index for next valid value found
//         }
//     }
//     arr.length = nextInd; // Chop off excess values
// }



/* Concat ---------------------------------------------------------------- */
// First version
function concatArrays(arr1, arr2) {
    var newArr = [];
    var curInd = 0; 
    for (var i = 0; i < arr1.length; i++) {
        newArr[curInd] = arr1[i];
        curInd++;
    }
    for (var i = 0; i < arr2.length; i++) {
        newArr[curInd] = arr2[i];
        curInd++;
    }
    return newArr;
}

// // Second version - with redundancy removed - using a helper function we define
// function concatArraysV2(arr1, arr2) {
//     var newArr = [];
//     buildFrom(newArr, arr1); // Add values from first array to the new array
//     buildFrom(newArr, arr2); // From second array
//     return newArr;
// }

// function buildFrom(arrayToBuild, arrayFrom) {
//     var curInd = arrayToBuild.length; // Starting index
//     // Loop to add values to new array
//     for (var i = 0; i < arrayFrom.length; i++) {
//         arrayToBuild[curInd] = arrayFrom[i];
//         curInd++;
//     }
// }
