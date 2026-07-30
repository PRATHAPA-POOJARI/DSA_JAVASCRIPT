                                            console.log(5 === 5);      // true
                                            console.log(5 === "5");    // false (number vs string)
                                            console.log(true === 1);   // false (boolean vs number)
                                            console.log(null === null);// true



                                            == → Loose equality → compares value only (after automatic type conversion if needed).
                                            === → Strict equality → compares both value and type.


                                            Numbers
                                            console.log(10 === 10);   // true
                                            console.log(10 === 20);   // false
                                            console.log(-5 === -5);   // true

                                            Reason: Same value and same type (number).


                                            Number vs String
                                            console.log(10 === "10");   // false
                                            console.log(0 === "0");     // false
                                            console.log(1 === "1");     // false

                                            Reason: Values may look the same, but the types are different.


                                            10      → Number
                                            "10"    → String

                                            Strings

                                            console.log("hello" === "hello"); // true
                                            console.log("hello" === "Hello"); // false
                                            console.log("" === "");           // true

                                            Reason: Strings are case-sensitive.


                                            Booleans
                                            console.log(true === true);    // true
                                            console.log(false === false);  // true
                                            console.log(true === false);   // false
                                            console.log(true === 1);       // false
                                            console.log(false === 0);      // false


                                            Even though:

                                            console.log(true == 1);   // true

                                            === does not convert types.







                                            null and undefined

                                            console.log(null === null);         // true
                                            console.log(undefined === undefined); // true
                                            console.log(null === undefined);    // false
                                            console.log(null == undefined); // true


                                            Arrays
                                            console.log([] === []); // false

                                            Why?

                                            Each array is a different object in memory.

                                            let a = [];
                                            let b = [];

                                            console.log(a === b); // false

                                            But:

                                            let a = [];
                                            let b = a;

                                            console.log(a === b); // true

                                            Both variables refer to the same array.










                                            Objects
                                            console.log({} === {}); // false
                                            
                                            Again, different objects.

                                            let obj1 = { name: "John" };
                                            let obj2 = { name: "John" };

                                            console.log(obj1 === obj2); // false

                                            But:

                                            let obj1 = { name: "John" };
                                            let obj2 = obj1;

                                            console.log(obj1 === obj2); // true



                                            Functions
                                            function a() {}
                                            function b() {}

                                            console.log(a === b); // false

                                            Different functions.

                                            let x = a;

                                            console.log(a === x); // true





                                            NaN
                                            console.log(NaN === NaN); // false

                                            This surprises many developers.

                                            To check for NaN, use:

                                            console.log(Number.isNaN(NaN)); // true




                                            Infinity
                                            console.log(Infinity === Infinity); // true
                                            console.log(Infinity === -Infinity); // false

                                            console.log(null ?? "Guest");
 