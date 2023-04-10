export const messages = {
  "en": {
    "home": "Home",
    "tutorial": "Tutorial",
    "user_manual": "User Manual",
    "connect_wallet": "Connect Wallet" ,
    "swapping": "Swapping" ,
    "liquidity_mining": "Liquidity Mining" ,
    "mint": "Mint pUSD",
    "cookbook": "Cookbook",
    "references": "References",
    "essential": "Essential",
    "trade_and_swap": "Trade and swap",
    "mint_and_pusd": "Mint and pUSD",
    "other_topics": "Other Topics",
    "faq": "FAQ",
    "troubleshooting": "Troubleshooting",
    "audit_report": "Audit report",
    "claim_free_coin": "Claim free coin",
  },
  "zh": {
    "home": "首页",
    "tutorial": "教程",
    "user_manual": "用户手册",
    "connect_wallet": "连接钱包" ,
    "swapping": "交换代币" ,
    "liquidity_mining": "流动性挖矿" ,
    "mint": "铸造 pUSD",
    "cookbook": "Cookbook",
    "references": "参考",
    "essential": "核心概念",
    "trade_and_swap": "交易和交换",
    "mint_and_pusd": "铸造 pUSD",
    "other_topics": "其他话题",
    "faq": "常见问题",
    "troubleshooting": "故障排除",
    "audit_report": "审计报告",
    "claim_free_coin": "领取免费代币",
  },
}

export const t = (lang, key: string) => {
  if (lang === '') lang = 'en'
  return messages[lang][key] || messages["en"][key];
}
