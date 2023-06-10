function printName() {
	return this.name;
}

function createUser(name) {
	const newUser = {};
	newUser.name = name;
	return newUser;
}

const user = createUser("Kirti");

console.log(printName.bind(user));

function outer() {
	var prop1 = "name";
	console.log("this from outer function ", this, " * ");
	function inner() {
		console.log("this from inner function", this);
	}
	inner();
}
//This is the global object
outer();

function outer() {
	var prop1 = "name";
	console.log("this from outer function ", this, " * ");
	//this in inner is still global
	function inner() {
		console.log("this from inner function", this);
	}
	inner();
}
//this is the new object passed
outer.call({ name: "kiti" });

function outer() {
	var prop1 = "name";
	console.log("this from outer function ", this, " * ");
	//now This will refer to the outer this (lexical this)
	const inner = () => {
		console.log("this from inner function", this);
	};
	//Even if we use call apply bind with arrow function the this is always lexical
	inner.call({ name: "mad " });
}
outer.call({ name: "kiti" });
