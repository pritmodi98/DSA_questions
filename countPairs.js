function CountEvenPairs(a, b) {
	let odd1 = 0,
		even1 = 0;
	let odd2 = 0,
		even2 = 0;
	for (let i = 0; i < a.length; i++) {
		if (a[i] % 2 === 0) {
			even1++;
		} else {
			odd1++;
		}
	}

	for (let i = 0; i < b.length; i++) {
		if (b[i] % 2 === 0) {
			even2++;
		} else {
			odd2++;
		}
	}

	let count = Math.min(odd1, odd2) + Math.min(even1, even2);
	return count;
}

console.log(CountEvenPairs([9, 14, 6, 2, 11], [8, 4, 7, 20]));
