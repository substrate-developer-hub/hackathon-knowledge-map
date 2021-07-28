# Quiz 7: Contracts

## Overview

This quiz covers the following parts of the Substrate Knowledge Map:

- [Smart Contract](../../knowledge-map#smart-contract)
- [Using **ink!**](../../knowledge-map#using-ink!)

### 1. What pallets and functionalities do Substrate used to support Smart Contract execution? Check all that apply.

- [ ] `pallet-contracts`: It offers functionality for Substrate runtime to deploy and execute WebAssembly smart-contracts.
- [ ] `pallet-evm`: It allows unmodified EVM code to be executed in a Substrate-based blockchain.
- [ ] `pallet-treasury`: It provides a "pot" of funds to be deducted when running transactions on smart contracts.
- [ ] `pallet-membership`: It contains the logic for managing the access control of the smart contract on who can call which functions.

### 2. How do Substrate implements functionality for running Solidity code?

- [ ] It sends cross-chain message over to Ethereum network.
- [ ] It embeds a SputnikVM EVM engine to run solidity ABI code.
- [ ] It implements the EVM engine specification in `pallet-contracts`.
- [ ] It creates a simulated environment for running EVM code, and put the final computed result back to the on-chain stroage.

### 3. What's right about Smart Contract in Substrate?

- [ ] You can deploy a contract once and instantiate it multiple times.
- [ ] When you build a contract, three files are generated, a wasm binary, the native binary, and the metadata files.
- [ ] Contracts are intended to be used by any user on a public network. But a contract can specified certain other contracts to directly modify its own storage.
- [ ] A contract account is charged proportionally to the amount of storage its account uses. When a contract's balance goes below a defined limit, the contract's account is turned into a "tombstone" and its storage is cleaned up.
