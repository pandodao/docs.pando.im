# FAQ

## Where can I see liquidity mining earnings?

The liquidity mining earnings are shown in the "Earn" page.

If you've provided liquidity to a pool, please go to the "Earn" page to see your earnings.

## How to get the earnings out?

The earnings are in the form of LP tokens. You can remove liquidity to get the underlying assets. 

If you get profits from the underlying assets, you can sell them to get PND.

## How are prices determined?

Every transaction on Pando's trade function will have an impact on the price.

If the total amount of the liquidity pool is large, the transaction amount is negligible relative to the depth of the liquidity pool, and this transaction will have a very low price impact, which called slippage.

When the impact reaches a certain level, the price on 4swap is different from the prices on other exchanges, which will form an arbitrage space. There are many automatic arbitrage robots working hard all the time to ensure consistent prices.

::: warning
It is important to pay attention to the size of the transaction amount relative to the total amount of liquidity. If the transaction amount is too high relative to the total amount of the liquidity pool, the transaction price will seriously deviate from the market price, resulting in greater losses.
:::

## Which tokens are supported?

In theory, Pando supports all the cryptocurrencies supported by Mixin Network, but there are some restrictions on different protocols.

1. 4swap supports all the cryptocurrencies supported by Mixin Network. For the cryptocurrencies that are not listed on 4swap, you can create new pool by yourself to add them at https://governance.pando.im
2. Leaf only supports cryptocurrencies that has high reputation and good liquidity as pledge assets. 
3. Rings currently doesn't accept any new currencies.

## Will there be any loss of my supplied assets in Rings?

If you don't have any loans, generally, the answer is NO. You gain interest of the assets you supplied and there is no fee you need to pay.

In the very extreme situation though, as assets available to borrow on the market all come from users' supply, if there are bad debts (meaning a loan that is not likely to be paid), there is a chance that you cannot get back the full amount of your supplied assets. However, it is unlikely to happen in Pando Rings as liquidation is monitored real-time by liquidating bots (algorithms to execute liquidation) to avoid bad debts from happening.

If you do have loans, when the value of your borrowed assets has exceeded your borrow limit, you will enter liquidation, losing part or all of your collateral (ie. pledged assets). Of your total supplied assets, the pledged assets are subject to liquidation while your unpledged assets will stay intact.

It is important tht you pay close attention to the loan risk indicator to monitor your loan risk, and keep your collateral safe from liquidation.

## Will there be any loss of my pledged assets in Leaf?

It's possible. If your vault breaches the minimum required collateralization ratio, it will be liquidated and the collateral will be on auction, and your pledged assets will be sold to repay the loan.

## What's MTG?

MTG is the short name of "Mixin Trusted Group", which is a kind of framework based on Mixin Network's multi-signature feature. Basically, it is a custodian consensus solution.

It is a kind of decentralized autonomous organization (DAO) that can be used to manage funds, assets, and other resources.

In Pando, several teams will be selected and arranged as the "Trusted Group", becoming the "Nodes". Concensus has to be reached among the nodes to perform certain administrative actions. As a result, stable services, decentralized and asset safety are guaranteed.

Learn more about MTG [here](https://developers.mixin.one/docs/mainnet/mtg/overview).



