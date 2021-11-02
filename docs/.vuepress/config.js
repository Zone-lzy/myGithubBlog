module.exports = {
  title: '@oyw',
  lang: 'zh-CN',
  base: '/books/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110181556789.jpg',
      },
    ],
  ],
  markdown: {
    toc: {
      level: [4],
    },
    extractHeaders: {
      level: [1, 2, 3, 4, 5],
    },
  },
  themeConfig: {
    logo: 'https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110181556789.jpg',
    lastUpdated: true,
    sidebarDepth: 3,
    navbar: [
      {
        text: 'home',
        link: '/',
      },
    ],
  },
}
