function shortest(text) {
	return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length
}

function normal(text) {
	return text.toLowerCase().split('').filter(function(val, i, arr) {
		return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
	}).length;
}

function longest(text) {
	return text.toLowerCase().split('').reduce(function(a,l) {
		a[l] = a[l] ? a[l]+1 : 1;
		if(a[l] === 2) a.count++;
		return a;
	}, {count:0}).count;
}

function regEx(text) {
	return new Set(text.toLowerCase().match(/(.)(?=.*\1)/gi)).size;
}

module.exports = { shortest, longest, normal, regEx };
