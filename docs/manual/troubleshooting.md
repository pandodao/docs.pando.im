# 疑难问题

## Mixin 服务器错误

如果您正在使用 Mixin Messenger，当您尝试发送交易时，可能会遇到以下错误消息：

```
Mixin server encounters errors （Mixin服务器遇到错误）
```

可能的原因是您的交易中的资产有过多的未花费交易输出（UTXO），超过了256个，导致 Mixin Messenger 终端无法及时完成交易。

解决方案：

1. 请尝试再次发送交易。
2. 将您要发送的**全部**资产转移到另一个钱包，然后再次尝试发送交易。

## 兑换/流动性交易失败

在某些情况下，您的交易可能由于以下原因而失败：滑点容忍度太低。请尝试提高滑点容忍度并重试。

您也可以通过将一个订单拆分为多个订单，减少每笔交易的金额，进行多次交易来解决此问题。

## 无法访问此网页

如果您在尝试访问 Pando 时遇到以下错误消息：

```
This webpage can't be reached
It took too long to respond. Please check your network and try to switch 4G, Wi-Fi or VPN to reload the page.
```

请尝试以下解决方案：

1. 检查您的网络连接。如果您正在使用 VPN，请尝试切换到另一个 VPN 服务器。
2. 如果您身处中国，请尽力克服网络封锁。您可以尝试使用 VPN 或代理服务器。

## 剩余债务必须不少于100 pUSD

当您在 Pando Leaf 偿还债务时，可能会遇到以下错误消息：

```
剩余债务必须不少于100 pUSD
```

这是因为最低债务金额应大于100 pUSD。

解决方案很简单，只需偿还所有债务，或偿还较少的金额，以确保剩余的债务超过 100 pUSD。

## "找不到变量：BigInt"

出现“找不到变量：BigInt”错误是由于浏览器与 BigInt 的兼容性引起的。

如果您使用的是 iPhone、iPad，请将您的 iOS 升级到 14.5 或更高版本。如果您使用的是 macOS，请将 Safari 升级到 14.1 或更高版本。对于其他浏览器，请升级到最新版本。以下是支持 BigInt 的浏览器的最低版本要求：

- Chrome 和 WebView Android: 87
- Firefox: 68
- Edge: 79
- Opera: 54
- Safari: 14.1
- iOS Safari: 14.5
- Android Chrome 浏览器: 67
- Android Firefox 浏览器: 68

## Pando显示空白页面

可能有三个原因导致此问题：

1. 您的手机系统版本过低。请尝试升级您手机的系统。对于 iOS 用户，请升级到 14.1 或更高版本；对于 Android 用户，请升级到 10.0 或更高版本（确保 Chrome 内核版本在 78 以上）。
   如果您无法确定您的版本，您可以访问 https://app.pando.im/tools.html 查看您的浏览器信息。
2. 对于已知的锤子/坚果手机上的网络浏览器兼容性问题，当您尝试在 Mixin Messenger 上使用 Pando 机器人时，可能会遇到空白页面。
   我们依然在尝试解决相关问题。在解决此问题之前，请尝试在您的手机上使用 Chrome 或其他浏览器，并访问 https://app.pando.im 使用 Pando。
3. 这是由损坏的缓存引起的。如果您正在使用 Mixin Messenger，请按照以下说明清除缓存：
   1. 打开 Mixin Messenger，点击屏幕右上角的您的头像。
   2. 点击屏幕右上角的“设置”按钮。
   3. 点击“安全” -> “授权”，搜索“Pando”，选择它，然后点击“撤销访问权限”。
   4. 返回到机器人，重新授权 Pando。

如果您正在使用其他浏览器，请尝试清除浏览器的缓存。
