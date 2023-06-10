/* const promiseObj = new Promise((resolve) => {
	setTimeout(() => {
		resolve("Promise is resoved");
	}, 2000);
});

promiseObj.then((data) => {
	console.log(data + "from first then callback");
});
promiseObj.then((data) => {
	console.log(data + "from second then callback");
});

function Promise1(callback) {
	this.then = callback;
}

let p1 = new Promise1((resolve, reject) => {
	reject(1);
});
p1.then(
	(resolve) => console.log(resolve),
	(rejectVal) => console.log("rejected" + rejectVal)
);
 */
//CHECKING IF WE HAVE A RETURN INSIDE OF A PROMISE CONSTRUCTOR FUNCTION EXCEUTION
let p3 = new Promise((res, rej) => {
	const num = 1;
	return res(10);
});

console.log(p3);
