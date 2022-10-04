let s = "i love programming very much";
let str = "",
	j = 0,
	result = "";
function reverseWord(s) {
	let end = s.length - 1;
	while (end >= 0) {
		str += s[end];
		end--;
	}

	for (let i = 0; i < str.length; i++) {
		if (i === str.length - 1) {
			let k = i;
			while (k >= j) {
				result += str[k];
				k--;
			}
		}
		if (str[i] == " ") {
			let k = i - 1;
			while (k >= j) {
				result += str[k];
				k--;
			}
			result += str[i];
			j = i + 1;
		}
	}

	return result;
}

console.log(reverseWord(s));
