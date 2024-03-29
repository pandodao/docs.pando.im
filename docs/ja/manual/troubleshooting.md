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

# "32603 内部 JSON-RPC エラー"

MetaMask WalletやConnect Walletを使用してトランザクションを送信しようとした際に、以下のエラーメッセージが表示された場合：

```
32603 Internal JSON-RPC error
```

最も可能性の高い原因は、トランザクション手数料を支払うために十分なETHがないことです。残高を確認して、もう一度試してください。

ETHが不足している場合は、ウォレットにETHを送金するか、Pando ProtoでETHを交換することができます。

# ウォレットの資産を確認することができない

MetaMaskやWalletConnect互換のWalletを使用している場合、アセットコントラクトを手動で追加する必要があります。

Metamaskの場合、pandoは次のような簡単な方法を提供しています：

1. 「トレード」タブに切り替えてください。「シンプル」モードと「プロ」モードのどちらでも構いません。
2. スワップフォームにピンク色の「＋」ボタンがあります。それをクリックしてアセットの契約をMetaMaskに追加します。

WalletConnectと互換性のある他のウォレットの場合は、[MVM ブリッジ](https://bridge.mvm.app/)を使用してアセットを管理してください。


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

## "変数が見つかりません: BigInt"

「Can't find variable: BigInt」というエラーは、ブラウザの BigInt との互換性によって発生します。

iPhone、iPadをお使いの場合は、iOSを14.5以降にアップグレードしてください。macOS を使用している場合は、Safari を 14.1 以降にアップグレードしてください。その他のブラウザをご利用の場合は、最新バージョンにアップグレードしてください。 BigInt をサポートするブラウザの最小バージョンは次のとおりです。

- Chrome および WebView Android: 87
- Firefox: 68
- Edge: 79
- Opera：54
- サファリ：14.1
- iOS サファリ：14.5
- Android 版 Chrome: 67
- Android 版 Firefox: 68

## Pando は空白のページを表示します

この問題は次の 3 つの理由によって発生する可能性があります。

1. 携帯電話のシステムバージョンが低すぎます。 携帯電話のシステムをアップグレードしてみてください。 iOS ユーザーの場合は、14.1 以上にアップグレードしてください。 Android ユーザーの場合は、10.0 以上にアップグレードしてください（Chrome カーネルのバージョンが 78 以上であることを確認してください）。
   バージョンを確認できない場合は、https://app.pando.im/tools.html にアクセスしてブラウザ情報を確認してください。
2. 锤子/坚果電話の既知の Web ブラウザ互換性の問題により、Mixin Messenger で Pando ボットを使用しようとすると空白のページが表示される場合があります。
   この問題の解決策をまだ模索中です。 その前に、携帯電話で Chrome または他のブラウザを使用し、https://app.pando.im にアクセスして Pando を使用してみてください。
3. キャッシュの破損が原因です。 Mixin Messenger を使用している場合は、次の手順に従ってキャッシュをクリアしてください。
   1. Mixin Messenger を開き、画面右上のアバターをクリックします。
   2. 画面右上の「設定」ボタンをクリックします。
   3. 「セキュリティ」→「認証」をクリックし、「Pando」を検索して選択し、「アクセスを取り消す」をクリックします。
   4. ボットに戻り、Pando を再度認証します。

他のブラウザを使用している場合は、ブラウザのキャッシュをクリアしてみてください。