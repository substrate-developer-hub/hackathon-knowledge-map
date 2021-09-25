<!-- MarkdownTOC autolink="true" -->

- [Substrate Knowledge Map for Hackathon Participants](#substrate-knowledge-map-for-hackathon-participants)
  - [Introduction](#introduction)
    - [Smart contract development](#smart-contract-development)
    - [Substrate runtime development](#Substrate-runtime-development)
    - [Navigating the documentations](#navigating-our-documentations)
    - [Quiz #1](#quiz-1)
  - [Basics](#basics)
    - [Set up your local development environment](#setup-your-local-development-environment)
    - [Lab #1](#lab-1)
    - [Interact with a Substrate network using Polkadot-JS apps](#interact-with-a-substrate-network-using-polkadot-js-apps)
    - [Quiz #2](#quiz-2)
    - [Lab #2](#lab-2)
    - [Lab #3](#lab-3)
  - [Preliminaries](#preliminaries)
    - [Rust](#rust)
    - [How blockchains work](#how-blockchain-works)
    - [Quiz #3](#quiz-3)
  - [Substrate runtime development](#substrate-runtime-development)
    - [High level architecture](#high-level-architecture)
    - [Quiz #4](#quiz-4)
    - [Runtime development topics](#runtime-development-topics)
    - [Lab #4](#lab-4)
    - [Lab #5](#lab-5)
    - [Lab #6](#lab-6)
    - [Quiz #5](#quiz-5)
  - [Polkadot JS API](#polkadot-js-api)
    - [Lab #7](#lab-7)
    - [Quiz #6](#quiz-6)
  - [Smart contract](#smart-contract)
    - [Using **ink!**](#using-ink)
    - [Quiz #7](#quiz-7)
  - [What we do not cover](#what-we-do-not-cover)
  - [Terms clarification](#terms-clarification)

<!-- /MarkdownTOC -->

# Substrate Knowledge Map for Hackathon Participants

The _Substrate Knowledge Map_ provides information that you—as a Substrate hackathon participant—need to know to develop a non-trivial application for your hackathon submission. 

The map covers 6 main sections: 

1. [Introduction](#introduction)
2. [Basics](#basics)
3. [Preliminaries](#preliminaries) 
4. [Runtime Development](#substrate-runtime-development)
5. [Polkadot JS API](#polkadot-js-api)
6. [Smart Contracts](#smart-contracts)

Each section contains basic information on each topic, with links to additional documentation for you to dig deeper. 
Within each section, you'll find a mix of **quizzes** and **labs** to test your knowledge as your progress through the map. 
The goal of the labs and quizzes is to help you consolidate what you've learned and put it to practice with some hands-on activities.

## Introduction

One question we often get is why learn the Substrate framework when we can write smart contracts to build decentralized applications?

The short answer is that using the Substrate framework and writing smart contracts are two different approaches.

### Smart contract development

Traditional smart contract platforms allow users to publish additional logic on top of some core blockchain logic. 
Since smart contract logic can be published by anyone, including malicious actors
and inexperienced developers, there are a number of intentional safeguards and restrictions built around these public smart contract platforms.
For example:

- **Fees**: Smart contract developers must ensure that contract users are charged for the computation and storage they impose on the computers running their contract. 
With fees, block creators are protected from abuse of the network.

- **Sandboxed**: A contract is not able to modify core blockchain storage or storage items of other contracts directly. 
Its power is limited to only modifying its own state, and the ability to make outside calls to other contracts or runtime functions.

- **Reversion**: Contracts can be prone to undesirable situations that lead to logical errors when wanting to revert or upgrade them. 
Developers need to learn additional patterns such as splitting their contract's logic and data to ensure seamless upgrades.

These safeguards and restrictions make running smart contracts slower and more costly. However, it's important to consider the different developer audiences for contract development versus Substrate runtime development.

Building decentralized applications with smart contracts allows your community to extend and develop on top of your runtime logic without worrying about proposals, runtime upgrades, and so on. 
You can also use smart contracts as a testing ground for future runtime changes, but done in an isolated way that protects your network from any errors the changes might introduce.

In summary, smart contract development:

- Is inherently safer to the network.
- Provides economic incentives and transaction fee mechanisms that can't be directly
  controlled by the smart contract author.
- Provides computational overhead to support graceful logical failures.
- Has a low barrier to entry for developers and enables a faster pace of community interaction.

### Substrate runtime development

Unlike traditional smart contract development, Substrate runtime development offers none of the network protections or safeguards. 
Instead, as a runtime developer, you have total control over how the blockchain behaves.
However, this level of control also means that there is a higher barrier to entry.

Substrate is a _framework_ for building blockchains, which almost makes comparing it to smart contract development like comparing apples and oranges. 
With the Substrate framework, developers _can_ build smart contracts but that is only a fraction of using Substrate to its full potential.
 
With Substrate, you have full control over the underlying logic that your network's nodes will run. 
You also have full access for modifying and controlling each and every storage item across your runtime modules. 
As you progress through this map, you'll discover concepts and techniques that will help you to unlock the potential of the Substrate framework, giving you the freedom to build the blockchain that best suits the needs of your application.

You'll also discover how you can upgrade the Substrate runtime with a single transaction instead of having to organize a community hard-fork.
Upgradeability is one of the primary design features of the Substrate framework.

In summary, runtime development:

- Provides low level access to your entire blockchain.
- Removes the overhead of built-in safety for performance.
- Has a higher barrier of entry for developers.
- Provides flexibility to customize full-stack application logic.

> To learn more about using smart contracts within Substrate, refer to the
> [**Smart Contract - Overview**](https://substrate.dev/docs/en/knowledgebase/smart-contracts/overview)
> page as well as the
> [Polkadot Builders Guide](https://wiki.polkadot.network/docs/build-build-with-polkadot#what-is-the-difference-between-building-a-parachain-a-parathread-or-a-smart-contract).

## Navigating the documentation

If you need any community support, please join the following channels based on the area where you need help:
- Substrate Technical channel on [Discord](https://discord.gg/JDqXTre5HB) or [Element](https://app.element.io/#/room/!HzySYSaIhtyWrwiwEV:matrix.org). 
- ink! Smart Contract channel on [Discord](https://discord.gg/EDxn9hN6mM) or [Element](https://matrix.to/#/#ink:matrix.parity.org)
- Frontier EVM Compatibility channel on [Discord](https://matrix.to/#/#frontier:matrix.parity.org) or [Element](https://matrix.to/#/#frontier:matrix.parity.org)
- PolkatodJS API channel on [Discord](https://discord.gg/R9HGGWtvCS)

Alternatively, also look for support on [Stackoverflow where questions are tagged with "substrate"](https://stackoverflow.com/questions/tagged/substrate) or on the [Parity Subport repo](https://github.com/paritytech/subport/issues). 

Use the following links to explore the sites and resources available on each:

[**Substrate Developer Hub**](https://substrate.dev/) has the most comprehensive
all-round coverage about Substrate, from a "big picture" explanation of architecture to specific technical concepts. 
The site also provides tutorials to guide you as your learn the Substrate framework and the API reference documentation. You should check this site first if you want to look up information about Substrate runtime development. 
The site consists of:

- [Knowledge Base](https://substrate.dev/docs/en/): Explaining the foundational concepts of building blockchain runtimes using Substrate.

- [Tutorials](https://substrate.dev/en/tutorials): Hand-on tutorials for developers to follow.
  **The first SIX tutorials show the fundamentals in Substrate and are recommended for
  every Substrate learner to go through.**

- [How-to Guides](https://substrate.dev/substrate-how-to-guides/) /
  [Recipes](https://substrate.dev/recipes): These resources are like the O'Reilly cookbook series written in a task-oriented way for readers to get the job done. 
  Some examples of the topics overed include:
  
    - Setting up proper weight functions for extrinsic calls.
    - Using off-chain workers to fetch HTTP requests.
    - Writing tests for your pallets
    It can also be read from
  
    Note that we are migrating content to convert all existing [Recipes](https://substrate.dev/recipes) to become [How-to Guides](https://substrate.dev/substrate-how-to-guides/).

- [API docs](https://substrate.dev/rustdocs): Substrate API reference documentation.

[Substrate Node Template](https://github.com/substrate-developer-hub/substrate-node-template) provides a light weight, minimal Substrate blockchain node that you can set up as a local development environment.

[Substrate Front-end template](https://github.com/substrate-developer-hub/substrate-front-end-template) provides a front-end interface built with React using [Polkadot-JS API](https://polkadot.js.org/docs/api/) to connect
to any Substrate node. 
**Developers are encouraged to start new Substrate projects based on these templates**.

If you face any technical difficulties and need support, feel free to join the
[Substrate Technical matrix channel](https://app.element.io/#/room/!HzySYSaIhtyWrwiwEV:matrix.org) and ask your questions there.

## Additional resources

- [**Polkadot Wiki**](https://wiki.polkadot.network/) documents the specific behavior and
mechanisms of the Polkadot network. 
The Polkadot network allows multiple blockchains to connect and pass messages to each other.
On the wiki, you can learn about how Polkadot—built using Substrate—is customized to support inter-blockchain message passing.

- [**Polkadot JS API doc**](https://polkadot.js.org/docs/api/): documents how to use the Polkadot-JS API.
This JavaScript-based API allows developers to build custom front-ends for their blockchains and applications. 
Polkadot JS API provides a way to connect to Substrate-based blockchains to query runtime metadata and send transactions.

### Quiz #1

👉 **Submit your answers to [Quiz #1](quizzes/01-overview.md)**

## Basics

### Set up your local development environment

Here you will set up your local machine to install the Rust compiler&mdash;ensuring that you have both stable and nightly versions installed. 
Both stable and nightly versions are required because currently a Substrate runtime is compiled to a native binary using the stable Rust compiler, **then** compiled to a WebAssembly (WASM) binary, which only the nightly Rust compiler can do.

Also refer to:

- [Set up Substrate for Unix-based machines](https://substrate.dev/docs/en/knowledgebase/getting-started/)
- [Set up Substrate for Windows](https://substrate.dev/docs/en/knowledgebase/getting-started/windows-users)

### Lab #1

👉 **Complete [Lab #1: Run a Substrate node](labs/01-run-a-substrate-node.md)**

### Interact with a Substrate network using Polkadot-JS apps

[Polkadot JS Apps](http://polkadot.js.org/apps) is the canonical front-end to interact with any Substrate-based chain.

You can configure whichever endpoint you want it to connected to, even to your `localhost`
running node. Refer to the following two diagrams.

1. Click on the top left side showing your currently connected network:

![assets/01-polkadot-app-endpoint.png](./assets/01-polkadot-app-top-left.png)

2. Scroll to the bottom of the menu, open **DEVELOPMENT**, and choose either **Local Node** or **Custom** to specify your own endpoint.

![assets/02-polkadot-app-select-endpoint.png](./assets/02-polkadot-app-select-endpoint.png)

### Quiz #2

👉 **Complete [Quiz #2](quizzes/02-basics.md)**

### Lab #2 

👉 **Complete [Lab #2: Using Polkadot-JS Apps](labs/02-polkadot-js-interaction.md)**

> **Notes**: If you are connecting Apps to a custom chain (or your locally-running node), you may
> need to specify your chain's custom data types in JSON under **Settings** > **Developer**.
>
> Polkadot-JS Apps only receives a series of bytes from the blockchain. It is up to the developer to
> tell it how to decode and interpret these custom data type. To learn more on this, refer to:
>
> - [Polkadot JS doc: Type basics](https://polkadot.js.org/docs/api/start/types.basics)
> - [Polkadot JS doc: Extending types](https://polkadot.js.org/docs/api/start/types.extend)

You will also need to create an account. To do so, follow these 
[steps on account generation](https://wiki.polkadot.network/docs/en/learn-account-generation).
You'll learn that you can also use the [Polkadot-JS Browser Plugin](https://polkadot.js.org/extension/)
(a Metamask-like browser extension to manage your Substrate accounts) and it will automatically be
imported into Polkadot-JS Apps. 

> **Notes**: When you run a Substrate chain in development mode (with the `--dev` flag), well-known
> accounts (`Alice`, `Bob`, `Charlie`, etc.) are always created for you.

### Lab #3

👉 **Complete [Lab #3: Create an Account](labs/03-create-account.md)**

## Preliminaries

You need to know some Rust programming concepts and have a good understanding on how blockchain technology works in
order to make the most of developing with Substrate. The following resources will help you brush up in these areas.

### Rust

You will need familiarize yourself with Rust to understand how Substrate is built and how to make the most of its capabilities.

If you are new to Rust, or need a brush up on your Rust knowledge, please refer to
[The Rust Book](https://doc.rust-lang.org/book/). You could still continue learning about
Substrate without knowing Rust, but we recommend you come back to this section whenever in doubt about what any of the 
Rust syntax you're looking at means. Here are the parts of the Rust book we recommend you 
familiarize yourself with:

- **ch 1 - 10**: These chapters cover the foundational knowledge of programming in Rust
- **ch 13**: On iterators and closures
- **ch 18 - 19**: On advanced traits and advanced types. Learn a bit about macros as well. You will not
  necessarily be writing your own macros, but you'll be using a lot of Substrate and FRAME's built-in macros to write
  your blockchain runtime.

### How blockchains work

Given that you'll be writing a blockchain runtime, you need to know what a blockchain is, and how it works. 
The [**Web3 Blockchain Fundamental MOOC](https://www.youtube.com/playlist?list=PLxVihxZC42nF_MCN9PTvZMIifRjx9cZ2J) Youtube video
series provides a good basis for understanding key blockchain concepts and how blockchains work.

The lectures we recommend you watch are: lectures 1 - 7 and lecture 10. That's 8 lectures, or about 4 hours of video.

### Quiz #3

👉 **Complete [Quiz #3](quizzes/03-rust.md)**

## Substrate runtime development

### High level architecture

To know more about the high level architecture of Substrate, please go through the Knowledge Base articles on
**[Getting Started: Overview](https://substrate.dev/docs/en/)** and
**[Getting Started: Architecture](https://substrate.dev/docs/en/knowledgebase/getting-started/architecture)**.

In this document, we assume you will develop a Substrate runtime with
[FRAME](https://substrate.dev/docs/en/knowledgebase/runtime/frame) (v2). This is what a Substrate
node consists of.

![assets/03-substrate-architecture.png](./assets/03-substrate-architecture.png)

Each node has many components that manage things like the transaction queue, communicating over a
P2P network, reaching consensus on the state of the blockchain, and the chain's actual runtime logic
(aka the blockchain runtime). Each aspect of the node is interesting in its own right, and the
runtime is particularly interesting because it contains the business logic (aka "state transition
function") that codifies the chain's functionality. The runtime contains a collection of 
[pallets](https://substrate.dev/docs/en/knowledgebase/runtime/pallets) that are configured to work together.

On the node level, Substrate leverages [libp2p](https://libp2p.io/) for the p2p networking layer and 
puts the transaction pool, consensus mechanism, and underlying data storage (a key-value database) on
the node level. These components all work "under the hood", and in this knowledge map we won't
cover them in detail except for mentioning their existence.

### Quiz #4

👉 **Complete [Quiz #4](quizzes/04-architecture.md)**

### Runtime development topics

In our [Developer Hub](https://substrate.dev/), we have a thorough coverage on various
subjects you need to know to develop with Substrate. So here we just list out the key topics and
reference back to Developer Hub. Please go through the following key concepts and the directed
resources to know the fundamentals of runtime development.

- [**Key Concept: Runtime**](https://substrate.dev/docs/en/knowledgebase/runtime/), this is where
  the blockchain state transition function (the blockchain application-specific logic) is defined.
  It is about composing multiple pallets (can be understood as Rust modules) together in the runtime
  and hooking them up together.

- [**Runtime Development: Execution**](https://substrate.dev/docs/en/knowledgebase/runtime/execution),
  this article describes how a block is produced, and how transactions are selected and executed
  to reach the next "stage" in the blockchain.

- [**Runtime Develpment: Pallets**](https://substrate.dev/docs/en/knowledgebase/runtime/pallets),
  this article describes what the basic structure of a Substrate pallet is consists of.

- [**Runtime Development: FRAME**](https://substrate.dev/docs/en/knowledgebase/runtime/frame),
  this article gives a high level overview of the system pallets Substrate already
  implements to help you quickly develop as a runtime engineer. Have a quick skim so you have a basic idea of the
  different pallets Substrate is made of.

### Lab #4

👉 **Complete [Lab #4: Adding a Pallet into a Runtime](labs/04-tutorial-add-a-pallet.md)**

- [**Runtime Development: Storage**](https://substrate.dev/docs/en/knowledgebase/runtime/storage),
  this article describes how data is stored on-chain and how you could access them.

- [**Runtime Development: Events**](https://substrate.dev/docs/en/knowledgebase/runtime/events) &
  [**Errors**](https://substrate.dev/docs/en/knowledgebase/runtime/errors), these two pages
  describe how external parties know what has happened in the blockchain, via the emitted events
  and errors when executing transactions.

> **Notes**: All of the above concepts we leverage on the `#[pallet::*]` macro to define them in the
> code. If you are interested to learn more about what other types of pallet macros exist
> go to [the FRAME macro API documentation](https://substrate.dev/rustdocs/latest/frame_support/attr.pallet.html)
> and
> [this doc on some frequently used Substrate macros](https://substrate.dev/docs/en/knowledgebase/runtime/macros).

### Lab #5

👉 **Complete [Lab #5: Building a Proof-of-Existence dApp](labs/05-poe.md)**

- [Writing Tests for Your Pallet](https://substrate.dev/docs/en/knowledgebase/runtime/tests):
  learn to build up a mock runtime and write test cases for your pallet logics.

### Lab #6

👉 **Complete [Lab #6: Building a Substrate Kitties dApp](labs/06-substrate-kitties.md)**

### Quiz #5

👉 **Complete [Quiz #5](quizzes/05-runtime-development.md)**

## Polkadot JS API

[Polkadot JS API](https://polkadot.js.org/docs/api/) is the javascript API for Substrate. By using it you can
build a javascript front end or utility and interact with any Substrate-based blockchain.

The [Substrate Front-end Template](https://github.com/substrate-developer-hub/substrate-front-end-template)
is an example of using Polkadot JS API in a React front-end (a
[hosted version here](https://substrate.dev/substrate-front-end-template/)).

- [Runtime Development: Metadata](https://substrate.dev/docs/en/knowledgebase/runtime/metadata),
  this article describes the API allowing external parties to query what API is
  open for the chain. Polkadot JS API makes use of a chain's metadata to know what queries and
  functions are available from a chain to call.

### Lab #7

👉 **Complete [Lab #7: Using Polkadot-JS API](labs/07-polkadot-js-api.md)**

### Quiz #6

👉 **Complete [Quiz #6: Using Polkadot-JS API](quizzes/06-polkadot-js-api.md)**

## Smart contracts

Learn about the difference between smart contract development vs Substrate runtime development, and
when to use each [here](https://substrate.dev/docs/en/knowledgebase/smart-contracts).

In Substrate, you can program smart contracts using [ink!](https://paritytech.github.io/ink-docs/).

- Learn about
  [smart contract development in Substrate](https://substrate.dev/docs/en/knowledgebase/smart-contracts/)
- Learn about
  [Smart contract development using ink!](https://substrate.dev/docs/en/knowledgebase/smart-contracts/contracts-pallet)

### Quiz #7

👉 **Complete [Quiz #7: Using ink!](quizzes/07-using-ink!.md)**

## What we do not cover

A lot 😄

- On-chain runtime upgrades. We have a tutorial on
  [On-chain (forkless) Runtime Upgrade](https://substrate.dev/docs/en/tutorials/forkless-upgrade/).
  This tutorial introduces how to perform and schedule a runtime upgrade as an on-chain
  transaction.

- About [transaction weight](https://substrate.dev/docs/en/knowledgebase/learn-substrate/weight),
  [fee](https://substrate.dev/docs/en/knowledgebase/runtime/fees), and
  [benchmarking your runtime to determine the proper transaction cost](https://substrate.dev/docs/en/knowledgebase/runtime/benchmarking).

- [Off-chain Features](https://substrate.dev/docs/en/knowledgebase/learn-substrate/off-chain-features)

  There are certain limits to on-chain logic. For instance, computation cannot be too
  intensive that it affects the block output time, and computation must be deterministic. This
  means that computation that relies on external data fetching cannot be done on-chain. In Substrate,
  developers can run these types of computation off-chain and have the result sent back on-chain via
  extrinsics. These following articles are practical guides to understanding these concepts:

  - [Recipes: Submit signed and unsigned transactions from off-chain workers back on-chain](https://substrate.dev/recipes/off-chain-workers/transactions.html)
  - [Recipes: Fetch external data using HTTP requests and parse JSON responses](https://substrate.dev/recipes/off-chain-workers/http-json.html)
  - [Recipes: Store result in off-chain worker local storage](https://substrate.dev/recipes/off-chain-workers/storage.html)

- [Tightly- and Loosely-coupled pallets](https://substrate.dev/recipes/pallet-coupling.html),
  calling one pallet's functions from another pallet via trait specification.

- [Blockchain Consensus Mechansim](https://wiki.polkadot.network/docs/en/learn-consensus), and a
  guide on customizing it to proof-of-work [here](https://substrate.dev/recipes/basic-pow.html).

- [Parachains](https://wiki.polkadot.network/docs/en/learn-parachains): one key feature of
  Substrate is the capability of becoming a parachain for relay chains like Polkadot. You can develop your own
  application-specific logic in your chain and rely on the validator community of the relay chain
  to secure your network, instead of building another validator community yourself. Learn more
  with the following resources:

  - [Cross-chain Message Passing (XCMP)](https://wiki.polkadot.network/docs/en/learn-crosschain),
    how parachain and relay-chain communicate to each others
  - [Workshop: Using cumulus to build your parachain](https://substrate.dev/cumulus-workshop)

## Terms clarification

- **Substrate**: the blockchain development **framework** built for writing highly customized, domain-specific
  blockchains.
- **Polkadot**: Polkadot is the relay chain blockchain, built with Substrate.
- **Kusama**: Kusama is Polkadot's canary network, used to launch
  features before these features are launched on Polkadot. You could view it as a beta-network
  with real economic value where the state of the blockchain is never reset.
- **Web 3.0**: is the decentralized internet ecosystem that, instead of apps being centrally
  stored in a few servers and managed by a sovereign party, it is an open, trustless, and
  permissionless network when apps are not controlled by a centralized entity.
- **Web3 Foundation**: A foundation setup to support the development of decentralized web software
  protocols. Learn more about what they do [on thier website](https://web3.foundation/about/).
