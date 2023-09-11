# Trouble shooting

## Mixin server encounters errors

If you're using Mixin Messenger, you may encounter the following error message when you try to send a transaction:

```
Mixin server encounters errors
```

A possible reason is that the asset in your transaction has too much UTXOs which exceed 256 and the transaction cannot be completed by Mixin Messenger's endpoint in time. 

Solution:

1. Try to send the transaction again.
2. Transfer the ENTIRE asset you want to send to another wallet, and then send the transaction again.

## Swap/liquidity transaction failed

In some cases, your transaction may fail due to the following reasons: The slippage tolerance is too low. Please try to increase the slippage tolerance and try again.

You can also solve this problem by splitting an order into multiple orders, reducing the amount of each transaction, and conducting multiple transactions.

Please read the details of slippage tolerance [here](./trade.md#slippage-tolerance).

## This webpage can't be reached

If you encounter the following error message when you try to access Pando:

```
This webpage can't be reached
It took too long to respond. Please check your network and try to switch 4G, Wi-Fi or VPN to reload the page.
```

Please try the following solutions:
1. Check your network connection. If you're using a VPN, please try to switch to another VPN server.
2. If you're living in China, please try hard to overcome the network blockade. You can try to use a VPN or a proxy server.

## "32603 Internal JSON-RPC error"

If you encounter the following error message when you try to send a transaction by MetaMask or WalletConnect Wallets:

```
-32603 Internal JSON-RPC error
```

The most possible reason is that you don't have enough ETH to pay the transaction fee. Please check your balance and try again.

If you don't have enough ETH, you can try to transfer some ETH to your wallet, or swap for some ETH on Pando Proto.

## I can't see my assets in my wallet

If you're using MetaMask or WalletConnect compatible Wallets, you need to add the asset contract manually. 

For metamask, pando provides a simple way to do that:

1. Switch to the "Trade" tab, both "Simple" and "Pro" mode are OK.
2. There is a pink "+" button at the swap form. Click it to add the asset contract to MetaMask.

For other wallets that compatible with WalletConnect, please use "[MVM Bridge](https://bridge.mvm.app/)" manage your assets.

## Remaining debt has to be no less than 100 pUSD

When you pay back your debt on Pando Leaf, you may encounter the following error message:

```
Remaining debt has to be no less than 100 pUSD
```

It's because the minimum amount of debt should be larger than 100 pUSD.

The solution is simple, just pay back all your debt, or pay back less, to make sure there are more than 100 pUSD debt remaining.

## "Can't find variable: BigInt"

The error "Can't find variable: BigInt" is caused by the browser's compatibility with BigInt.

If you're using iPhone, iPad, please upgrade your iOS to 14.5 or later. If you're using macOS, please upgrade your Safari to 14.1 or later. For other browsers, please upgrade to the latest version. Here is the minimum version of browsers that support BigInt:

- Chrome and WebView Android: 87
- Firefox: 68
- Edge: 79
- Opera: 54
- Safari: 14.1
- iOS Safari: 14.5
- Chrome for Android: 67
- Firefox for Android: 68

## Pando shows blank page

The issue may be caused by 3 reasons:

1. The system version of your phone is too low. Please try to upgrade your phone's system. For iOS users, please upgrade to 14.1 or later, for Android users, please upgrade to 10.0 or later (make sure the Chrome kernel version is above 78).
   If you cannot determine your version, you can visit https://app.pando.im/tools.html to check your browser information.
2. For known web browser compatibility issues on 锤子/坚果 phones, you may encounter a blank page when you try to use Pando bot on Mixin Messenger. 
   We're still fetching a solution for this issue. Before that, please try to use Chrome or other browsers on your phone and visit https://app.pando.im to use Pando.
3. It's caused by corrupted cache. If you're using Mixin Messenger, please follow the instructions to clear the cache: 
   1. Open Mixin Messenger, click your avatar at the top right of the screen.
   2. Click the "Settings" button at the top right of the screen.
   3. Click "Security" -> "Authorizations", search for the "Pando", select it and click "Revoke access".
   4. Go back to the bot, authorize Pando again.

If you're using other browsers, please try to clear the cache of your browser.
