### 教程

[打造完美写作系统：Gitbook+Github Pages+Github Actions](https://www.cnblogs.com/phyger/p/14035937.html#ghpages_681)

用上面的方法完成githubPages的搭建，github Actions使用没成功，Windows写批处理程序实现同样效果

1. 更新完笔记，重构gitbook(0-gitbook_build.bat)

   ````bash
   cd gitbook
   gitbook build
   ````

2. 上传git(1-git_updata.bat)   

   ````bash
   cd gitbook
   git add .
   git commit -m "updata"
   git push https://github.com/用户名/仓库名
   cd _book
   git config --global user.email "邮箱"
   git config --global user.name "用户名"
   git init
   git remote add origin https://github.com/用户名/仓库名
   git add .
   git commit -m "updata"
   git branch -M main
   git push --quiet --force "https://github.com/用户名/仓库名" main:gh-pages #没有成功在下一行加上"pause"
   ````

   （**重点**）目录结构：  
   ![image-20211004115111743](https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110041151795.png)

   git上传常见错误：
   
   1. [Git 错误：OpenSSL SSL_read: Connection was reset, errno 10054](https://www.cnblogs.com/fairylyl/p/15059437.html)

[CDN加速GitHub搭配PicGo自建图床，Typora使用起来太爽了](https://blog.csdn.net/wkc1996/article/details/119458835)

### 插件篇

[插件整理](https://www.cnblogs.com/mingyue5826/p/10307051.html#214-%E7%94%9F%E6%88%90%E9%A1%B5%E5%86%85%E7%9B%AE%E5%BD%95)

插件安装：在gitbook init目录中输入

````bash
gitbook install
````

页内目录生成插件[ref](https://blog.csdn.net/xo19882011/article/details/114917307)  

````json
{
    "plugins": [
        "intopic-toc"
    ],
}
````

![image-20211004150613446](https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110041506497.png)

页脚 

````json
"plugins": [
    "tbfed-pagefooter",
],
"pluginsConfig": {
    "tbfed-pagefooter": {
        "copyright": "Copyright &copy oyw6719119 2021",
        "modify_label": "最近修订时间：",
        "modify_format": "YYYY-MM-DD HH:mm:ss"
    }
}
````

![image-20211004194017542](https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110041940031.png)

回到顶部

````json
"plugins": [
    "back-to-top-button"
]
````

![image-20211004194154378](https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110041941235.png)

统计网页打开数量 [ref](https://blog.csdn.net/u012887259/article/details/102425733)

没有实际效果

````json
"plugins": [
    "pageview-count"
]
````


![image-20211005160051605](https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110051601244.png)

代码块复制按钮 [ref](https://blog.csdn.net/bocai_xiaodaidai/article/details/100696794)

````json
"plugins": [
    "code"
],
"pluginsConfig": {
    "code": {
        "copyButtons": false
    }
}
````

copyButtons: false 表示关闭复制按钮

![image-20211005230042701](https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110052300755.png)

自由调节左侧边栏 [ref](https://lingsword.gitbooks.io/gitbook-use/content/plugins.html#splitter)

````json
"plugins": [
    "splitter"
],
````

![image-20211005230908037](https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110052309627.png)

悬浮页内目录（可收起）

````json
"plugins": [
	"anchor-navigation-ex"
],
"pluginsConfig": {
	"anchor-navigation-ex": {
         // 标题是否显示层级序号.页面标题和导航中的标题都会加上层级显示
		"showLevel": false,
		"isShowTocTitleIcon": true,
		"tocLevel1Icon": "fa fa-hand-o-right",
		"tocLevel2Icon": "fa fa-hand-o-right",
		"tocLevel3Icon": "fa fa-hand-o-right"
	}
}
````

隐藏元素 [ref](https://blog.csdn.net/weixin_37865166/article/details/91899788?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-0.no_search_link&spm=1001.2101.3001.4242)

````json
"plugins": [
    "hide-element"
],
"pluginsConfig": {
    "hide-element": {
        "elements": [".gitbook-link"]
    }
}
````
