# Trade

## Slippage Tolerance

slippage tolerance is a parameter that controls the tolerance of the transaction amount.

The greater the slippage tolerance, the higher the tolerance for the expected difference in the transaction, and the success rate of the transaction will increase, but it may also result in greater losses. 

The smaller the slippage, the lower the tolerance for the expected difference of the transaction, the lower the transaction success rate, but each order will be more in line with the estimated situation you see on the web page. 

The default value of slippage tolerance is 0.1%. You can set the slippage tolerance to any value between 0% and 100%.

When the actual transaction differs from the estimated transaction amount more than slippage tolerance, Pando will reject the transaction and refund.

## Swap Fee

Swap fee is the fee charged for each transaction. The swap fee is 0.3% by default for most of liquidity pools. For curve liquidity pools, the swap fee is 0.04%. At present, the curve liquidity pools are pUSD-USDT(ERC-20), pUSD-USDT(TRC-20), pUSD-USDC, pUSD-DAI, and BTC-wBTC.

The swap fee is charged to the token you are swapping out.

## Impermanent Loss

Adding liquidity is not without risk, as you may be exposed to impermanent loss.

Impermanent loss is a term used to describe the loss that liquidity providers may experience when they deposit their funds into a liquidity pool. This occurs when the price of the two assets in the pool changes relative to each other.

You may want to read [this post](https://blog.bancor.network/beginners-guide-to-getting-rekt-by-impermanent-loss-7c9510cb2f22) to learn more about impermanent loss.

## Liquidity Provider Token (LP Token)

Liquidity Provider Token (short for "LP token"() refers to the liquidity that is provided by liquidity providers (LPs) who deposit their funds into a liquidity pool in exchange for LP tokens.

LP tokens are used to track individual contributions to the overall liquidity pool, as LP tokens held correspond proportionally to the share of liquidity in the overall pool.

At the most basic level, LP tokens work on the following formula:

`Total Value of Liquidity Pool / Circulating Supply of LP Tokens = Value of 1 LP Token`

Just like other assets, the LP tokens can be transerred and traded.

Whenever a swapping occurs, swap fees is charged to the transaction sender. This fee is distributed pro-rata to all LPs in the pool upon completion of the trade.

To retrieve the underlying liquidity, plus any fees accrued, liquidity providers can remove liquidity, "burning" their liquidity tokens. This will allow them to exchange LP tokens for their portion of the liquidity pool, plus the proportional fee allocation. The yield will not be distributed while the user is still holding the LP tokens.

## Automated Market Maker (AMM)

An automated market maker (short for "AMM") is a system that provides liquidity to the exchange it operates in through automated trading.

AMM systems took off after they were first implemented by Shearson Lehman Brothers and ATD in the early 1990s — before their invention, order books were created by humans who manually initiated trades meant to enhance the liquidity of the market.

This approach was the reason for some slippage and latency in price discovery on the markets. Furthermore, market makers were also accused of market manipulation. When introduced, AMMs solved all the issues caused by human market makers. Now, these types of systems are also being introduced in blockchain-based decentralized exchanges.

On AMM-based decentralized exchanges, the traditional order book is replaced by liquidity pools that are pre-funded on-chain for both assets of the trading pair. The liquidity is provided by other users who also earn passive income on their deposit through trading fees based on the percentage of the liquidity pool that they provide.

One decentralized exchange that has implemented an AMM is Uniswap. Uniswap is an Ethereum-based decentralized exchange which allows its users to both supply liquidity to earn passive income or exchange between various assets.

To learn more about AMM, check out [What Is an Automated Market Maker](https://coinmarketcap.com/alexandria/glossary/automated-market-maker-amm)

