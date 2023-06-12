let arr = [10, 20, 30, 40, 50, 60];

let obj1 = {
	1: "kirti",
	z: "something",
	a: "something",
	50: "panchal",
};

let parent = {
	name: "xyz",
	age: 50,
};

console.log("--- Printing Content From Array ---");
for (const key in arr) {
	console.log(`${key} ${typeof key}`);
}
console.log("\n");
console.log("--- Printing Content From Object ---");
for (const key in obj1) {
	console.log(key);
}
console.log("\n");

console.log(
	"--- Printing Content From Object After Attaching Prototype Object ---"
);
obj1.__proto__ = parent;
for (const key in obj1) {
	console.log(key);
}

for (const key in obj1) {
	!Object.hasOwn(obj1, key) || console.log(key);
}

console.log("\n String iteration using for..of anf for..in");
let name = "kirti panchal";
for (const k in name) {
	console.log(k);
}
