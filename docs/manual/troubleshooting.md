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

## Why did my swap/liquidity transaction fail?

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


