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

const genI18nSidebar = () => {
  const ret = {};
  for (const lang of ['en', 'zh']) {
    const prefix = lang === 'en' ? '' : '/' + lang;
    ret[`${prefix}/tutorials/`] = [
      {
        text: t(lang, 'tutorial'),
        items: [
          { text: t(lang, 'connect_wallet'), link: `${prefix}/tutorials/connect` },
          { text: t(lang, 'trading'), link: `${prefix}/tutorials/trading` },
          { text: t(lang, 'liquidity_mining'), link: `${prefix}/tutorials/liquidity` },
          { text: t(lang, 'mint'), link: `${prefix}/tutorials/mint` }
        ]
      },
      {
        text: t(lang, 'other_topics'),
        items: [
          { text: t(lang, 'listing'), link: `${prefix}/tutorials/listing` },
        ]
      },
      {
        text: t(lang, 'community'),
        items: [
          { text: t(lang, 'support'), link: `${prefix}/tutorials/support` },
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
          { text: t(lang, 'earn_crypto'), link: `${prefix}/manual/earn` },
          { text: t(lang, 'claim_free_coin'), link: `${prefix}/manual/catkin` },
          { text: t(lang, 'lend_and_borrow'), link: `${prefix}/manual/rings` },
        ]
      },
      {
        text: t(lang, 'other_topics'),
        items: [
          { text: t(lang, 'faq'), link: `${prefix}/manual/faq` },
          { text: t(lang, 'troubleshooting'), link: `${prefix}/manual/troubleshooting` },
          { text: t(lang, 'audit_report'), link: `${prefix}/manual/audit-report` },
        ]
      },
    ]
  }
  return ret;
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "Pando Documentation",
  description: "The official documentation for Pando Proto",
  appearance: false,

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
    logo: { light: '/logo-with-text.svg', dark: 'logo-with-text-dark.svg', alt: 'Pando Proto' },
    siteTitle: false,

    editLink: {
      pattern: 'https://github.com/pandodao/docs.pando.im/edit/master/docs/:path'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: genNav(),

    sidebar: genI18nSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pandodao/docs.pando.im' }
    ],

    footer: {
      copyright: 'Copyright © 2018-present <a href="https://pando.im">Pando Proto</a>'
    }
  }
})
