function* generatorDemo() {
	const x = yield 1;
	console.log(x);
	yield "done";
}
const generatorRef = generatorDemo();
console.log(generatorRef.next());
console.log(generatorRef.next());

//recursion with generators

function* generator2() {
	console.log(`inside generator function`);
	var index = 0;
	while (index < 10) {
		yield index++;
	}
}

const genRef2 = generator2();
let isDone = true;
while (isDone) {
	let response = genRef2.next();
	!response.done
		? console.log(`The function yeilds ${response.value}`)
		: (isDone = false);
}
