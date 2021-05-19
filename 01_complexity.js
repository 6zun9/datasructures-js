/**
 * Constant complexity O(1) => takes same time regardless of the input
 * eg. firstIndex of an array of different sizes
 */


/**
 * Quadratic Complexity O(n^2)  => it means that the runtime of the algorithm is directly proportional to the square of the size of the input.
 * A common example of an algorithm with quadratic time complexity is by looping over an array,
 *  and comparing the current element with all other elements in the array.
 *  We have to loop over n elements, and for every element, we again have to loop over n elements.
 *  This ends up being n * n, which is n^2.
 */


/**
 * Logarithmic Complexity - O(log(n)) => The size of the input gets split into half with each iteration of the function.
 * If an algorithm has logarithmic time complexity, it means that the size of the input we are considering gets split into half with each iteration.
 * Let’s say that we have a function that takes 1 second to execute if the input size is 100.
 * With a logarithmic runtime, it would then take 2 seconds if the input size is 1000, and 3 seconds if the input size is 10,000.
 * The bigger the input size gets, the smaller the difference in runtime!
 */

/**
 * Exponential Complexity - O(2^n) => The runtime of the algorithm gets doubled after every addition in the input.
 * If an algorithm’s time complexity is O(2^n), its runtime is doubled after every addition to the input size.
 * If 5 items took 30 seconds, 6 items would take 60 seconds.
 * In the following example, the value of an element is either 0 or 1.
 *The amount of possibilities with 0 and 1 that this array could have, is 2^9 = 512.
 */