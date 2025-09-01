// EASY
// Ques 1 Does the array [1, 2, 3, 4] include the number 2
console.log([1, 2, 3, 4].includes(2));

//ques 2 Does the array [1, 2, 3, 4] include the number 5?
console.log([1, 2, 3, 4].includes(5));

//ques 3 Check if "hello world" includes the word "hello"
console.log("Hello world!".includes("Hello"));

//ques 4 Check if "hello world" includes "WORLD". (case sensitive!)
console.log("hello world".includes("WORLD"));

// MEDIUM

//ques 1 Check if [10, 20, 30, 40, 50] includes 20 starting from index 2.
console.log([10, 20, 30, 40, 50].includes(20, 2)); // 0 is first element 1 is second element 2 is third element

//ques 2 Does "JavaScript" include "Script" starting from index 5
console.log("JavaScript".includes("Script", 5));

//ques 3 Does ["apple", "banana", "cherry"] include "apple" starting from index 1?
console.log(["apple", "banana", "cherry"].includes("apple", 1)); 

//Trickier (Concept Test)
//ques 1 Does [NaN, 2, 3].includes(NaN) return true or false? Why?
console.log([NaN, 2, 3].includes(NaN)); //true
// .includes() is smarter than ===   Normally in JS, NaN === NaN is false, +0 and -0 are treated as same by .includes()

//ques 2 Will it return true or false?
console.log(["1", 2, 3].includes(1));  //false
//Why -> typeof(1) is 'number' where "1" is 'string'

//ques 3  → What do you think the output will be?
"hello".includes("") 
// It always returns true, no matter what the string is. "" h "" e "" l "" l "" o "" . So there are 6 positions (0 to 5) where an empty string can “fit”.