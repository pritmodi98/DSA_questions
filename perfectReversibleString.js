//You are given a string ‘str’, the task is to check that reverses of all possible substrings of ‘str’ are present in ‘str’ or not.
//the problem is perfect reversible string

let str = "abab";
let start = 0,
	end = str.length - 1;

function perfectRev(str) {
	while (start < end) {
		if (str[start] !== str[end]) {
			return "No";
		}
		start++;
		end--;
	}

	return "Yes";
}

console.log(perfectRev(str))
