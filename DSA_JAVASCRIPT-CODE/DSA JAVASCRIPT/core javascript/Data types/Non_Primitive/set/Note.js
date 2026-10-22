Remember this rule
- Set with duplicate primitive values, such as numbers or strings → duplicates are ignored.
- Set with separate arrays or objects containing identical data → both are stored.
- Set with the same array or object reference added twice → only one entry is stored.




“Arrays and objects have their own references. Even if their values are the same, their references can be different.”


note :  1. a reference = a way  to access  an object 
       
Remember this simple rule, bro:
- Same values, different arrays → false.
- Same array, shared by two variables → true.




Remember the difference
Map	Set
set(key, value)	add(value)
get(key)	No get() method
has(key)	has(value)
delete(key)	delete(value)
size	size
clear()	clear()