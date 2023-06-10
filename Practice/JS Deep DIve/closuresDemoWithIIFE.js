const counter = (function counterIncFunction(initialValue) {
	var x = initialValue;
	function incCounter(incValue) {
		console.log(`${x} is the current value of the counter`);
		x = x + incValue;
		console.log(`${x} is the value after incrementing`);
		console.log("****************************");
	}

	return { incCounter };
})(10);

counter.incCounter(2);
counter.incCounter(1);
counter.incCounter(0);
counter.incCounter(5);
