let user1 = Object.create(null);
let user2 = Object.create({});
let user3 = Object.create({ name: "kirti" });
console.log(user1);
console.log(user2);
console.log(user3);

const user = {
	name: "Tom",
	score: 10,
	incScore: function () {
		user.score++;
	},
};
console.log("----------------------------------------------------------");
function createUser(name, score) {
	const newUser = Object.create(someAdditionalFunctionalities);
	newUser.score = score;
	newUser.userName = name;
	return newUser;
}

const someAdditionalFunctionalities = {
	getScore: function () {
		return this.score;
	},
	incScore: function () {
		this.score++;
	},
	decScore: function () {
		this.score--;
	},
};

const userKirti = createUser("Kirti", 99);
const userTom = createUser("Tom", 10);

console.log(userKirti.getScore());
console.log(userTom);
