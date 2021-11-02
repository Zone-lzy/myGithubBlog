module.exports = {
  title: '@lizhenyong',
  lang: 'zh-CN',
  base: '/myGithubBlog/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://cdn.jsdelivr.net/gh/Zone-lzy/myImg/2021Pictureiu.jpg',
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
    logo: 'https://cdn.jsdelivr.net/gh/Zone-lzy/myImg/2021Pictureiu.jpg',
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
