function outer() {
	var height = 25;
	setTimeout(() => {
		height = 30;
	}, 5000);
	return function printHeight() {
		console.log(height);
	};
}
