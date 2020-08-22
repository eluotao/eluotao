const moment = require('moment');

module.exports = {
    title: 'Feeluo Docs',
    description: '多记，多看，才不能忘记！',
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // 不要忘了安装 moment
                    const moment = require('moment')
                    moment.locale('zh-CN')
                    return moment(timestamp).format('YYYY-MM-DD HH:mm:ss') + ' ' + moment(timestamp).format('a')
                }
            }
        ]
    ],
    themeConfig: {
        sidebarDepth: 2,
        lastUpdated: '上次更新',
        logo: '/assets/img/logo.png',
        markdown: {
            lineNumbers: true
        },
        nav: [
            {text: '首页', link: '/'},
            {text: '关于', link: '/about/'},
            {
                text: '了解更多',
                items: [
                    {
                        text: 'Api', items: [
                            {text: 'CLI', link: '/guide/'},
                            {text: 'Node', link: '/guide/'},
                        ]
                    },
                    {
                        text: '开发指南', items: [
                            {text: '本地开发', link: '/guide/'},
                            {text: '设计理念', link: '/guide/'},
                            { text: 'FAQ', link: '/guide/' },
                            { text: '术语', link: '/guide/' },
                        ] },
                    { text: '其他', items: [
                            { text: '从 0.x 迁移', link: '/guide/' },
                            { text: 'Changelog ', link: '/guide/', target:'_blank'},
                        ] }
                ]
            },
            { text: 'Github', link: 'https://github.com/eluotao', target:'_blank'},
        ]
    }
}