# Quiz 3: Basic Rust

## Overview

This quiz covers the following parts of the Substrate Knowledge Map:

- [Rust](../../knowledge-map#rust/)

### 1. What are some of Rust's key strengths?

- [ ] A. Rust avoids 70% of all safety issues present in C / C++, and most memory issues.
- [ ] B. Rust comes with a modern tooling infrastructure: cargo (builds just work), clippy (300+ code quality lints) and rustup (toolchain mgmt).
- [ ] C. Rust is interoperable with other LLVM based platforms.
- [ ] D. All of the above.
- [ ] E. Only A and B.

### 2. In Substrate, Rust macros are useful because ...

- [ ] A. Macros are a way to avoid code repetition.
- [ ] B. Macros enable developers to write domain specific languages.
- [ ] C. Macros allow metaprogramming.
- [ ] D. All of the above.

### 3. Which of these is correct syntax for a struct in Rust? Check all that apply.

- [ ] A.

  ```
  struct Pair(i32, f32);
  ```

- [ ] B.

  ```
  #[derive(Encode, Decode, Default, Clone, PartialEq)]
  pub struct MyStruct {
      some_number: u32,
      optional_number: Option<u32>,
  }
  ```

- [ ] C.

  ```
  #[pallet::weight(10_000 + T::DbWeight::get().writes(1))]
  pub fn do_something(origin: OriginFor<T>, something: u32) -> DispatchResult {
      let who = ensure_signed(origin)?;
      <Something<T>>::put(something);
      Ok(())
  }
  ```

- [ ] D.
  ```
  struct Person {
      char name[30];
      int citizenship;
      int age;
  }
  ```

### 4. What is true about unit testing in Rust? Check all that apply.

- [ ] A. `assert!(expression)` and `assert_eq!(left, right)` are useful helper macros to evaluate expressions.
- [ ] B. Tests can be run using `cargo run test`.
- [ ] C. Unit tests are more complex in Rust than in any other language.
- [ ] D.  Most unit tests go into a tests `mod` with the `#[cfg(test)]` attribute.
