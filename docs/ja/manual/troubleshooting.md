# トラブルシューティング

## Mixinサーバーでエラーが発生する場合

Mixin Messengerを使用している場合、トランザクションを送信しようとすると、以下のようなエラーメッセージが表示されることがあります：

```
Mixin サーバーでエラーが発生しました
```

このエラーの可能性の1つは、トランザクション内のアセットが256を超えるUTXOを持っており、Mixin Messengerのエンドポイントでは時間内にトランザクションを完了できないためです。

解決策：

1. トランザクションを再度送信してみてください。
2. 送信したいアセット全体を別のウォレットに移動し、トランザクションを再度送信してみてください。

## スワップ / 流動性トランザクションが失敗する場合

一部の場合、トランザクションが次の理由で失敗することがあります：スリッページ許容度が低すぎます。スリッページ許容度を上げて再試行してみてください。

また、注文を複数の注文に分割して、各トランザクションの金額を減らし、複数のトランザクションを行うことで、この問題を解決することもできます。

スリッページ許容度の詳細については[こちら](./trade.md#slippage-tolerance)をご覧ください。


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


## このウェブページにアクセスすることはできません

Pandoにアクセスしようとしたときに、次のようなエラーメッセージが表示された場合：

```
このウェブページにアクセスできません。

応答するのに時間がかかりすぎました。ネットワークを確認し、4G、Wi-Fi、VPNを切り替えてページを再読み込みしてみてください。
```

次の解決策を試してみてください：

1. ネットワーク接続を確認してください。VPNを使用している場合は、別のVPNサーバーに切り替えてみてください。
2. 中国に在住している場合は、ネットワークの遮断を克服するために努力してください。VPNやプロキシサーバーを使用してみてください。

## 残りの負債は 100 pUSD 以上でなければなりません

Pando Leaf で借金を返済するときに、次のエラー メッセージが表示される場合があります。

```
残りの負債は 100 pUSD 以上でなければなりません
```

それは、最低負債額が100ペンスドルより大きくなければならないからです。

解決策は簡単です。借金をすべて返済するか、返済額を減らして借金が 100 ペンスドル以上残るようにするだけです。
