//take input from coding ninja
function isPalindrome(str) {
	let start = 0,
		end = str.length - 1;

	while (start < end) {
		while (!isCharacter(str[start]) && start < end) {
			start++;
			continue;
		}
		while (!isCharacter(str[end]) && start < end) {
			end--;
			continue;
		}

		let s = lowercase(str[start]);
		let e = lowercase(str[end]);

		if (s !== e) {
			return "No";
		}
		start++;
		end--;
	}
	return "Yes";
}

console.log(isPalindrome("aaBBa@"));

function isCharacter(c) {
	if (
		!(c >= "A" && c <= "Z") &&
		!(c >= "a" && c <= "z") &&
		!(c >= "0" && c <= "9")
	) {
		return false;
	}
	return true;
}

// console.log(isCharacter('i'))
function lowercase(ch) {
	if (ch >= "a" && ch <= "z") {
		return ch;
	} else if (ch >= "A" && ch <= "Z") {
		return ch.toLowerCase();
	}
}

// console.log(lowercase('1'))
