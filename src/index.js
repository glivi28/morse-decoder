const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {

	let arr = [];
	for (let i = 0; i < expr.length;) {
		arr.push(expr.slice(i, i + 10));
		i += 10;
	}
	console.log(arr);
	let arrDots = arr.map(item => {
		item = item.replace(/10/g, ".");
		item = item.replace(/11/g, "-");
		item = item.replace(/0/g, (" "));
		return item.trim();

	})
	console.log(arrDots);
	let decodeArr = arrDots.map(item => {
		for (let lit in MORSE_TABLE) {
			if (item == lit) {
				item = MORSE_TABLE[lit];
				console.log(item);
				return item;
			}

		}
	});
	let result = decodeArr.join();
	let res1 = result.replace(/,,/g, ' ');
	let res2 = res1.replace(/,/g, "");
	console.log(res2);
	return res2;
}

module.exports = {
	decode
}