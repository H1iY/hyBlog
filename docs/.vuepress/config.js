module.exports = {
	base: '/hyBlog/', // 你的网站基础路径
    title: '江南一点雨',
    head: [
        ['link', {rel: 'icon', href: 'https://open.weixin.qq.com/qr/code?username=a_javaboy'}]
    ],
    themeConfig: {
        logo: 'https://open.weixin.qq.com/qr/code?username=a_javaboy',
        nav: [ 
            {text: '首页', link: '/'},
			{text: '国际站', link: 'http://www.javaboy.org'},
			{text: '国内站', link: 'http://www.itboyhub.com'},
			{text: '其他', items: [
				{text: '国际站', link: 'http://www.javaboy.org'},
				{text: '国内站', link: 'http://www.itboyhub.com'}
			]}
        ],
        sidebar: {
			'/2.java/': [
				{
					title: 'Java',
					collapsable: true,
					sidebarDepth: 2,
					children: ["java入门","java上手"]
				}

			],
			'/1.vue/': [
				{
					title: 'vue',
					collapsable: true,
					sidebarDepth: 2,
					children: ["vue入门","vue上手"]
				}
			]
		}
    },
};
