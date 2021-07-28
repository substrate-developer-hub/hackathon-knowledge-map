# Quiz 6: Polkadot JS API

## Overview

This quiz covers the following parts of the Substrate Knowledge Map:
- [Polkadot JS API](../../knowledge-map#polkadot-js-api)

### 1. What are the differences between Polkadot-JS Apps and Polkadot-JS API? Check all that apply.

- [ ] Polkadot-JS Apps is the official JS API connecting with Substrate-based networks.
- [ ] Polkadot-JS Apps is a front-end and wallet to interact with Substrate-based networks.
- [ ] Polkadot-JS API is the official JS API connecting with Substrate-based networks.
- [ ] Polkadot-JS API is a front-end and wallet to interact with Substrate-based networks.
- [ ] Polkadot-JS API, in addition to Substrate-based networks, can also connect to other mainstream blockchains such as Bitcoin and Ethereum.

### 2. In Polkadot-JS API, what datatype is used to represent a number (i.e. u64, i64, u128, i128) on Substrate network?

- [ ] The default data type Number in javascript.
- [ ] String
- [ ] [bn.js](https://github.com/indutny/bn.js/)
- [ ] [bignumber.js](https://github.com/MikeMcl/bignumber.js/)
- [ ] [decimal.js](https://github.com/MikeMcl/decimal.js/)

### 3. What is the proper way to query a storage value in Substrate network and subscribed to its changes?

- [ ] `const val = await api.query.my_pallet.storage`
- [ ] `const unsub = await api.query.my_pallet.storage(value => {...})`
- [ ] `const val = await api.consts.my_pallet.const`
- [ ] `const val = await api.tx.my_pallet.tx().signAndSend()`
- [ ] `const val = await api.tx.my_pallet.tx().signAndSend(value => {...})`

### 4. What is the proper way to send an extrinsic to a Substrate network, **GIVEN THAT** I also don't need to subscribe to the on-chain transaction status.

- [ ] `const val = await api.query.my_pallet.storage`
- [ ] `const unsub = await api.query.my_pallet.storage(value => {...})`
- [ ] `const val = await api.consts.my_pallet.const`
- [ ] `const val = await api.tx.my_pallet.tx().signAndSend()`
- [ ] `const val = await api.tx.my_pallet.tx().signAndSend(value => {...})`
