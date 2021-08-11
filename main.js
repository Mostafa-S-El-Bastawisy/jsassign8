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

function sayHello(theName, theGender) {
	if(theGender === "Male"){
		console.log(`hello Mr ${theName}`);
	}if(theGender === "Female"){
		console.log(`hello Miss ${theName}`);
	}else{
		console.log(`hello ${theName}`)
	}
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

