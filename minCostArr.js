let arr = [7, 5, 6, 7, 2, 10],
	n = 6,
	k = 2,
	p = 1,
	q = 3;
let cost = 0;

for (let i = 0; i < n / 2; i++) {
	let cost1 = 0,
		cost2 = 0,
		num = arr[i],
		num2 = arr[i];
	while (num % k !== 0) {
		let quo = Math.floor(num / k);
		num = quo;
		cost1 += p;
	}

	while (num2 % k !== 0) {
		num2 = num2 * k;
		cost2 += q;
	}
	cost += Math.min(cost1, cost2);
}

for (let i = n / 2; i < arr.length; i++) {
	let cost1 = 0,
		// cost2 = 0,
		num = arr[i];
	// num2 = arr[i];
	while (num % k === 0) {
		let quo = Math.floor(num / k);
		num = quo;
		cost1 += p;
	}

	// while (num2 % k === 0) {
	// 	num2 = num2 * k;
	// 	cost2 += q;
	// }
	cost += cost1;
}

console.log(cost);
