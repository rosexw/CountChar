/* w1d3
1. Character Counting
Write a function countLetters that can return to us all the unique characters that exist in a string that is passed into the function.

Furthermore, the function should also report back how many instances of each letter were found in the string.

Functions can only return one thing. That thing can (as we've seen) be a primitive data type, like a number, a boolean, null or a string.

However, our function countLetters needs to return an object that can represent the stats for the sentence it is given: all the characters found in the input string, and their respective counts.

What should the object returned back by countLetters look like?

Perhaps it could return an object where each unique character encountered is a property of the object and the value for that property/key should be the number of occurrences for that character.
*/
var param = process.argv.slice(2);

function countLetters (str) {
	var noSpaces = str.join("");
	var letter = noSpaces.split("");
	var output = {};

	for (var i = 0; i < letter.length; i++) {
		if (output[letter[i]]){
			output[letter[i]]++;
		} else {
			output[letter[i]] = 1;
		}
	 }
	 return output;
}

console.log(countLetters(param));

//{ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }

/*
So countLetters("lighthouse in the house") would return this:

{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
Note that we are skipping and not counting spaces.
*/
