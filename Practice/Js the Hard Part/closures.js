/* function outer() {
	var x = 10;

	setTimeout(() => {
		x = 20;
	}, 5000);

	function accessX() {
		console.log(x);
	}
	return accessX;
}

var outerRef = outer();
outerRef();

setTimeout(() => {
	outerRef();
}, 5000); */

// Chechking if function passed as an argument can access the varible from the function
console.log("------------------------------------------");
function outer() {
	let counter = 0;
	function inner() {
		counter++;
		return function inner1() {
			counter++;
			return function inner2() {
				console.log(counter);
			};
		};
	}

	return inner;
}

var outerRef = outer();
console.log(outerRef()()());
