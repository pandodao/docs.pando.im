---
outline: deep
---

# Essential Concepts

## What's MTG?

MTG is the short name of "Mixin Trusted Group", which is a kind of framework based on Mixin Network's multi-signature feature. Basically, it is a custodian consensus solution.

It is a kind of decentralized autonomous organization (DAO) that can be used to manage funds, assets, and other resources.

In Pando, several teams will be selected and arranged as the "Trusted Group", becoming the "Nodes". Concensus has to be reached among the nodes to perform certain administrative actions. As a result, stable services, decentralized and asset safety are guaranteed.

Learn more about MTG [here](https://developers.mixin.one/docs/mainnet/mtg/overview).

### Pando's MTG Members

Pando is built with Mixin Trusted Group, which is a multisig-based framework powered by Mixin Network. At present, the servicing genesis nodes are as follows.

- [Pando Dev](https://pando.im): The core development team of Pando.
- [Mixin](https://mixin.one): The Mixin Network team. The core develop team of Mixin Network
- [Big.ONE](https://big.one): A trading platform provides users with the secure and trusteeship services
- [BOX Group](https://b.watch): BOX investment community
- Exin: A famous trading platform in Mixin Ecosystem
- Cedric Fung: One major sponsor of Pando, individual investor and developer
- [Rum System](https://rumsystem.net/): A P2P application infrastructure to offer the internet alternatives

## Price Oracles

The Oracle price for each trading pair is used for the following:

- Ensuring that each account is well-collateralized after each trade
- Determining when an account should be liquidated

oracle prices will not take effect until it is confirmed by more than 4 of the 6 nodes.

- At present, it is a 4/6 multi-signature.
- If there is any adjustment, the document will be updated.

### Index Prices

The index price for each trading pair is used for the following:

- Calculating the funding rate
- Trigger "liquidation" and enter the auction

index prices are equal to the median of several exchanges' spot prices.

Each exchange's spot price is calculated as the median of the best-ask, best-bid, and last-traded prices of its spot pair.

We will update the price index according to the pUSD price in Pando.

### Price Delay Mechanism

In order to avoid the rapid decline in currency prices in a short period of time, which will lead to insufficient settlement of collateral, the currency prices confirmed by multi-signature nodes will not be immediately applied to Panduoye, there is a 30-minute delay.

### Deposit and Bridge

Pando Proto is build on Mixin Network (https://mixin.network), so you need to deposit crypto assets to Mixin Network first before you can use Pando Proto.

There are 2 major ways to deposit crypto assets to Mixin Network:

1. Using built-in deposit feature: after connecting your wallet to Pando Proto, you can tap "Deposit" button to deposit crypto assets to Mixin Network by a 3rd-party service called MixPay. It may cost you some fees and need some time to complete the deposit.
2. Using MVM bridge: if you connect wallet with WalletConnect, you can use MVM bridge to deposit crypto assets to Mixin Network from ETH, BSC, HECO, OKExChain, Polygon, etc. Please visit https://bridge.mvm.app/ to access the bridge.
3. Transfer assets to Mixin Messenger/Fennec: if you have Mixin Messenger or Fennec, you can transfer assets from any address to your wallet address in Mixin Messenger/Fennec, then you can use the assets in Mixin Messenger/Fennec.

### Gas Fee

By default, you don't need gas fee by using Pando Proto. However, there are some senarios that may require gas fee:

1. For some operations on Pando Leaf and Rings, it will cost you 0.00000001 ETH to invoke the transaction action. It could be considered as gas fee charged by Pando Proto.
2. For the users who connect their wallet with WalletConnect and MetaMask, it will cost some ETH as the gas fees to all operations on Pando Proto. The gas fee is charged by the MVM (https://mvm.app), not Pando Proto. For realtime gas fee, please refer to the MVM block explorer: https://scan.mvm.dev/

