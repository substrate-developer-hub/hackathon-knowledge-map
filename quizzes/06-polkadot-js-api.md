# Quiz 6: Polkadot JS API

## Overview

This quiz covers the following parts of the Substrate Knowledge Map:
- [Polkadot JS API](../../knowledge-map#polkadot-js-api)

# Questions

### 1. Polkadot-JS App 和 Polkadot-JS API 的区别是什么? (把适用的全钩上)

  ```
  [ ] 名字上一看就有不同，一个尾缀是 App,一个尾缀是 API，你瞎了吗？
  [ ] Polkadot-JS App 提供了官方的 JS 库连去 Substrate 网络，而 Polkadot-JS API 则是官方的前端与 Substrate 网络 交互。
  [ ] Polkadot-JS App 是官方的前端与 Substrate 网络交互，而 Polkadot-JS API 则提供了官方的 JS 库连去 Substrate 网络。
  [ ] Polkadot-JS App 是官方的 Polkadot 钱包，而 Polkadot-JS API 则提供了官方的 JS 库连去 Substrate 网络。
  [ ] Polkadot-JS App 是官方的 Polkadot 钱包，而 Polkadot-JS API 则提供了官方的 JS 库连去现在主流的区块链网络 (Substrate，以太坊，比特币特)。
  ```

### 2. 你可以在 Polkadot-JS App 内做什么操作? (把适用的全勾上)

  ```
  [ ] 查看 Substrate 网络 区块信息
  [ ] 对 Substrate 网络作出交易 (Extrinsics)
  [ ] 有一个 javascript 编辑器，可对 Substrate 网络写出基础 javascript 与之互动
  [ ] 是 Substrate 的水笼头 (faucet), 可取得小额 Substrate 的代币
  [ ] 可以对一个信息以某个帐号作签名
  ```

### 3. 如果在 Substrate 端加了自定义类型，我们在 Polkadot-JS App 里需要作什么才能支持连到这个 Substrate 节点？

  ```
  [ ] 在 Setting 里, Metadata tab 里，加自定义的 JSON 对象。
  [ ] 在 Setting 里, Developer tab 里，加自定义的 XML 对象。
  [ ] 在 Setting 里, Developer tab 里，加自定义的 JSON 对象。
  [ ] 在 Toolbox 里, Sign message tab 里，先发一个签了名的信息作核实。
  [ ] 在 Toolbox 里, Verify signature tab 里，先发一个签了名的信息作核实。
  ```

### 4. 在 Polkadot-JS API 里，数字默认是用哪个类型代表？

  ```
  [ ] JS 里默认的数字类型
  [ ] 字付串
  [ ] [bn.js](https://github.com/indutny/bn.js/)
  [ ] [bignumber.js](https://github.com/MikeMcl/bignumber.js/)
  [ ] [decimal.js](https://github.com/MikeMcl/decimal.js/)
  ```

### 5. 我要查询 Substrate 链上的存储变量,并订阅它的变更，应该用以下哪个方法？

  ```
  [ ] `const val = await api.query.my_pallet.storage`
  [ ] `const unsub = await api.query.my_pallet.storage(value => {...})`
  [ ] `const val = await api.consts.my_pallet.const`
  [ ] `const val = await api.tx.my_pallet.tx().signAndSend()`
  [ ] `const val = await api.tx.my_pallet.tx().signAndSend(value => {...})`
  ```

### 6. 我要对 Substrate 链上发出一次交易，但 **不需要** 订阅交易处理状态，应该用以下哪个方法？

  ```
  [ ] `const val = await api.query.my_pallet.storage`
  [ ] `const unsub = await api.query.my_pallet.storage(value => {...})`
  [ ] `const val = await api.consts.my_pallet.const`
  [ ] `const val = await api.tx.my_pallet.tx().signAndSend()`
  [ ] `const val = await api.tx.my_pallet.tx().signAndSend(value => {...})`
  ```
