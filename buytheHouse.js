let arr = [2, 3, 3, 1, 5],
	leftCount = 0,
	rightCount = 0,
	count;
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
	if (arr[i] <= max) {
		leftCount++;
	} else {
		max = arr[i];
	}
}

let min = arr.length - 1;
for (let i = arr.length - 2; i >= 0; i--) {
	if (arr[i] <= min) {
		rightCount++;
	} else {
		min = arr[i];
	}
}

count = Math.min(leftCount, rightCount);
let ans = [rightCount, leftCount, count];
let res = ans.join(" ");
console.log(res);
