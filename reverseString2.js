let arr = [
	"t",
	"h",
	"e",
	" ",
	"s",
	"k",
	"y",
	" ",
	"i",
	"s",
	" ",
	"b",
	"l",
	"u",
	"e",
];
// let arr = [1, "2", 3, 4, 5, 6, 7];
let start = 0;
let end = arr.length - 1;

function swap(start, end) {
	while (start < end) {
		[arr[start], arr[end]] = [arr[end], arr[start]];
		start++;
		end--;
	}
}
swap(start, end);
let j = 0;
for (let i = 0; i < arr.length; i++) {
	if (i === arr.length - 1) {
		swap(j, i);
		break;
	}
	if (arr[i] === " ") {
		swap(j, i - 1);
		j = i + 1;
	}
}
console.log(arr);
