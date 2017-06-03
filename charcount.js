/*w1d3
2. Character positioning
Goal
This activity builds on the Character Counting activity and is similar to it in that it asks you to use objects for representing more complex data using keys (aka properties, aka attributes) and their respective values.

Problem
Return indices instead
Instead of having your function countLetters return just the count of each letter, the requirement has changed to return all the indices (zero-based positions) in the string where each character is found. So for each letter, we're no longer returning just one number to represent its number of occurrences, but rather (potentially) multiple numbers to represent all the places in the string that it shows up.

Step 1
First, ask yourself: What would the resulting object (key-value mapping) look like with the same example string ("lighthouse in the house")?

Write it out in a new JS file and run it by a mentor so as to confirm that you're feeling good about the solution that you are going to work toward.

Step 2
Either copy your code from the Character Counting or start afresh. Either way, consider this a new new project/folder and don't modify your solution for the previous problem.
*/

var param = process.argv.slice(2);

function countLetters (str) {
	var noSpaces = str.join("");
	var letter = noSpaces.split("");
	var output = {};

	for (var i = 0; i < letter.length; i++) {
		if (output[letter[i]]){
			output[letter[i]] += ", " + i.toString();
		} else {
			output[letter[i]] = i.toString();
		}
	 }
	 return output;
}

console.log(countLetters(param));

/*
should read:
l: 0,
i: 1, 10,
g: 2,
h: 3, 5, 13, 15,
t: 4, 12,
o: 6,

results:
{ l: '0',
  i: '1, 10',
  g: '2',
  h: '3, 5, 13, 15',
  t: '4, 12',
  o: '6, 16',
  u: '7, 17',
  s: '8, 18',
  e: '9, 14, 19',
  n: '11' }

var params = process.argv.slice(2).join(‘’);

function countLetters(letters) {
  return letters.split(‘’).reduce(function(result, letter, index) {
    result[letter] ? result[letter] += “, ” + index.toString() : result[letter] = index.toString();
    return result;
  }, {});
};

console.log(countLetters(params));

*/
