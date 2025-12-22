/*
 * FizzBuzz Rules:
 * - Print numbers from 1 to 100
 * - For multiples of 3, show "Fizz" instead of the number
 * - For multiples of 5, show "Buzz" instead of the number
 * - For multiples of 3 and 5, show "FizzBuzz" instead of the number
 * - Return an array containing the results based on the rules above
 */

//Rule specific consts

const FB_LENGTH = 100;
const FB_INDEX = 1;

const FB_RULES = [
    { value: 0, label: null }, //Required for the solutions where we can't set our index
    { value: 15, label: 'FizzBuzz' },
    { value: 5, label: 'Buzz' },
    { value: 3, label: 'Fizz' }
];




//Helper functions to get the correct output
/**
 * 
 * @param { number } number - Number to evaluate against FizzBuzz rules
 * @returns { string } - Matching rule label or the number converted into a string
 * @variant Array.find() method
 */
const findRuleWithFind = (number) => {
    return FB_RULES.find(rule => number % rule?.value === 0)?.label || number?.toString();
}
// PROS: Data-driven design, DRY principle, easy to extend or modify rules by pushing to the array
// CONS: (Marginally) Slower performance (array iteration), order-dependent, less explicit for beginners, Type inconsistency (returns string or number)



/**
 * 
 * @param { number } number - Number to evaluate against FizzBuzz rules
 * @returns { string } - Matching rule label(s) or the number converted into a string 
 * @variant String concatenation
 */
const findRuleWithConcat = (number) => {
    let string = '';
    if (number === 0) { return; } // Required for the solutions where we can't set our index
    if (number % 3 === 0) { string += 'Fizz' }
    if (number % 5 === 0) { string += 'Buzz' }
    return string ? string : number?.toString();
}
// PROS: String concatenation naturally handles "FizzBuzz" by combining both strings, Simple if statements, readable flow, correct output
// CONS: Hardcoded logic (not extensible), Uses mutable variable, ternary check adds slight overhead, less flexible than rules array



/**
 * 
 * @param {*} number - Number to evaluate against FizzBuzz rules
 * @returns { string } - Matching rule label or the number converted into a string
 * @variant Switch statement
 */
const findRuleWithSwitch = (number) => {
    switch (true) {
        case number === 0: return; // Required for the solutions where we can't set our index
        case number % 15 === 0: return 'FizzBuzz';
        case number % 5 === 0: return 'Buzz';
        case number % 3 === 0: return 'Fizz';
        default: return number.toString();
    }
}
// PROS: Fastest performance with direct conditionals (switch statements jump memory addresses), explicit and clear, conventional pattern,
// CONS: Hardcoded values (not extensible), order dependent, repetitive for more rules, switch(true) considered anti-pattern by some, not DRY



/**
 * FizzBuzz implementations using trigonometric cosine functions
 * 
 * These implementations use finite Fourier series with cosine terms to compute
 * an index function that produces values 0, 1, 2, or 3, which are used to select
 * the output from [n, 'Fizz', 'Buzz', 'Fizzbuzz']. This approach uses only cosines,
 * addition, multiplication, and division - no modulo operations required!
 * 
 * This implementation uses the algebraically simplified formula:
 * f(n) = 11/15 + (2/3)cos(2πn/3) + (4/5)[cos(2πn/5) + cos(4πn/5)]
 * This is equivalent to the indicator function approach but in a single expression.
 * 
 * NOTE: I am not good at math - these implementations are based entirely on the
 * excellent mathematical work by Susam Pal.
 * 
 * Source:
 * - "Solving Fizz Buzz with Cosines" by Susam Pal
 *   https://susam.net/fizz-buzz-with-cosines.html
 */

/**
 * 
 * @param { number } number - Number to evaluate against FizzBuzz rules 
 * @returns { string } - Matching rule label or number converted into a string
 */
const findRuleWithCosine = (number) => {
    const results = [number.toString(), 'Fizz', 'Buzz', 'FizzBuzz']
    const index = Math.round(11/15 + (2/3) * Math.cos(2 * Math.PI * number / 3) + (4/5) * (Math.cos(2 * Math.PI * number / 5) + Math.cos(4 * Math.PI * number / 5)))
    return results[index];
}
// PROS: Mathematically elegant, no modulo operations, demonstrates Fourier series application, more concise
// CONS: Overly complex for this problem, floating-point precision concerns, harder to understand




/**
 * This implementation computes indicator functions separately:
 * - I₃(n) = 1/3 + (2/3)cos(2πn/3) - indicates if n is divisible by 3
 * - I₅(n) = 1/5 + (2/5)cos(2πn/5) + (2/5)cos(4πn/5) - indicates if n is divisible by 5
 * Then combines them: f(n) = I₃(n) + 2I₅(n) to get index 0, 1, 2, or 3
 * Source:
 * - "Solving Fizz Buzz with Cosines" by Susam Pal
 *   https://susam.net/fizz-buzz-with-cosines.html
 */
/**
 * 
 * @param { number } number - Number to evaluate against FizzBuzz rules
 * @returns { string } - Matching rule label or the number converted into a string
 */
const findRuleWithCosineIndicator = (number) => {
    const results = [number.toString(), 'Fizz', 'Buzz', 'Fizzbuzz']
    const I3 = 1/3 + (2/3) * Math.cos(2 * Math.PI * number / 3);
    const I5 = 1/5 + (2/5) * Math.cos(2 * Math.PI * number / 5) + (2/5) * Math.cos(4 * Math.PI * number / 5);
    const index = Math.round(I3 + 2 * I5);
    return results[index];
}
// PROS: Shows step-by-step indicator function approach, mathematically elegant, no modulo operations
// CONS: Overly complex for this problem, floating-point precision concerns, harder to understand




/**
 * After finding Susams blog-post, I wondered if the same cosine formulation could be applied
 * with Ramanujan sums (defined by Srinivasa Ramanujan and found by me after a Wikipedia deep dive) as well.
 * The trigonometric forms are:
 * - c₃(n) = 2cos(2πn/3)
 * - c₅(n) = 2cos(2πn/5) + 2cos(4πn/5)
 * 
 * The indicator functions can be expressed in terms of Ramanujan sums:
 * - I₃(n) = 1/3 + (1/3)c₃(n)
 * - I₅(n) = 1/5 + (1/5)c₅(n)
 * 
 * Therefore: f(n) = 11/15 + (1/3)c₃(n) + (2/5)c₅(n)
 * This is mathematically equivalent to the cosine approaches but explicitly
 * uses the Ramanujan sum formulation, connecting FizzBuzz to number theory.
 * Source: "Ramanujan's sum" - Wikipedia
 *   https://en.wikipedia.org/wiki/Ramanujan%27s_sum
 */

const findRuleWithRamanujanSums = (number) => {
    const results = [number.toString(), 'Fizz', 'Buzz', 'Fizzbuzz'];
    const c3 = 2 * Math.cos(2 * Math.PI * number / 3);
    const c5 = 2 * Math.cos(2 * Math.PI * number / 5) + 2 * Math.cos(4 * Math.PI * number / 5);
    const index = Math.round(11/15 + (1/3) * c3 + (2/5) * c5);
    return results[index];
}




//Implementations to actually solve the problem

/**
 * 
 * @returns { array } - Returns an array of strings
 * @variant For loop
 */
const fizzBuzzForLoop = () => {
    const array = [];
    for (let i = FB_INDEX; i <= FB_LENGTH; i++) { 
        array.push(findRuleWithCosine(i));
    }
    return array;
}

/**
 * 
 * @returns { array } - Returns an array of strings
 * @variant While loop
 */
const fizzBuzzWhileLoop = () => {
    const array = [];
    let index = FB_INDEX;
    while (index <= FB_LENGTH) {
        array.push(findRuleWithConcat(index));
        index++;
    }
    return array;
}

/**
 * 
 * @returns { array } - Returns an array of strings
 * @variant Array.forEach() loop
 */
const fizzBuzzForEachLoop = () => {
    const array = [];
    Array.from({ length: FB_LENGTH }, (_, i) => i + FB_INDEX).forEach(i => array.push(findRuleWithCosineIndicator(i)));
    return array;
}

/**
 * 
 * @returns { array } - Returns an array of strings
 * @variant Array.from().map()
 */
const fizzBuzzMapArray = () => {
    return Array.from({ length: FB_LENGTH }, (_, i) => i + FB_INDEX).map(i => { return findRuleWithFind(i); })
}

/**
 * 
 * @returns { array } - Returns an array of strings
 * @variant Array.fill().map()
 */
const fizzBuzzMapFillArray = () => {
    return Array(FB_LENGTH).fill().map((_, i) => findRuleWithSwitch(i + FB_INDEX));
}

/**
 * 
 * @returns { array } - Returns an array of strings
 * @variant Array.reduce()
 */
const fizzBuzzReduceArray = () => {
    return Array.from({ length: FB_LENGTH }, (_, i) => i + FB_INDEX).reduce((acc, i) => { return [...acc, findRuleWithConcat(i)]; }, []);
};

/**
 * 
 * @returns { array } - Returns an array of strings
 * @variant Closure with Array.from()
 */
const fizzBuzzClosureArray = (() => {
    return () => Array.from({ length: FB_LENGTH }, (_, i) => findRuleWithRamanujanSums(i + FB_INDEX));
})();

/**
 * @param {number} i - Current iteration index (default: 1)
 * @param {number} max - Maximum value to process (default: FB_LENGTH)
 * @param {Array} arr - Accumulator array for results (default: [])
 * @returns {Array} Array of FizzBuzz values from 1 to max
 * @variant Uses recursive pattern with accumulator for functional programming approach
 */
const fizzBuzzRecursive = (i = FB_INDEX, max = FB_LENGTH, array = []) => {
    if (i > max) return array;
    array.push(findRuleWithCosineIndicator(i));
    return fizzBuzzRecursive(i + 1, max, array);
}

/**
 * @class - FizzBuzz class solution
 * @example 
 * new FizzBuzz(FB_LENGTH, FB_INDEX).exe()
 */
class FizzBuzz {
    /**
     * Create a new FizzBuzz instance
     * @param { number } max - Maximum value to process
     * @param { number } index - Starting index
     */
    constructor(max, index) { this.max = max; this.index = index; this.array = []; }
    set(value) { this.array.push(value); }
    get() { return this.array; }
    exe() { 
        for (let i = this.index; i <= this.max; i++) { this.set(findRuleWithSwitch(i)) }
        return this.get();
    } 
}

/** Solution implementing generators - these are a little useless in this example since we return the entire array in fizzBuzzGeneratorLoop instead 
 * of yielding the individual value but I wanted to add them in to showcase the functionality. 
 */ 

/**
 * FizzBuzz generator function for lazy evaluation and memory efficiency
 * @param {number} max - Maximum value to generate (default: FB_LENGTH)
 * @yields {string} Individual FizzBuzz values on demand
 * @variant Uses ES6 generator pattern for lazy evaluation and iterator protocol
 */

const fizzBuzzGenerator = function* (max) {
    for (let i = FB_INDEX; i <= max; i++) { yield findRuleWithConcat(i); }
}
// SIDE EFFECTS: Creates generator object, maintains internal state between yields
// USAGE:
// const gen = fizzBuzzGenerator(FB_LENGTH);
// gen.next()



/**
 * FizzBuzz implementation consuming generator with for...of loop
 * @returns {Array} Array of FizzBuzz values from 1 to FB_LENGTH
 * @variant Uses generator consumption pattern with for...of iteration for controlled evaluation
 */

const fizzBuzzGeneratorLoop = () => {
    const array = [];
    const gen = fizzBuzzGenerator(FB_LENGTH);
    for (let i = FB_INDEX; i <= FB_LENGTH; i++) { array.push(gen.next())}
    return array;
}