// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
//used the isArray function of array to determine if the variable is an array or not
console.log("Is variable 'a' an array? "+Array.isArray(a)); //result is false because variable a is not an array
console.log("Is variable 'b' an array? "+Array.isArray(b)); //result is true because variable a is an array

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
//created for loop to extract the element 1 by 1 
for (var x=0;x < a.length; x++) {
	a[x] = a[x] * 2; //once extracted, replaced with value that is multiplied by 2
}
console.log(a); //the output is [2,4,6,8,10]

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var case1;
var case2;
var case3;

//case 1
console.log(colors.join(' ')); //used join function and input the character i want to use for separator, output is Red Green White Black

//case 2
console.log(colors.join('+')); //used join function and input the character i want to use for separator, output is Red+Green+White+Black

//case 3
console.log(colors.join(',')); //used join function and input the character i want to use for separator, output is Red,Green,White,Black

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort();
console.log(a.sort((a,b)=>b-a));//used compare function from javascript inside sort function in order to sort in descending in numerical form, output is [10,8,5,4,1]

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'

//Initialize an object variable to match the element and it's count
var finalCount = {arrayObject: "", Count: 0};

//Created a count function in order to count the element that are the same
function count(param){
	var toCount = param;
	var numCount=0;

	//created a for loop to extract each element of the array a
	for (var i = 0; i < a.length; i++) {
		if(a[i]==toCount){ //when an element are the same, it will start to increment by 1
			numCount++;
		}
	}
	return numCount;//when the loop is done, function will return the count of the element
}

for (var x=0;x < a.length; x++) {//created a for loop to extract each element of the array a

	if( count(a[x]) > finalCount.Count ){//input the element to count function in order to get the count number and if the count is greater than the previous count it will declare as the element that has the most count
		finalCount.arrayObject = a[x]; //the most count initialized in the finalCount object
		finalCount.Count = count(a[x]); //the most count initialized in the finalCount object
	}	
}

console.log(finalCount.arrayObject); //extracting the arrayObject with the most count which is a
