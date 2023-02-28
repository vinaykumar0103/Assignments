"use strict"

/*
1) Perform the following operations to provide the implementation for a
Rectangle class. The operations are:
1. Add an area() method to the Rectangle class.
2. Create a Square class that satisfies the following conditions:
○ It is a subclass of Rectangle.
○ It contains a constructor and no other methods.
○ It can use the Rectangle class' area method to print the area
of a Square object.
*/

class Rectangle{
    constructor(w,b){
        this.w = w;
        this.b = b;
    }
}

    Rectangle.prototype.area = function() {
        return(this.w*this.h);
    
    }
   
    class Square extends Rectangle{
        constructor(s){
        super(s);
        this.h = s;
        this.w = s;
    }
}

/* 2) Write a javascript function find_largest to return the nth largest number

in an array-
eg- given an array of integers- [3,45,6,7,23,5,7,8]

find_largest(3) will return third largest number from the above array -
which is 8.*/

 
function thirdLargest(arr, arr_size)
{

    if (arr_size < 3)
    {
        document.write(" Invalid Input ");
        return;
    }
   
    // Find first
    // largest element
    let first = arr[0];
    for (let i = 1;
             i < arr_size ; i++)
        if (arr[i] > first)
            first = arr[i];
   
    // Find second
    // largest element
    let second = Number.MIN_VALUE;
    for (let i = 0;
             i < arr_size ; i++)
        if (arr[i] > second &&
            arr[i] < first)
            second = arr[i];
   
    // Find third
    // largest element
    let third = Number.MIN_VALUE;
    for (let i = 0;
             i < arr_size ; i++)
        if (arr[i] > third &&
            arr[i] < second)
            third = arr[i];
   
    console.log("The third Largest " +
                  "element is ", third);
}
 
    let arr = [3,45,6,7,23,5,7,8];
    let n = arr.length;
    thirdLargest(arr, n);



/* 3) Write a JavaScript program which accept a number as input in the
function parameter and insert dashes (-) between each two even
numbers.
For example if you accept 025468 as the output should be 0-254-6-8.
computeDash(025468) -> 0-254-6-8.*/


function insertdashes(str) {
  var strArr = str.split('');
  var numArr = strArr.map(Number);
    for(var i = 0; i < numArr.length; i++) {
      if(numArr[i-1]%2===0 && numArr[i]%2===0) {
        numArr.splice(i, 0, '-');
      }
    }
  return numArr.join('');
}
  console.log(insertdashes('025468 '));