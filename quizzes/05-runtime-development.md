# Quiz 5: Runtime Development

## Overview

This quiz covers the following parts of the Substrate Knowledge Map:

- [Runtime Development Topics](../../knowledge-map#runtime-development-topics)

### 1. In a Substrate node, the runtime is \_ .

- [ ] A. a type of FRAME pallet that handles the business logic of the blockchain.
- [ ] B. where the blockchain state transition functions are defined.
- [ ] C. a key-value storage map for the executor.
- [ ] D. not very important, most Substrate blockchain's can do without it if implemented correctly.

### 2. What are the 3 key features of the executor in a Substrate node?

- [ ] A. To initialize a block; to run pallet logic; and to finalize a block.
- [ ] B. To initialize a block; to execute extrinsics; and to finalize a block.
- [ ] C. To initialize a block; to execute extrinsics; and to run consensus.
- [ ] D. None of the above.

### 3. Extrinsics come in the following 3 forms:

- [ ] A. Events, Errors, and Dispatchables
- [ ] B. Events, Signed Transactions, and Unsigned Transactions.
- [ ] C. Inherents, Signed Transactions, and Unsigned Transactions.
- [ ] D. Inherents, Errors, and Dispatchables.

### 4. In Substrate runtime development, why are "weights" important?

- [ ] A. They make sure that enough fees are collected over time to keep the blockchains' validators and treasury prosperous.
- [ ] B. They're not that important: removing them makes little difference in the grand scheme of things.
- [ ] C. They provide a measure of execution time for dipatchables, which is crucial to ensure that calls to the runtime won't surpass blocktime and to calculate fees associated with a dispatchable.
- [ ] D. They provide a measure that helps derive appropriate block execution time in order to dynamicaly define the time it should take to finalize a block.

### 5. I want to use a pallet in my runtime ... Check all that apply.

- [ ] A. I am limited to what is provided by FRAME.
- [ ] B. If I want to create my own, I can use FRAME to easily write logic for my runtime.
- [ ] C. I can import pallets using Rusts crate system.
- [ ] D. All pallets can be instantiate multiple times in runtime.

### 6. "Pallets" in FRAME are really just \_ .

- [ ] A. Modules denoted `mod` as Rust understands them.
- [ ] B. Powered by a collection of macros that use Substrate's core libraries for developers to easily access.
- [ ] C. A modular way to split up runtime logic, so they can be composed for different uses.
- [ ] D. Modules that have to fulfill a certain structure to be used in a Substrate chain's runtime logic.
- [ ] E. All of the above.
