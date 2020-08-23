const moment = require('moment');

module.exports = {
    theme: 'reco',
    title: 'Feeluo Docs',
    description: '多记，多看，才不能忘记！',
    dest: './dist', // 输出 dist 静态资源 到根目录
    modePicker: false, // 不显示调节按钮
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
    markdown: {
        // markdown-it-anchor 的选项
        anchor: {permalink: false},
        // markdown-it-toc 的选项
        toc: {includeLevel: [1, 2]},
        extendMarkdown: md => {
            // 使用更多的 markdown-it 插件!
            md.use(require('markdown-it'))
        }
    },
    themeConfig: {
        huawei: true,
        //type: 'blog',
        sidebar: 'auto', //在所有页面中启用自动生成侧栏
        authorAvatar: '/assets/img/avatar.png', // 头像
        author: 'feeluo',
        sidebarDepth: 2, // 只显示 2 级标题以上
        lastUpdated: '上次更新', // 文章右下角的上次更新时间
        logo: '/assets/img/logo.png', // 网站 左上角 logo
        noFoundPageByTencent: false, // 腾讯 404 公益
        markdown: {
            lineNumbers: true // 显示代码行号
        },
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: 'Tag'     // 默认文案 “标签”
            }
        },
        // 导航
        nav: [
            {text: '首页', link: '/', icon: 'reco-home'},
            {text: '归档', link: '/timeline/', icon: 'reco-date'},
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
                            {text: 'FAQ', link: '/guide/'},
                            {text: '术语', link: '/guide/'},
                        ]
                    },
                    {
                        text: '其他', items: [
                            {text: '从 0.x 迁移', link: '/guide/'},
                            {text: 'Changelog ', link: '/guide/', target: '_blank'},
                        ]
                    }
                ]
            },
            {text: 'Github', link: 'https://github.com/eluotao', target: '_blank', icon: 'reco-github'},
        ],
        // 友链
        friendLink: [
            {
                title: 'vuepress-theme-reco',
                // desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
            {
                title: '午后南杂',
                // desc: 'Enjoy when you can, and endure when you must.',
                email: 'recoluan@qq.com',
                link: 'https://www.recoluan.com'
            },
            // ...
        ]
    }
}