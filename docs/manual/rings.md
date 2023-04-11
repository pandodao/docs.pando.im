# Pando Rings

Pando Rings is an algorithmic, autonomous interest rate protocol built with Mixin Trusted Group. It is a place where you can lend or borrow cryptocurrencies. You can think of it as an open market for cryptocurrency. It lets users deposit cryptocurrencies and earn interest, or borrow other cryptoassets against them.

The interest rates for supplying and borrowing are adjusted algorithmically based on supply and demand.

## How does Pando Rings work?

Supplied assets in Pando Rings are tracked in tokens called rTokens, Pando Rings' native tokens. rTokens are ERC-20 tokens that represent claims to a portion of an asset pool in Pando Rings.

For example, if you deposit BTC into Pando Rings, it is converted to rBTC. If you deposit ETH, it will be converted to rETH. rTokens are available in the connected wallet for further transactional purposes.

As the money market earns interest (borrowing increases), rTokens earn interest and become convertible to more of the underlying assets. If you deposit multiple coins, they'll each earn interest based on their individual rToken interest rates. You earn interest on Pando Rings by holding the rTokens.

Lending in Pando Rings is straightforward. After selecting the asset you wish to supply liquidity for and signing the transaction through your wallet, you instantly add the asset to the pool and start earning interest in real-time. At the same time, the assets are converted to rTokens.

Borrowing is a bit more complicated. To borrow, supplying is not enough - you have to make sure that you also have pledged, locking your rTokens into the system as collateral to earn the Borrowing Power (Borrow Balance). Every asset that is available for supply will add a different amount of borrowing power based on its collateral factor. Users can then borrow according to the Total Borrowing Power (Borrow Limit) they have.

Similar to many other DeFi projects, Pando Rings works with the concept of overcollateralization. This means that borrowers have to supply more value than they wish to borrow to avoid liquidation.

## The status of Pando Rings

Pando Rings is currently in the stalled state. The project is not under active development. The status of Rings is as follows:

- Temporarily disable "pledge" feature for all pools except BTC, ETH, EOS.
- Temporarily disable "supply" feature for all pools except BTC, ETH, EOS, USDT, USDC, PUSD.
- Temporarily disable "borrow" feature for all pools except USDT, USDC, PUSD.

## The future of Pando Rings

We have a plan to upgrade the Rings protocol at a later date. 

Compared with the old version, the new lending protocol will isolate different lending pools, which will be especially effective against potential attacks on price oracles and thus greatly improve security as a result. For functionalities, the new protocol will support more cryptocurrencies to satisfy diversified needs

