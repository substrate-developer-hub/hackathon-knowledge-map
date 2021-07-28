# Quiz 2: Basics

## Overview

This quiz covers the following parts of the Substrate Knowledge Map:

- [Setup Your Local Development Environment](../../knowledge-map#setup-your-local-development-environment/) 

- [Interact with a Substrate Network using Polkadot-JS Apps](../../knowledge-map#interact-with-a-substrate-network-using-polkadot-JS-Apps/)

### 1. What language compiler/interpreter do you need to install in your local machine to compile Substrate?

- [ ] A. `gcc`
- [ ] B. `node`
- [ ] C. `rustc`
- [ ] D. `ruby`
- [ ] E. `python`

### 2. What OS platform could you use to compile Substrate? Check all that apply.

- [ ] A. Windows
- [ ] B. macOS
- [ ] C. Linux
- [ ] D. Android

### 3. Why do we need both rust stable and rust nightly version installed to compile Substrate?

- [ ] A. We want to make sure our binaries support the upcoming features in rust nightly version.
- [ ] B. To test our compiled binaries support features in both rust stable and rust nightly.
- [ ] C. We want to build Substrate projects in both native binary (using rust stable), and Wasm binary (which requires rust nightly).
- [ ] D. We want both binaries to verify the stability of our code.

### 4. What operations could you perform using Polkadot-JS Apps? Check all that apply.

- [ ] Inspect the block information of a Substrate network.
- [ ] Send extrinsics to a Substrate network.
- [ ] With an embedded javascript editor, you could write javascript to interact with the connected Substrate network.
- [ ] Can act as a faucet of a Substrate network, and acquire a small amount of Substrate tokens.
- [ ] Can sign an arbitrary message with a user account.

### 5. Which of the following are WRONG about Polkadot-JS Apps? Check all that apply.

- [ ] You can only see the block information of the latest block of a Substrate-based network with Polkadot-JS Apps.
- [ ] You can run a local version as well as using the hosted version of Polkadot-JS Apps.
- [ ] You can use Polakdot-JS Apps to connect to Bitcoin and Ethereum networks.
- [ ] You can inspect a user account in Polkadot-JS Apps but not creating a new one. You need a browser plugin to do so.
- [ ] We need to specify our own custom data type in Polkadot-JS Apps is because Substrate sent a series of bytes to its clients. So developers need to tell the Apps how to decode and interpret these bytes.

### 6. If you added custom data type in Substrate runtime, what do you need to do on Polkadot-JS Apps side to for the Apps to support this Substrate network?

- [ ] In **Setting** > **Metadata** tab, add the custom data definition in JSON form.
- [ ] In **Setting** > **Developer** tab, add the custom data definition in XML form.
- [ ] In **Setting** > **Developer** tab, add the custom data definition in JSON form.
- [ ] In **Toolbox** > **Sign message** tab, sign a message with the sudo user account for confirmation.
- [ ] In **Toolbox** > **Verify signature** tab, verify the signature coming from a sudo user account for confirmation.
