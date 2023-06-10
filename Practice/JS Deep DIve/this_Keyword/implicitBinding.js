// Implicit Binding

function getNameOfTheCar() {
	console.log(this.name);
	console.log(this.xyz);
}

let car1 = {
	name: "Jaguar",
	getName: getNameOfTheCar,
};

let car2 = {
	name: "Audi A8",
	xyz: "xyz",
	getName: getNameOfTheCar,
};

car1.getName();
//Jaguar
//undefined
car2.getName();
// Audi A8
// xyz
