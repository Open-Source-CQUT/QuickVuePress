const {generateSideGroup} = require('./utils/index')
const root = './docs';

module.exports = {
    theme: 'vt',
    base: '/QuickVuePress',
    markdown: {
        lineNumbers: true
    },
    title: 'AchievementDoc',
    description: 'Quick Start VuePress Doc',
    head: [
        [
            'link',
            {rel: 'icon', href: 'logo.png'}
        ]
    ],
    plugins: [
        ['@vuepress/back-to-top'],
    ],
    themeConfig: {
        enableDarkMode:true,
        lastUpdated: '最后更新于', // string | boolean
        nav: [
            {text: 'Home', link: '/'},
            {text: '指南🧭', link: '/guide'},
        ],
        sidebar: generateSideGroup(root, [])
    }
}