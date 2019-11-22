let countingDuplicates = function(string) {
	let letterSimilar = [];
	let nTimesSimilar = {};

	let arr = [];
	if (typeof string === 'string') {
		arr = string.toLowerCase().split('');

		// for each char, it return all duplicate character
		arr.map(char => {
			if (someLetter(arr, char)) {
					letterSimilar.push(char)
			}
		});

		// create an Object of character if exist increment one else create character props and allow one
		for (let i = 0, l = letterSimilar.length; i < l; i++) {
			let num = letterSimilar[i];
			nTimesSimilar[num] = nTimesSimilar[num] ? nTimesSimilar[num] + 1 : 1;
		}

		if (Object.keys(nTimesSimilar).length === 0) {
			return 0
		} else {
			return Object.keys(nTimesSimilar).length
		}
	} else {
		throw Error `It's not a string`;
	}

};

let someLetter = function(arr, char) {
	let count = 0;
	arr.some(x => (char === x) ? count++ : null );
	return (count > 1);
};

module.exports = { countingDuplicates };
