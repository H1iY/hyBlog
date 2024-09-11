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
		sidebar:[
			{
				title: 'java',
				link: '/2.java/',
				children: [
					{
						text: 'java入门',
						collapsable: false,
						link: 'java入门.md',
					},
					{
						text: 'java上手',
						collapsable: false,
						link: 'java上手.md',
					},
				]
			},
			{
				title: 'vue',
				link: '/1.vue/',
				children: [
					{
						text: 'vue入门',
						collapsable: false,
						link: 'vue入门.md',
					},
					{
						text: 'vue上手',
						collapsable: false,
						link: 'vue上手.md',
					},

				]
			}
		]
    },
};
