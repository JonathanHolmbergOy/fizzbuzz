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

## Math stuff

Mathematically elegant (but overly complex) solutions using trigonometric functions:

- **Cosine Formula** - Uses finite Fourier series with algebraically simplified formula: `f(n) = 11/15 + (2/3)cos(2πn/3) + (4/5)[cos(2πn/5) + cos(4πn/5)]`
- **Cosine Indicator Functions** - Computes separate indicator functions I₃(n) and I₅(n) for divisibility checks
- **Ramanujan Sums** - Uses Ramanujan sum formulation connecting FizzBuzz to number theory: `f(n) = 11/15 + (1/3)c₃(n) + (2/5)c₅(n)`

These implementations require no modulo operations and demonstrate applications of Fourier series and number theory. Based on the excellent work by [Susam Pal](https://susam.net/fizz-buzz-with-cosines.html).
