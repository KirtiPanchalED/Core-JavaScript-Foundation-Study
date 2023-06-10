/* Checking how JS interprets the closure environment
Observation: The very Inner function InnerInnerInner() has a property [[scope]] which is array of sccopes
inside that the 1'st element is a closure object <closure (InnerInner)>which has a name property with value "itrik"
and rest of the variables in the hirarchy gets overridden

if we add a new variable <height> inside any of the nested functions
Veryyyyyy Interestingggggggggggggg
It creats a new closure < closure (outer)> object inside the [[scope]] array which now hass all the variables from the outer()

This means JS, while creating functions checks for multiple levels of closure variables
and store them in closure object grouping them based on the functions inside the [[scope]] array

*/
function outer() {
	var name = "kirti";
	var height = "5 ft 5 inch";
	return function Inner() {
		var name = "panchal";
		return function InnerInner() {
			let name = "itrik";
			return function InnerInnerInner() {
				console.log(name);
				console.log(height);
			};
		};
	};
}

let outerOutput = outer();
outerOutput()();
