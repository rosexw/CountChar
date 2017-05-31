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

/*l: 0,
i: 1, 10,
g: 2,
h: 3, 5, 13, 15,
t: 4, 12,
o: 6, 

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

*/