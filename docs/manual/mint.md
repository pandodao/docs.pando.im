---
outline: deep
---

# Mint and pUSD

Pando Proto has a protocol called "Leaf", which is a decentralized financial network built with the Mixin MTG (Mixin Trusted Group) technology, a place where you can deposit collateral to generate and destory Pando USD(pUSD) and destroy it when repaying the minted pUSD balance.

## How does Pando Leaf work?

Depositing pledged assets and repaying the minted pUSD balance both happen in a vault.

- Vaults are not free. Generating the stablecoin requires the payment of stability fee. To reclaim pledged assets, users must repay the previously minted stablecoin and the accumulated stability fee.
- Vaults are required to be overcollateralized. Vault owners should uphold the liquidation price/liquidation ratio (which is the minimum collateralization ratio) to avoid the liquidation of their positions.

When a vault is liquidated, a liquidation penalty is applied and collateral is sold to repay the vault’s outstanding stablecoin balance.

## Pando USD (pUSD)

Pando USD (short for "pUSD") is a stablecoin that is pegged to the US dollar. It is a decentralized stablecoin that is minted and destroyed by the Pando Leaf protocol.

The total supply of pUSD is 1,000,000,000,000, of which 999,975,000,000 are locked in a 5/6 Mixin Trusted Group which are managed by BigONE, Exin, FOX, Rum System and Team Mixin. The remaining 25,000,000 is releasable to the public at Pando Leaf, which is a 4/6 Mixin Trusted Group.

pUSD is an [ERC20 token](https://etherscan.io/address/0xdbaef6da45984a9329c2640d19dcb9f62dc2ab66), and has been transfered to Mixin Network since [Dec 23th 2020](https://etherscan.io/tx/0xccd66572e85d66cc05d50e2a16be0eb2348e34cedd34df89113e4b515caaf210). So you can store pUSD in any Mixin Network compatible wallet or Ethereum-compatible wallet.

### Where can I get pUSD?

There are several way to get pUSD. 

For minting pUSD, you can visit Pando Leaf (ID: 7000103924, URL: https://leaf.pando.im) to mint pUSD by pledging collaterals.

For trading pUSD, you can use Pando (ID: 7000105018, URL: https://app.pando.im) to swap for pUSD with other cryptocurrency. Exin Team's bot "Mixswap (ID: 7000103767)" also support to swap for pUSD.

If you prefer to buy pUSD with fiat, you can try "Tiga (ID: 7000104206)" to buy pUSD with USD, CNY or other fiat currencies.

## Supported Collaterals

The collateral is the pledged asset that is used to mint pUSD. The collateral is locked in the vault and can be reclaimed when the vault owner repays the minted pUSD balance.

At present, Pando supports to use following assets as collateral to mint pUSD:

1. BTC. Min collateral rate: 150%.
2. ETH. Min collateral rate: 150%.
3. EOS. Min collateral rate: 200%.
4. DOGE. Min collateral rate: 200%.
5. BCH. Min collateral rate: 200%.
6. FIL. Min collateral rate: 200%.
7. ZEC. Min collateral rate: 200%.
8. DOT. Min collateral rate: 200%.
9. UNI. Min collateral rate: 200%.

Some assets are supported as collaterals, but not yet available for minting new pUSD:

1. XIN. Min collateral rate: 200%.
2. sETH-BTC. Min collateral rate: 150%.
3. LTC. Min collateral rate: 200%.
3. MOB. Min collateral rate: 200%.

The information above is subject to change. Please refer to the latest information on the Pando Leaf website: https://leaf.pando.im

## Vaults

A Vault is where the vault owner deposit pledged asset and minted stable cyptocurrency pUSD. 

### Vault Types

Vaults are categorized by the type of collateral used to minted pUSD. Users create pUSD by generating it against their collateral and destroy pUSD when repaying their minted pUSD balance.

### Collateralization

Vaults are required to be overcollateralized and have a Liquidation Ratio that Vault owners need to uphold to avoid the Liquidation of their positions.

### Debt Ceiling

The vault-specific debt ceiling is the maximum amount of pUSD that can be minted of each Vault type. The clobal debt ceiling limits the amount of pUSD that can be minted across the entire system.

### Stability Fees

The stability fee rate is also known as Leaf's interests rate.

The stability fee is a variable-rate fee continuously added to a vault owner's minted pUSD balance. It can be understood as the interests you pay for the loan (minted pUSD).

The stability rate is voted by Pando Leaf's MTG members based on the external market environment. Every month, MTG members will evaluate the external market environment and vote to determine the stability rate according to the market environment. The latest stability rate can be checked on [Pando Leaf](https://leaf.pando.im).

## Leaf Liquidation

If the value of a vault’s collateral falls below the vault’s Liquidation Price, the vault becomes vulnerable to liquidation. When a vault is liquidated, a liquidation penalty is applied and collateral is sold to repay the vault’s outstanding stablecoin balance.

The whole process of liquidation is automatic and decentralized. The liquidation process is as follows:

1. The liquidated vaults are put into the auction queue.
2. The auction program will sell the collateral of the vault to repay the stablecoin debt.
3. Users can bid for the collateral of the vault in the auction page.
4. If the auctions are completed in Phase 2, there may remain some collateral after the auction. The remaining collateral will be returned to the vault owner.
5. If the auctions are not completed in Phase 2, there will be no remaining collateral after the auction. The vault owner will lose all the collateral.

### Leaf Liquidation Ratio

The Liquidation Ratio is the minimum required collateralization level for each vault type before it is considered undercollateralized and subject to liquidation.

Each vault type’s Liquidation Ratio is determined by a combination of the collateral’s risk profile and the Stability Fee. There may be multiple vault types for each collateral, with varying Liquidation Ratios and Stability Fees.

```
Liquidation Ratio = (Collateral Amount x Collateral Price) ÷ Minted pUSD × 100
```

### Liquidation Price

The liquidation rrice is the price at which a vault becomes vulnerable to liquidation.

vault owners can lower their liquidation price by adding more collateral or returning pUSD to the vault.

```
Liquidation Price = (Generated pUSD * Liquidation Ratio) / (Amount of Collateral)
```

### Liquidation Penalty

A liquidation penalty is a fee paid by vault owners when the value of their collateral reaches the vault's Liquidation Price.

The Liquidation Penalty is added to the vault’s total outstanding generated pUSD when liquidation occurs, which results in more collateral being sold at auction.

### Leaf Auction Process

When a vault breaches the minimum required collateralization ratio, it will be liquidated and the pledged assets will be on auction. Anyone can participate in the auction. The ongoing auction can be found in the "Ongoing" section on the "Auctions" page.

There are TWO phases of the auction.

For Phase 1, participants bid at an increment of not less than 3% of the previous bidding amount to cover the highest amount of the outstanding debt. If within the limit of 12 hours, no one is willing to cover the total debt, the auction is over and the bidder who is willing to cover the highest amount of the debt will take all of the pledged assets home. Or if there is someone who bids to cover the total debt, then the auction will move to the second phase.

For Phase 2, participants bid at a decrement of no less than 3% of the previous bidding amount on accepting the smallest part of the pledged asset for the payment of the total debt. The winner will need to pay off all the debt in exchange for the smallest amount of the pledged asset that (s)he subtmits the bid for.
