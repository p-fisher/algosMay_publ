// console.log(255 % 20);

// console.log(Math.floor(327.68) % 10);

console.log(10*32);
console.log((327.68) % 10);
console.log(Math.floor(7.6800000000007));


for (var num = 0; num <= 5; num++) {
    console.log(num);
}

var arr = [2,4,6,8,10];
for (var i = 0; i < arr.length; i = i + 1) {        
    console.log(i);             // prints the index       
    console.log(arr[i]);        // prints the array value at that index
}


function tip(bill) {
    var total = bill * 1.20;
    console.log(total);
}
var thaiFood = 150;
tip(thaiFood); // Where does the total go???
//The total only exists inside of the function.  Out here it no longer exists!


function tip(bill) {
    console.log(bill * 1.20);
    return bill * 1.20;
}
var thaiFood = 150;
// a function call is equal to whatever that function returns
var total = tip(thaiFood); // need a variable to capture the return value



//palindrome var 1
function palindrome(myString) {
    var length = myString.length;
    for(i=0;i<length;i++) {
        console.log(myString[i], myString[length-1-i]);
        if (myString[i] !== myString[length-1-i]){
            return false
        }
    }
        return true
}
console.log(palindrome("tacocat"));


//palindrome var 2
function palindrome(myString) {
    var length = myString.length;
    for(i=0;i<length/2;i++) {
        console.log(myString[i], myString[length-1-i]);
        if (myString[i] !== myString[length-1-i]){
            return false
        }
    }
        return true
}
console.log(palindrome("tacocat"));


//palindrome var 3-- running backward
function palindrome(myString) {
    var length = myString.length;
    for(i=length-1;i>=0;i--) {
        console.log(myString[i], myString[length-1-i]);
        if (myString[i] !== myString[length-1-i]){
            return false
        }
    }
        return true
}
console.log(palindrome("bingo"));


for(var j = 0; j < 5; j++){
    var str = "";
    for(var i = 0; i < 5; i++){
        str += "$";
    }
    console.log(str);
}


var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
    
// We can console.log the `8` in this array if we console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array
console.log(arr2d[0][2]);  
    
// We can loop through these nested arrays with nested for loops!
for(var i=0; i < arr2d.length; i++) {
    for(var j=0; j < arr2d[i].length; j++) {
	console.log(arr2d[i][j]);
    }
}
// How would a t-diagram look for this example?