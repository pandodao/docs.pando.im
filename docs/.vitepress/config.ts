import { defineConfig } from 'vitepress'
import { t } from "../lang/messages"

const genNav = () => {
  // @TODO: support multi-language
  let ret:any = [];
  for (const lang of ['en']) {
    const prefix = lang === 'en' ? '' : '/' + lang;
    ret = [
      { text: t(lang, 'home'), link: '/' },
      { text: t(lang, 'tutorial'), link: `${prefix}/tutorials/` },
      { text: t(lang, "user_manual"), link: `${prefix}/manual/essential` }
    ]
  }
  return ret;
}

const genSidebar = () => {
  const ret = {};
  ret[`/tutorials/`] = [
    {
      text: '教程',
      items: [
        { text: 'Pando PwA 安装指南', link: `/tutorials/pandopwa` },
        { text: '新版 Bee Holdings 使用指南', link: `/tutorials/newbeeholdings` },
        { text: '偿还旧主网 Pando Leaf pUSD 贷款操作指南', link: `/tutorials/leafpusdloanrepayment` },
        { text: 'Pando 定投计划操作指南', link: `/tutorials/automaticinvestmentplan` },
        { text: 'Pando 定投功能常见问题', link: `/tutorials/autoinvestfaq` },
        { text: 'CoWallet 多签钱包使用指南', link: `/tutorials/cowallet` },
        { text: 'Pando 投资者社区加入指南', link: `/tutorials/mastodoncommunity` },
        { text: 'BOX 理财买入及赎回指南', link: `/tutorials/boxfinance` },
        
      ]
    }
  ]
  ret[`/manual/`] = [
    {
      text: '参考手册',
      items: [
        { text: '核心概念', link: `/manual/essential` },
      ]
    },
    {
      text: '其他',
      items: [
        { text: 'FAQ', link: `/manual/faq` },
        { text: '疑难问题', link: `/manual/troubleshooting` },
      ]
    },
  ]
  return ret;
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "Pando Documentation",
  description: "The official documentation for Pando Proto",
  appearance: false,

  themeConfig: {
    logo: { light: '/logo-with-text.svg', dark: 'logo-with-text-dark.svg', alt: 'Pando Proto' },
    siteTitle: false,

    editLink: {
      pattern: 'https://github.com/pandodao/docs.pando.im/edit/master/docs/:path'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: genNav(),

    sidebar: genSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pandodao/docs.pando.im' }
    ],

    footer: {
      copyright: 'Copyright © present <a href="https://pando.im" title="Pando is a set of DeFi protocols">Pando Proto</a>',
      message: '<a href="https://pando.im/defi" title="What is DeFi? Exploring the Operatin of Decentralized Finance at Pando" target="_blank">DeFi</a>・<a href="https://pando.im/leaf" title="What is Stablecoin? Exploring the stablecoin at Pando" target="_blank">Stablecoin</a>',
    }
  }
})
