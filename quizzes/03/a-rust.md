# Quiz 3: Basic Rust

## Overview

This quiz covers the following parts of the Substrate Knowledge Map:
- [Rust](../../knowledge-map#rust/) 

# Questions

### 1. What are some of Rust's key strengths?

A. Rust avoids 70% of all safety issues present in C / C++, and most memory issues.
B. Rust comes with a modern tooling infrastructure: cargo (builds just work), clippy (300+ code quality lints) and rustup (toolchain mgmt).
C. Rust is interoperable with other LLVM based platforms.
D. All of the above.
E. Only A and B.

### 2. In Substrate, Rust macros are useful because ...

A. Macros are a useful way to avoid code repetition.
B. Macros enables developers to write domain specific languages.
C. Macros allow metaprogramming.
D. All of the above.

### 3. Which of these is correct syntax for structs in Rust?

A. 
    ```rust
    struct Pair(i32, f32);
    ```
B. 
    ```rust
    struct Point {
        x: f32,
        y: f32,
    }
    ```
C. Both A and B.

### 4. What is true about unit testing in Rust?

A. `assert!(expression)` and `assert_eq!(left, right)` are useful helper macros to evaluate expressions.
B. Tests can be run using `cargo run test`.
C. Most unit tests go into a tests `mod` with the `#[cfg(test)]` attribute.
D. Only A and C.
E. All of the above

### 5. "Pallets" in FRAME are really just _ .

A. modules denoted `mod` as Rust understands thems.
B. powered by a collection of macros that use Substrate's core libraries for developers to easily access. 
C. a way to split up runtime logic.
D. All of the above.

