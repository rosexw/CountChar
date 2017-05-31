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

console.log(countLetters(param), "\n ");