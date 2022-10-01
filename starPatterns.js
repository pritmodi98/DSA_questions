let n = 4,
	i = 1;
while (i <= n) {
	let str = "",
		space = n - i;
	while (space) {
		str += " ";
		space--;
	}
	let j = 1;
	while (j <= i) {
		str += j + "";
		j++;
	}

	j = i - 1;
	while (j) {
		str += j + "";
		j--;
	}
	console.log(str);
	i++;
}

//==================*******=================
// let n=4,i=1
// while (i<=n) {
//     let space=n-(n-i+1),str=""
//     while (space) {
//         str+=' '
//         space--
//     }

//     let j=n-i+1
//     while (j) {
//         str+='*'+''
//         j--
//     }
//     console.log(str)
//     i++
// }
//==================*******=======================
// let n = 4,
// 	i = n;
// while (i >= 1) {
// 	let str = "",
// 		j = 1;
// 	while (j <= i) {
//         str+='*'+' '
// 		j++;
// 	}

//     let space=n-i
//     while (space) {
//         str+=' '
//         space--
//     }
//     console.log(str)
// 	i--;
// }
//====================**********=================
// let n = 4,
// 	i = 1;
// while (i <= n) {
// 	let str = "",
// 		space = 1;
// 	while (space <= n - i) {
// 		str += " ";
// 		space++;
// 	}

// 	let j = 1;
// 	while (j <= i) {
// 		str += "*";
// 		j++;
// 	}
// 	console.log(str);
// 	i++;
// }

//===============**********=======================
// let n = 4,
// 	i = 1;

// while (i <= n) {
// 	let str = "",
// 		j = 1,
// 		count = i;
// 	while (j <= i) {
// 		str += count + " ";
//         count--
// 		j++;
// 	}
// 	console.log(str);
// 	i++;
// }

//==============**********==================
// let n = 3,
// 	i = 1,
// 	count = 1;
// while (i <= n) {
// 	let str = "",
// 		j = 1;
// 	while (j <= n) {
// 		str += count + " ";
// 		count++;
// 		j++;
// 	}
// 	console.log(str);
// 	i++;
// }
//===============*************==================
// let n = 3,
// 	i = 1;
// while (i <= n) {
// 	let str = "",
// 		j = n;
// 	while (j >= 1) {
// 		str += j + " ";
// 		j--;
// 	}
// 	console.log(str);
// 	i++;
// }
//===============*************===================
// let n = 4,
// 	i = 1;
// while (i <= n) {
// 	let str = "",
// 		j = 1;
// 	while (j <= n) {
// 		str += j + " ";
// 		// console.log(str);
// 		j++;
// 	}
// 	console.log(str);
// 	i++;
// }
