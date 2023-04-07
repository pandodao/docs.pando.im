import { defineConfig } from 'vitepress'
import { t } from "./messages"

const genI18nSidebar = () => {
  const ret = {};
  for (const lang of ['en', 'zh']) {
    const prefix = lang === 'en' ? '' : '/' + lang;
    ret[`${prefix}/tutorials/`] = [
      {
        text: t(lang, 'tutorial'),
        items: [
          { text: t(lang, 'connect_wallet'), link: `${prefix}/tutorials/connect` },
          { text: t(lang, 'swapping'), link: `${prefix}/tutorials/swap` },
          { text: t(lang, 'liquidity_mining'), link: `${prefix}/tutorials/liquidity` },
          { text: t(lang, 'mint'), link: `${prefix}/tutorials/mint` }
        ]
      },
      {
        text: 'Cookbook',
        items: [
        ]
      }
    ]
    ret[`${prefix}/manual/`] = [
      {
        text: t(lang, 'references'),
        items: [
          { text: t(lang, 'essential'), link: `${prefix}/manual/essential` },
          { text: t(lang, 'trade_and_swap'), link: `${prefix}/manual/trade` },
          { text: t(lang, 'mint_and_pusd'), link: `${prefix}/manual/mint` },
        ]
      },
      {
        text: t(lang, 'other_topics'),
        items: [
          { text: t(lang, 'faq'), link: `${prefix}/manual/faq` },
          { text: t(lang, 'troubleshooting'), link: `${prefix}/manual/troubleshooting` },
        ]
      },
    ]
  }
  return ret;
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pando Documentation",
  description: "The official documentation for Pando Proto",
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tutorials', link: '/tutorials/' },
      { text: 'User Manual', link: '/manual/essential' }
    ],

    sidebar: genI18nSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
