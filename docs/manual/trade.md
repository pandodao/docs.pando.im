---
outline: deep
---

# Trade

## Automated Market Maker (AMM)

An automated market maker (short for "AMM") is a system that provides liquidity to the exchange it operates in through automated trading.

AMM systems took off after they were first implemented by Shearson Lehman Brothers and ATD in the early 1990s — before their invention, order books were created by humans who manually initiated trades meant to enhance the liquidity of the market.

This approach was the reason for some slippage and latency in price discovery on the markets. Furthermore, market makers were also accused of market manipulation. When introduced, AMMs solved all the issues caused by human market makers. Now, these types of systems are also being introduced in blockchain-based decentralized exchanges.

On AMM-based decentralized exchanges, the traditional order book is replaced by liquidity pools that are pre-funded on-chain for both assets of the trading pair. The liquidity is provided by other users who also earn passive income on their deposit through trading fees based on the percentage of the liquidity pool that they provide.

Pando Proto uses AMM to provide swap service to users.

To learn more about AMM, check out [What Is an Automated Market Maker](https://coinmarketcap.com/alexandria/glossary/automated-market-maker-amm)

## Slippage Tolerance

slippage tolerance is a parameter that controls the tolerance of the transaction amount.

The greater the slippage tolerance, the higher the tolerance for the expected difference in the transaction, and the success rate of the transaction will increase, but it may also result in greater losses. 

The smaller the slippage, the lower the tolerance for the expected difference of the transaction, the lower the transaction success rate, but each order will be more in line with the estimated situation you see on the web page. 

The default value of slippage tolerance is 0.1%. You can set the slippage tolerance to any value between 0% and 100%.

When the actual transaction differs from the estimated transaction amount more than slippage tolerance, Pando will reject the transaction and refund.

## Swap

By default, Pando Proto's Web page calculates the best route for current transaction, and then generates the transaction. User signs the transaction and send it to Pando Proto, Pando Proto will execute the transaction sequentially and return the result to the user. If the transaction fails, Pando Proto will refund to the user.

### Swap Fee

Swap fee is the fee charged for each transaction. The swap fee is 0.3% by default for most of liquidity pools. For curve liquidity pools, the swap fee is 0.04%. At present, the curve liquidity pools are pUSD-USDT(ERC-20), pUSD-USDT(TRC-20), pUSD-USDC, pUSD-DAI, and BTC-wBTC.

The swap fee is charged to the token you are swapping out.

## Limit Order

Pando Proto's limit order protocol executer is a full unattended process that will monitor the market and execute the order.

The executer will check the market in intervals, scan the pending orders from the first to the last, fetch the current market price, and execute the order if the market price reaches the order price.

Limit order is useful when you want to trade at a specific price. For example, if you want to buy some BTC at a lower price, you can set the price lower than the current market price. If the market price reaches the price you set, the order will be filled.

### Order Expiry

User can set the order expiry from 1 day, 7 days and 30 days. The default order expiry is 30 days. If the order is not executed within the expiry, it will be automatically cancelled and refunded.

### Order Fee

Currently, limit order protocol does not charge any additional fee for limit orders. But the swap fee will be charged by the swap protocol.

## Liquidity Mining Pool

Pando Proto's swap service is powered by Uniswap v2 and Curve algorithms. It requires liquidity providers to provide liquidity to the liquidity pool. The liquidity providers will receive liquidity provider tokens (LP tokens) in return as a certificate of their contribution to the liquidity pool and earn swap fees. It called liquidity mining.

### Impermanent Loss

Adding liquidity is not without risk, as you may be exposed to impermanent loss.

Impermanent loss is a term used to describe the loss that liquidity providers may experience when they deposit their funds into a liquidity pool. This occurs when the price of the two assets in the pool changes relative to each other.

You may want to read [this post](https://blog.bancor.network/beginners-guide-to-getting-rekt-by-impermanent-loss-7c9510cb2f22) to learn more about impermanent loss.

### Liquidity Provider Token (LP Token)

Liquidity Provider Token (short for "LP token"() refers to the liquidity that is provided by liquidity providers (LPs) who deposit their funds into a liquidity pool in exchange for LP tokens.

LP tokens are used to track individual contributions to the overall liquidity pool, as LP tokens held correspond proportionally to the share of liquidity in the overall pool.

At the most basic level, LP tokens work on the following formula:

`Total Value of Liquidity Pool / Circulating Supply of LP Tokens = Value of 1 LP Token`

Just like other assets, the LP tokens can be transerred and traded.

Whenever a swapping occurs, swap fees is charged to the transaction sender. This fee is distributed pro-rata to all LPs in the pool upon completion of the trade.

To retrieve the underlying liquidity, plus any fees accrued, liquidity providers can remove liquidity, give back their liquidity tokens. This will allow them to exchange LP tokens for their portion of the liquidity pool, plus the proportional fee allocation. 

## Token Tags

At Pando, we want to assist you in safely exploring and discovering assets, and making informed decisions regarding them. This is why we've implemented Token Tags.

When swapping or navigating Pando Proto, you may come across red or yellow warnings, which are determined by the Token Tags. These warnings are designed to notify you of the potentially increased risk associated with trading these tokens.

How are token safety tags determined?

1. Proto Default Tag: **No Warning**. Any token that has been listed by at least one US-based exchange. In very rare cases, a token separately reviewed and approved by Pando MTG members.
2. Proto Extended Tag: **Caution**. Any token that is frequently swapped on Pando Proto and has satisfied the quantitative criteria. We plan to update these criteria over time.
3. Not with two above tags: **Warning**. Any token that not satisfied the quantitative criteria.
4. Blacklisted: The token is blacklisted by Pando Proto and cannot be swapped.

### Token Visibility

For the tokens that are labeled as "Default" or "Extended", they are visible in all senarios: search, swap, and liquidity mining pool list.

For the tokens that are not labeled as "Default" or "Extended", they are only visible at the swap page. 

### Token Tags Criteria

The following criteria are used to determine the "Extended" tag:

1. The token has been listed on Coinmarketcap for at least 180 days, and in the top 200 by market cap.
2. The token has good liquidity routes to pUSD. The routes from pUSD to the token should have good liquidity with low price impact.

Any token that satisfies any of the above criteria will be labeled as "Extended".

### Additional Disclosure

Token Tags are created using information from third-party data providers. Pando MTG members does not guarantee their accuracy and makes no representations or warranties about their relevance or currentness. Data frequently is not available for selected tokens, particularly newer or less popular tokens, and no tokens are reviewed for their quality, merits, or soundness as investments.

Our Token Tags and Token Warnings are not investment advice and should not be construed as such. They do not purport to be exhaustive as to all potential risks; always conduct your own research about tokens before buying or selling them. All information is provided for informational purposes only and is not a recommendation of any investment strategy, nor is it a solicitation to buy or sell any investment. You should not buy or sell any asset without first determining if it is appropriate for your portfolio or investment strategy. All investments involve risks, including the potential loss of principal.

