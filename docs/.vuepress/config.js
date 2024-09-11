module.exports = {
	base: '/hyBlog/', // 你的网站基础路径
    title: '林中一点夕',
    head: [
        ['link', {rel: 'icon', href: 'http://i0.hdslb.com/bfs/face/d48e4b6a8ad65da2bb0cbd212faced604f7d3262.jpg'}]
    ],
    themeConfig: {
        logo: 'http://i0.hdslb.com/bfs/face/d48e4b6a8ad65da2bb0cbd212faced604f7d3262.jpg',
        nav: [ 
            {text: '首页', link: '/'},
			{text: '国际站', link: 'http://www.javaboy.org'},
			{text: '国内站', link: 'http://www.itboyhub.com'},
			{text: '其他', items: [
				{text: '国际站', link: 'http://www.javaboy.org'},
				{text: '国内站', link: 'http://www.itboyhub.com'}
			]}
        ],
        sidebar: [
			{
				title: 'Java',
				collapsable: true,
				sidebarDepth: 2,
				children: [
					'/2.java/java入门',
					'/2.java/java上手',
				]
			},
			{
				title: 'vue',
				collapsable: true,
				sidebarDepth: 2,
				children: [
					'/1.vue/vue入门',
					'/1.vue/vue上手',
				]
			},
		]
    },
};