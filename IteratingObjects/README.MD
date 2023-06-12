The for in loop Loop -- iterates over the enumerable string keys of a particulat Object

Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer. Properties defined via Object.defineProperty and such are not enumerable by default. Most iteration means (such as for...in loops and Object.keys) only visit enumerable keys.

(Enumerable means countable)

With arrays --> Arrays are represented as key-value pairs internally. So for in will print the keys as array indexes
Rules
1.returns indexes as strings

With Objects --> Property keys of object are printed by for..in loop

Rules:
1.keys are sorted in ascending order
2.numbers as keys are printed before strings
3.Ignores Symbol property keys
4.Ignores non enumerable property keys
5.Displays inherited keys

Many JavaScript style guides and linters recommend against the use of for...in, because it iterates over the entire prototype chain which is rarely what one wants, and may be a confusion with the more widely-used for...of loop.

For..of Loop iterate over the iterable and returns the values
internally it uses the iterator object to iterate over the iterable throught the property []
