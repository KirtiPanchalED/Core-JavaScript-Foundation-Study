The for in loop Loop -- iterates over the enumerable string keys of a particulat Object

Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer. Properties defined via Object.defineProperty and such are not enumerable by default. Most iteration means (such as for...in loops and Object.keys) only visit enumerable keys.

With arrays --> Arrays are represented as key-value pairs internally. So for in will print the keys as array indexes

With Objects
