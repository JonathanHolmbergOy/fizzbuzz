/*
 * FizzBuzz Rules:
 * - Print numbers from 1 to 100
 * - For multiples of 3, show "Fizz" instead of the number
 * - For multiples of 5, show "Buzz" instead of the number
 * - For multiples of 3 and 5, show "FizzBuzz" instead of the number
 * - Return an array containing the results based on the rules above
 */

// index = 1 is a magic number, but necessary to ensure full functionality,
// even when calling multiple different functions in the same global instance (in ex. Chrome Dev tools console).
// This way there is no need to reset the variable when refering it in the 
// code (compared to length which is a "true" constant and not subject to mutations.)
// As a result each 

const FB_LENGTH = 100;
const rules = [
    { value: 15, label: 'Fizzbuzz' },
    { value: 5, label: 'Buzz' },
    { value: 3, label: 'Fizz' },
]

/**
 * Find matching FizzBuzz rule for a given number using rules array
 * @param {number} i - Number to evaluate against FizzBuzz rules
 * @returns {string|number} Matching rule label or original number if no rule applies
 */

const findRule = (i) => {
    return rules.find(r => r.value && i % r.value === 0)?.label || i;
}



/**
 * Apply FizzBuzz rules using switch statement pattern
 * @param {number} i - Number to evaluate against FizzBuzz rules
 * @returns {string|number} FizzBuzz result based on divisibility rules
 */

const switchRule = (i) => {
    switch (true) {
        case i % 15 === 0: return 'Fizzbuzz';
        case i % 5 === 0: return 'Buzz';
        case i % 3 === 0: return 'Fizz';
        default: return i;
    }
}



/**
 * Object-oriented FizzBuzz implementation using ES6 class syntax
 * @class FizzBuzz
 * @variant Uses class-based approach with encapsulated state and method chaining
 */

class FizzBuzz {
    constructor(max = FB_LENGTH) { this.max = max; this.arr = []; }
    set(value) { this.arr.push(value); }
    get() { return this.arr; }
    run() {
        for (let i = 1; i <= this.max; i++) { this.set(findRule(i)); }
        return this.get();
    }
    exe() { return this.run(); }
}




// Implementations

/**
 * Most basic FizzBuzz implementation using traditional for loop with hardcoded conditions
 * @returns {Array} Array of FizzBuzz values from 1 to FB_LENGTH
 * @variant Uses explicit if/else if statements for each divisibility rule
 */

const fb_most_basic = () => {
    const arr = [];
    let index = 1;
    for (let i = index; i <= FB_LENGTH; i++) {
        if (i % 15 === 0) { arr.push('Fizzbuzz'); }
        else if (i % 5 === 0) { arr.push('Buzz'); }
        else if (i % 3 === 0) { arr.push('Fizz'); }
        else { arr.push(i); }
    }
    return arr;
}
// PROS: Simple, readable, fast execution, familiar pattern
// CONS: Hardcoded rules, not flexible, repetitive conditions  
// SIDE EFFECTS: None, properly scoped variables

// fb_most_basic()



/**
 * FizzBuzz implementation using switch statement with boolean conditions
 * @returns {Array} Array of FizzBuzz values from 1 to FB_LENGTH
 * @variant Uses switch(true) pattern with case conditions for cleaner control flow
 */

const fb_switch = () => {
    const arr = [];
    let index = 1;
    for (let i = index; i <= FB_LENGTH; i++) { arr.push(switchRule(i)) }
    return arr;
}
// PROS: Clean control flow, avoids multiple modulo operations on match
// CONS: Still hardcoded rules, switch(true) pattern may confuse some developers
// SIDE EFFECTS: None, uses proper scoped variables

// fb_switch()



/**
 * FizzBuzz implementation using for loop with rules-based helper function
 * @returns {Array} Array of FizzBuzz values from 1 to FB_LENGTH
 * @variant Uses findRule helper for consistent rule application across implementations
 */

const fb_for_loop = () => {
    const arr = [];
    let index = 1;
    for (let i = index; i <= FB_LENGTH; i++) { arr.push(findRule(i)); }
    return arr;
}
// PROS: Uses shared rules, flexible and maintainable, clear separation of concerns
// CONS: Slightly more complex than basic version, function call overhead
// SIDE EFFECTS: None, well-encapsulated with proper scoping

// fb_for_loop()



/**
 * FizzBuzz implementation using while loop with manual iteration control
 * @returns {Array} Array of FizzBuzz values from 1 to FB_LENGTH
 * @variant Uses while loop pattern requiring explicit index increment management
 */

const fb_while_loop = () => {
    const arr = [];
    let index = 1;
    while (index <= FB_LENGTH) {
        arr.push(findRule(index));
        index++;
    }
    return arr;
}
// PROS: Explicit control over iteration, useful for complex loop conditions
// CONS: Error-prone index management, more verbose than for loops
// SIDE EFFECTS: None, properly uses index variable

// fb_while_loop()



/**
 * FizzBuzz implementation using Array.forEach method for functional iteration
 * @returns {Array} Array of FizzBuzz values from 1 to FB_LENGTH
 * @variant Uses forEach for side-effect iteration without return value transformation
 */

const fb_for_each = () => {
    const arr = [];
    Array.from({ length: FB_LENGTH }, (_, i) => i + 1).forEach(i => arr.push(findRule(i)));
    return arr;
}
// PROS: Functional approach, no index management, expressive intent
// CONS: Creates intermediate array, uses side effects (push), not pure functional
// SIDE EFFECTS: External array mutation, double memory usage during execution

// fb_for_each()



/**
 * FizzBuzz implementation using Array.from with map transformation
 * @returns {Array} Array of FizzBuzz values from 1 to FB_LENGTH
 * @variant Uses functional map transformation for immutable array creation
 */

const fb_array_map_method = () => {
    return Array.from({ length: FB_LENGTH }, (_, i) => i + 1).map(i => { return findRule(i); });
}
// PROS: Pure functional, immutable, chainable, no side effects
// CONS: Double iteration (Array.from + map), higher memory usage
// SIDE EFFECTS: None, completely pure and functional

// fb_array_map_method()



/**
 * FizzBuzz implementation using Array.reduce for accumulative processing
 * @returns {Array} Array of FizzBuzz values from 1 to FB_LENGTH
 * @variant Uses reduce pattern for sequential accumulation with spread operator
 */

const fb_array_reduce_method = () => {
    return Array.from({ length: FB_LENGTH }, (_, i) => i + 1).reduce((acc, i) => { return [...acc, findRule(i)]; }, []);
};
// PROS: Functional accumulator pattern, single pass iteration
// CONS: Spread operator creates new arrays each iteration (O(n²) complexity)
// SIDE EFFECTS: None, properly returns the accumulated array

// fb_array_reduce_method()



/**
 * FizzBuzz implementation using Array.fill with map for sparse array initialization
 * @returns {Array} Array of FizzBuzz values from 1 to FB_LENGTH
 * @variant Uses Array(n).fill() to create dense array before map transformation
 */

const fb_array_fill_method = () => {
    return Array(FB_LENGTH).fill().map((_, i) => findRule(i + 1));
}
// PROS: Concise syntax, single chain operation, good performance
// CONS: Array(n).fill() creates sparse array first, less readable than Array.from
// SIDE EFFECTS: None, pure functional approach

// fb_array_fill_method()



/**
 * FizzBuzz implementation using IIFE closure pattern for encapsulation
 * @returns {Function} Function that returns array of FizzBuzz values from 1 to FB_LENGTH
 * @variant Uses immediately invoked function expression to create closure-wrapped implementation
 */

const fb_array_closure_method = (() => {
    return () => Array.from({ length: FB_LENGTH }, (_, i) => findRule(i + 1));
})();
// PROS: Encapsulation, prevents namespace pollution, demonstrates closure concept
// CONS: Unnecessary complexity for this use case, harder to debug
// SIDE EFFECTS: Creates closure at module load time, uses additional memory

// fb_array_closure_method()



/**
 * FizzBuzz implementation using recursive function calls with tail recursion
 * @param {number} i - Current iteration index (default: 1)
 * @param {number} max - Maximum value to process (default: FB_LENGTH)
 * @param {Array} arr - Accumulator array for results (default: [])
 * @returns {Array} Array of FizzBuzz values from 1 to max
 * @variant Uses recursive pattern with accumulator for functional programming approach
 */

const fb_recursive_method = (i = 1, max = FB_LENGTH, arr = []) => {
    if (i > max) return arr;
    arr.push(findRule(i));
    return fb_recursive_method(i + 1, max, arr);
}
// PROS: Functional programming paradigm, elegant mathematical approach, tail recursion
// CONS: Stack overflow risk for large inputs, slower than iterative, harder to debug
// SIDE EFFECTS: Consumes call stack memory, potential stack overflow at ~10,000+ iterations

// fb_recursive_method()



/**
 * FizzBuzz generator function for lazy evaluation and memory efficiency
 * @param {number} max - Maximum value to generate (default: FB_LENGTH)
 * @yields {string|number} Individual FizzBuzz values on demand
 * @variant Uses ES6 generator pattern for lazy evaluation and iterator protocol
 */

const fb_generator = function* (max = FB_LENGTH) {
    for (let i = 1; i <= max; i++) { yield findRule(i); }
}
// PROS: Memory efficient, lazy evaluation, supports iteration protocol, pausable execution
// CONS: More complex to use, requires understanding of generators, debugging complexity
// SIDE EFFECTS: Creates generator object, maintains internal state between yields

// [...fb_generator(100)]



/**
 * FizzBuzz implementation consuming generator with for...of loop
 * @returns {Array} Array of FizzBuzz values from 1 to FB_LENGTH
 * @variant Uses generator consumption pattern with for...of iteration for controlled evaluation
 */

const fb_generator_loop = () => {
    const arr = [];
    for (const res of fb_generator(FB_LENGTH)) { arr.push(res); }
    return arr;
}
// PROS: Combines generator benefits with array collection, controlled evaluation
// CONS: Negates memory benefits by collecting all values, adds complexity layer
// SIDE EFFECTS: Generator creation overhead, still builds full array in memory

// fb_generator_loop()



/**
 * Factory function for FizzBuzz class instantiation and execution
 * @returns {Array} Array of FizzBuzz values from 1 to FB_LENGTH
 * @variant Uses factory pattern to abstract class instantiation and method execution
 */

const fb_class = () => {
    const obj = new FizzBuzz();
    return obj.exe();
};

// fb_class()