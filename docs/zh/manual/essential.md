---
outline: deep
---

# 基本概念

## 什么是 MTG？

MTG是“Mixin Trusted Group”的简称，是一种基于Mixin Network多重签名特性的框架。基本上，它是一种托管人共识解决方案。

它是一种去中心化的自治组织（DAO），可用于管理资金、资产和其他资源。

在 Pando 中，会选出几支队伍作为“Trusted Group”，成为“Nodes”。 必须在节点之间达成共识才能执行某些管理操作。 从而保证服务稳定、去中心化和资产安全。

在 [此处](https://developers.mixin.one/docs/mainnet/mtg/overview) 了解有关 MTG 的更多信息。

## 价格预言机

每个交易对的预言机价格用于以下目的：

- 确保每个账户在每次交易后都有足够的抵押品
- 确定何时应清算账户

预言机价格只有在经过 4 个以上的 6 个节点确认后才会生效。

- 目前为 4/6 多重签名。
- 如果有任何调整，将更新文档。

### 指数价格

每个交易对的指数价格用于以下目的：

- 计算资金费率
- 触发“清算”并进入拍卖

指数价格等于几个交易所现货价格的中位数。

每个交易所的现货价格是其现货交易对的最佳卖出、最佳买入和最后交易价格的中位数。

我们将以 Pando 中 pUSD 的价格为基准，更新价格指数。

### 价格延迟机制

为避免货币价格在短时间内快速下跌，从而导致抵押品结算不足，经过多重签名节点确认的货币价格不会立即应用于 Panduoye，而会有 30 分钟的延迟。


### 充值与跨链桥

Pando Proto 建立在 Mixin Network（https://mixin.network）之上，因此您需要先将加密资产存入 Mixin Network，然后才能使用 Pando Proto。

将加密资产存入 Mixin Network 主要有三种方式：

1. 使用内置充值功能：将钱包连接到 Pando Proto 后，您可以点击“充值”按钮，通过第三方服务 MixPay 将加密资产充值到 Mixin Network。 这可能会花费您一些费用，并且需要一些时间来完成存款。
2. 使用 MVM 跨链桥：如果您使用 WalletConnect 连接钱包，您可以使用 MVM 跨链桥将加密资产从 ETH、BSC、HECO、OKExChain、Polygon 等存入 Mixin Network。请访问 https://bridge.mvm.app/ 访问跨链桥。
3. 将资产转入 Mixin Messenger/Fennec：如果您有 Mixin Messenger 或 Fennec，您可以将资产从任意地址转入您在 Mixin Messenger/Fennec 的钱包地址，即可使用 Mixin Messenger/Fennec 中的资产在 Pando 上进行操作。

### Gas 费

默认情况下，使用 Pando Proto 不需要 gas 费。 但是，有一些场景可能需要 gas fee：

1. Pando Leaf 和 Rings 上的部分操作，调用动作需要花费 0.00000001 ETH。虽然数量很少，但它可以被认为是 Pando Proto 收取的 gas 费。
2. 对于将钱包连接到WalletConnect和MetaMask的用户，Pando Proto上 的所有操作都会产生一定的 gas 费用。 gas 费用由 MVM（https://mvm.app）收取，而非 Pando Proto。具体的值请参考 MVM 区块浏览器： https://scan.mvm.dev/