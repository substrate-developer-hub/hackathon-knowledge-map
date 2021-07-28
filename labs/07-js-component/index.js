const { ApiPromise, WsProvider, Keyring } = require("@polkadot/api");

// Substrate connection config
const WEB_SOCKET = "ws://localhost:9944";

// This script will wait for n secs before stopping itself
const LASTING_SECS = 30;

const ALICE = "//Alice";
const BOB = "//Bob";

// This is 1 Unit
const TX_AMT = 1000000000000000;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const connectSubstrate = async () => {
  const wsProvider = new WsProvider(WEB_SOCKET);

  // TODO: Modify the RHS of the assignment to create the API provider
  const api = null;

  return api;
};

const submitTx = async (api, src, dest, amt) => {
  // TODO #5: Implement this function to transfer `amt` from `src` account to `dest` account,
  //   returning the transaction unsubcription handler.
};

const main = async () => {
  const api = await connectSubstrate();
  const keyring = new Keyring({ type: "sr25519" });
  console.log("Connected to Substrate");

  const alice = keyring.addFromUri(ALICE);

  // TODO #1: Modify the RHS of the assignment to get BOB key-pair, similar to the above.
  const bob = null;

  // TODO #2: Modify the RHS of the assignment to get the existential deposit of `pallet-balances`.
  const existentialDeposit = null;

  console.log(`Balance existentialDeposit: ${existentialDeposit}`);

  // TODO #3: Modify the RHS of the assignment to get Alice account data
  const aliceAccount = null;

  console.log(`Alice Account: ${aliceAccount}`);

  // TODO #4: From the `aliceAccount`, get the free balance of Alice, and display it in human readable form.
  const aliceFreeBalance = null;

  console.log(`Alice free balance in readable format: ${aliceFreeBalance}`);

  // TODO #5: Implement the function body above
  submitTx(api, alice, bob, TX_AMT);

  // TODO #6: Get the chain RPC metadata
  const metadata = null;

  // `metadata` is a big JSON blob, so the following log is commented out. Uncomment to see the
  //   actual chain metadata.
  // console.log(`Chain Metadata: ${JSON.stringify(metadata, null, 2)}`);

  await sleep(LASTING_SECS * 1000);
};

main()
  .then(() => {
    console.log("successfully exited");
    process.exit(0);
  })
  .catch((err) => {
    console.log("error occur:", err);
    process.exit(1);
  });
