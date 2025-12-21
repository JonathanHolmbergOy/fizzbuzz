# fizzbuzz

An overly engineered vanillaJS showcase of the FizzBuzz problem, different iterator methods, and some weird math (such as the Fourier series and Ramanujan sums).

## Iterators

Multiple approaches to iterating through the FizzBuzz problem:

- **For Loop** - Traditional `for` loop with imperative style
- **While Loop** - Classic `while` loop with manual index increment
- **Array.forEach()** - Functional approach using `forEach` with array mutation
- **Array.from().map()** - Declarative array creation and transformation
- **Array.fill().map()** - Alternative array initialization using `fill()`
- **Array.reduce()** - Functional accumulation pattern
- **Closure** - Uses IIFE (Immediately Invoked Function Expression) to create closure
- **Recursive** - Recursive pattern with accumulator for functional programming approach
- **Class-based OOP** - Object-oriented implementation encapsulating state and behavior

## Generators

ES6 generator implementations demonstrating lazy evaluation and the iterator protocol:

- **fizzBuzzGenerator** - Generator function that yields individual FizzBuzz values on demand, enabling memory-efficient iteration and controlled evaluation flow
- **fizzBuzzGeneratorLoop** - Consumer pattern that uses a generator with iterative consumption to build the complete array

Generators provide lazy evaluation where values are computed only when requested via `next()`, making them useful for large datasets or infinite sequences. Note: In this showcase, `fizzBuzzGeneratorLoop` eagerly consumes all values, which defeats the memory efficiency benefit—but demonstrates the consumption pattern.

## Math stuff

Mathematically elegant (but overly complex) solutions using trigonometric functions:

- **Cosine Formula** - Uses finite Fourier series with algebraically simplified formula: `f(n) = 11/15 + (2/3)cos(2πn/3) + (4/5)[cos(2πn/5) + cos(4πn/5)]`
- **Cosine Indicator Functions** - Computes separate indicator functions I₃(n) and I₅(n) for divisibility checks
- **Ramanujan Sums** - Uses Ramanujan sum formulation connecting FizzBuzz to number theory: `f(n) = 11/15 + (1/3)c₃(n) + (2/5)c₅(n)`

These finite Fourier series implementations require no modulo operations and demonstrate applications of number theory. Based on the excellent work by [Susam Pal](https://susam.net/fizz-buzz-with-cosines.html).
