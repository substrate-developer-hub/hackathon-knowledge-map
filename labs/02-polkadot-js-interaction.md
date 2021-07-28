# Lab 2 - Using Polkadot-JS Apps

## Overview

You will use Polkadot-JS App to interact with your running Substrate Node Template.

## Task

Run the Substrate Node Template locally, and then goto [Polkadot-JS Apps](https://polkadot.js.org/apps) and connect to your local node. Perform the following operations, and submit the relevant answers / screenshots.

## Submission Instructions

1. Send some tokens from Alice to Bob

   _Submission_: A screenshot of Polkadot-JS that Alice has a different balance then Bob, with successful event shown in Polkadot-JS Apps. Save it in `/your-lab-ans/02` with an indicative name.

2. Inspect the chain state of the Template pallet, in **Developer** > **Chain State**. Then choose the `TemplateModule` in module dropdown, and inspect the storage **Something**.

   _Submission_: A screenshot showing the current storage value of **Something**. Save it in `/your-lab-ans/02` with an indicative name.

3. Send a transaction (aka extrinsic) of `do_something`. In **Developer** > **Extrinsics**,

   - Set the module to `TemplateModule`, and choose extrinsic `do_something` on the next dropdown.
   - Set a number of `10` in the input.
   - Click `Sign and Submit`

   You should see the transaction submitted. Now, go back and inspect the storage value of **Something**

   _Submission_: A screenshot showing the current storage value of **Something**. Save it in `/your-lab-ans/02` with an indicative name.
