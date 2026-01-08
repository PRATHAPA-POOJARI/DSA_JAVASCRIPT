// bubble sort 


// How Bubble Sort Works:

// Compare each element with the next element.

// If the current element is bigger than the next, swap them.

// After the first pass, the largest element “bubbles up” to the end.

// Repeat for all elements, reducing the comparison range each time.



// Initial array: [5, 2, 9, 1, 6]

// Step 1: Compare 5 and 2 → swap → [2, 5, 9, 1, 6]

// Step 2: Compare 5 and 9 → no swap → [2, 5, 9, 1, 6]

// Step 3: Compare 9 and 1 → swap → [2, 5, 1, 9, 6]

// Step 4: Compare 9 and 6 → swap → [2, 5, 1, 6, 9]

// Next pass → continue until sorted [1, 2, 5, 6, 9]


// Sort an array manually (e.g., using Bubble Sort)

let arr = [30,5,100,3,2,3]

(30 &5)

5,30,100,3,2,3

(30&100) no swap

5,30,100,3,2,3

(100 &3)

5,30,3,100,2,3

(100 &2)

5,30,3,2,100,3
(100 &3)

5,30,3,2,3,100  phase 1 completed



phase 2 

(5 &30 )
no swap 

(30 &3)
5,3,30,2,3,100

(30 &2)
5,3,2,30,3,100

(30&3)
5,3,2,3,30 ,100


