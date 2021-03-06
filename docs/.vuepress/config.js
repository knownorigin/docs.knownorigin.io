const {description} = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'KnownOrigin docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', {name: 'theme-color', content: '#5165FF'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ['link', {rel: 'icon', href: './favicon.ico'}]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/knownorigin/docs.knownorigin.io',
    editLinks: true,
    lastUpdated: true,
    smoothScroll: true,
    docsRepo: 'https://github.com/knownorigin/docs.knownorigin.io',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinkText: 'Help us improve this page!',
    nav: [
      {
        text: 'Guides',
        link: '/guide/',
      },
      // {
      //   text: 'Config',
      //   link: '/config/'
      // },
      // {
      //   text: 'VuePress',
      //   link: 'https://v1.vuepress.vuejs.org'
      // }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: true,
          children: [
            '',
            {
              title: 'Commonly Asked Questions',
              collapsable: true,
              children: [
                'frequently-asked-questions',
                'joining-ko-as-an-artist',
                // 'artist-referrals', // disabled for now
                'what-is-an-edition',
                'creating-a-profile',
                'drops',
              ]
            },
            {
              title: 'How to Guides?',
              collapsable: true,
              children: [
                'card-purchases',
                'user-socials-verification',
                'unlockable-content',
                'creating-editions',
                'artwork-management',
                'donating-to-charity',
                'supported-formats',
                'video-encoding',
                'trending-engine',
                'verify-on-discord',
              ]
            },
            {
              title: 'Misc',
              collapsable: true,
              children: [
                'code-of-conduct',
                'fee-structure',
                'what-is-eth2.0',
                'press-kit',
              ]
            }
          ]
        },
      ],
    },
    sidebarDepth: 2,
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['@vuepress/google-analytics',
      {
        'ga': 'UA-117421198-3'
      }
    ],
    ['@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // Don't forget to install moment yourself
          const moment = require('moment');
          moment.locale(lang);
          return moment(timestamp).fromNow();
        }
      }
    ],
    ['vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html',
      },
    ],
  ]
};
