/*
	Function - Random Argument Challenge
	====================================
	Create Function showDetails
	Function Accept 3 Parameters [a, b, c]
	Data Types For Info Is
	- String => Name
	- Number => Age
	- Boolean => Status
	Argument Is Random
	Data Is Not Sorted Output Depend On Data Types
	- Use Ternary Conditional Operator
*/
function showDetails ( a, b, c )
{
	let str, num, bool;
	typeof a === "string"
		? ( str = a )
		: typeof b === "string"
			? ( str = b )
			: ( str = c );
	typeof a === "number"
		? ( num = a )
		: typeof b === "number"
			? ( num = b )
			: ( num = c );
	typeof a === "boolean"
		? ( bool = a )
		: typeof b === "boolean"
			? ( bool = b )
			: ( bool = c );
	return `Hello ${ str }, Your Age Is ${ num }, You ${ bool ? "Are" : "Are Not"
		} Available For Hire`;
}

// function showDetails(a , b , c) {
// 	let str, num, bool;
//   if ( typeof a === "string"){
//     str = a
//   } if ( typeof b === "number"){
//     num = b
//   } if (typeof c === "boolean"){
//     bool = c
//   }
//   return `Hello ${str}, Your Age Is ${num}, You ${
// 		bool ? "Are" : "Are Not"} Available For Hire`; 
// }
document.write( showDetails( 12, "MM", true ) );
document.write( `<br>` );
document.write( showDetails( "Osama", 38, true ) ); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
document.write( `<br>` );
document.write( showDetails( 38, "Osama", true ) ); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
document.write( `<br>` );
document.write( showDetails( true, 38, "Osama" ) ); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
document.write( `<br>` );
document.write( showDetails( false, "Osama", 38 ) ); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

//-----------------------------------//

	// if(theGender === "Male"){
	// 	console.log(`hello Mr ${theName}`);
	// }if(theGender === "Female"){
	// 	console.log(`hello Miss ${theName}`);
	// }else{
	// 	console.log(`hello ${theName}`)
	// }
function sayHello(theName, theGender) {
	
	if(theGender === "Male"){
		console.log(`Hello Mr ${theName}`);
	}else if(theGender === "Female"){
		console.log(`Hello Miss ${theName}`);
	}else {
		console.log(`Hello ${theName}`);
	}
	
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

console.log("=========================");

function calculate(firstNum, secondNum = " Second Number Not Found", operation) {
  // Your Code Here

if(firstNum && secondNum && operation === "add"){
	console.log(firstNum + secondNum);
}else if(firstNum && secondNum && operation === "subtract"){
	console.log(firstNum - secondNum);
}else if(firstNum && secondNum && operation === "multiply"){
	console.log(firstNum * secondNum);
}else{
	console.log(firstNum + secondNum);
}
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

console.log("=========================");

function ageInTime(theAge) {
if (theAge < 10 || theAge > 100) {
		console.log("Age Out Of Range") ;
	}else{
		let months = theAge * 12,
		weeks = months * 4,
		days = weeks * 7,
		hours = days * 24,
		minutes = hours * 60,
		seconds = minutes * 60;
	console.log(`${months} Months\n${weeks} Weeks\n${hours} Hours\n${minutes} Minutes\n${seconds} Seconds`) ;
	}
}
// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
console.log("=========================");

function createSelectBox(startYear, endYear) {
	document.write("<hr><select>");
	for (let i = startYear; i <= endYear; i++) {
		document.write(`<option value="${i}">${i}</option>`);
	}
	document.write("</select>");
}
createSelectBox(2000, 2021);
console.log("=========================");


