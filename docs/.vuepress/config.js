const {generateSideGroup} = require('./utils/index')
const root = './docs';

module.exports = {
    theme: "vt",
    markdown: {
        lineNumbers: true
    },
    plugins: [
        ['@vuepress/back-to-top'],
    ],
    title: 'Go中文学习文档',
    description: '这是一个Golang学习的个人文档站',
    head: [
        [
            'link',
            {rel: 'icon', href: 'logo.png'}
        ]
    ],
    themeConfig: {
        enableDarkMode: true,
        lastUpdated: '最后更新于', // string | boolean
        nav: [
            {text: 'Github', link: 'https://github.com/CQUT-Programmer/QuickVuePress'}
        ],
        sidebar: []
    }
}