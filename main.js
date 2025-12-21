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
    if (number === 0) { return; } //Required for the solutions where we can't set our index
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
        case number === 0: return;
        case number % 15 === 0: return 'FizzBuzz';
        case number % 5 === 0: return 'Buzz';
        case number % 3 === 0: return 'Fizz';
        default: return number.toString();
    }
}
// PROS: Fastest performance with direct conditionals (switch statements jump memory addresses), explicit and clear, conventional pattern,
// CONS: Hardcoded values (not extensible), order dependent, repetitive for more rules, switch(true) considered anti-pattern by some, not DRY




//Implementations to actually solve the problem

/**
 * 
 * @returns { array } - Returns an array of strings
 * @variant For loop
 */
const fizzBuzzForLoop = () => {
    const array = [];
    for (let i = FB_INDEX; i <= FB_LENGTH; i++) { 
        array.push(findRuleWithFind(i));
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
    Array.from({ length: FB_LENGTH }, (_, i) => i + 1).forEach(i => array.push(findRuleWithSwitch(i)));
    return array;
}

/**
 * 
 * @returns { array } - Returns an array of strings
 * @variant Array.from().map()
 */
const fizzBuzzMapArray = () => {
    return Array.from({ length: FB_LENGTH }, (_, i) => i + 1).map(i => { return findRuleWithFind(i); })
}

/**
 * 
 * @returns { array } - Returns an array of strings
 * @variant Array.fill().map()
 */
const fizzBuzzMapFillArray = () => {
    return Array(FB_LENGTH).fill().map((_, i) => findRuleWithSwitch(i + 1));
}

/**
 * 
 * @returns { array } - Returns an array of strings
 * @variant Array.reduce()
 */
const fizzBuzzReduceArray = () => {
    return Array.from({ length: FB_LENGTH }, (_, i) => i + 1).reduce((acc, i) => { return [...acc, findRuleWithConcat(i)]; }, []);
};

/**
 * 
 * @returns { array } - Returns an array of strings
 * @variant Closure with Array.from()
 */
const fizzBuzzClosureArray = (() => {
    return () => Array.from({ length: FB_LENGTH }, (_, i) => findRuleWithFind(i + 1));
})();

/**
 * @param {number} i - Current iteration index (default: 1)
 * @param {number} max - Maximum value to process (default: FB_LENGTH)
 * @param {Array} arr - Accumulator array for results (default: [])
 * @returns {Array} Array of FizzBuzz values from 1 to max
 * @variant Uses recursive pattern with accumulator for functional programming approach
 */
const fizzBuzzRecursive = (i = 1, max = FB_LENGTH, array = []) => {
    if (i > max) return array;
    array.push(findRuleWithConcat(i));
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