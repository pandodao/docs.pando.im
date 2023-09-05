# 基本の概念

## MTGとは何ですか？

MTGは「Mixin Trusted Group」の略称で、Mixin Networkのマルチシグネチャ機能に基づいたフレームワークの一種です。基本的には、カストディアンコンセンサスソリューションです。

これは資金や資産、およびその他のリソースを管理するために使用できる分散型自立組織（DAO)の一種です。

Pandoでは、複数のチームが「Trusted Group」として選ばれ、「ノード」として配置されます。ノード間で合成され。特定の管理アクションを実行されるまで、コンセンサスが達成されます。これにより、安定したサービス、分散化、および資産の安全性が保証されます。

MTGについて詳しくは[こちら](https://developers.mixin.one/docs/mainnet/mtg/overview)をご覧ください。

### Pando's MTG Members

Pando is built with Mixin Trusted Group, which is a multisig-based framework powered by Mixin Network. At present, the servicing genesis nodes are as follows.

- [Pando Dev](https://pando.im): The core development team of Pando.
- [Mixin](https://mixin.one): The Mixin Network team. The core develop team of Mixin Network
- [Big.ONE](https://big.one): A trading platform provides users with the secure and trusteeship services
- [BOX Group](https://b.watch): BOX investment community
- Exin: A famous trading platform in Mixin Ecosystem
- Cedric Fung: One major sponsor of Pando, individual investor and developer
- [Rum System](https://rumsystem.net/): A P2P application infrastructure to offer the internet alternatives


## プライスオラクル

各取引ペアのオラクル価格は、以下の目的で使用されます：

- 各トレード後、各アカウントが十分に担保化されていることを確認するため。
- アカウントが清算されるべき時期を決定するため。

オラクル価格は、6つのノードのうち4つ以上のノードによって確認されるまで、有効になりません。

- 現時点では、4/6マルチシグネチャです。
- 調整がある場合は、ドキュメントが更新されます。

### インデックスプライス

各取引ペアの価格指数は、以下の目的で使用されます：

- ファンディングレートの計算
- 「清算」のトリガーとオークションへの参加

インデックスプライス、いくつかの取引所のスポット価格の中央値として計算されます。

各取引所のスポット価格は、そのスポットペアの最良売り注文、最良買い注文、および最後の取引価格の中央値として計算されます。

価格インデックスは、4swap介してPusdに調整されます。

### 価格遅延メカニズム

短期間で通貨価格が急激に下落することを避けるために、マルチシグネチャノードによってで確認された通貨価格は即座にPanduoyeに適用されるのではなく、30分程度の遅延があります。
