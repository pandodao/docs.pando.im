import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pando Documentation",
  description: "The official documentation for Pando Proto",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tutorials', link: '/tutorials/' },
      { text: 'User Manual', link: '/manual/' }
    ],

    sidebar: {
      '/tutorials/': [
        { text: 'Connect Wallet', link: "/tutorials/connect" },
        { text: 'Swapping', link: "/tutorials/swap" },
        { text: 'Liquidity Mining', link: "/tutorials/liquidity" },
      ],
      '/manual/': [
        {
          text: 'References',
          items: [
            { text: 'Trade and Swap', link: '/manual/trade' },
          ]
        },
        {
          text: 'Other Topics',
          items: [
            { text: 'FAQ', link: '/manual/faq' },
            { text: 'Troubleshooting', link: '/manual/troubleshooting' },
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
