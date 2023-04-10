---
outline: deep
---

# Essential Concepts

## What's MTG?

MTG is the short name of "Mixin Trusted Group", which is a kind of framework based on Mixin Network's multi-signature feature. Basically, it is a custodian consensus solution.

It is a kind of decentralized autonomous organization (DAO) that can be used to manage funds, assets, and other resources.

In Pando, several teams will be selected and arranged as the "Trusted Group", becoming the "Nodes". Concensus has to be reached among the nodes to perform certain administrative actions. As a result, stable services, decentralized and asset safety are guaranteed.

Learn more about MTG [here](https://developers.mixin.one/docs/mainnet/mtg/overview).


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

We will adjust the price index to Pusd through 4swap.

### Price Delay Mechanism

In order to avoid the rapid decline in currency prices in a short period of time, which will lead to insufficient settlement of collateral, the currency prices confirmed by multi-signature nodes will not be immediately applied to Panduoye, there is a 30-minute delay.

