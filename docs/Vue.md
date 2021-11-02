---

description: '这是我的第一个 Vue博客'
---

# Vue

### 12 webpack的使用

webpack：模块化的打包工具

#### 01-起步

目录结构  
![](https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110041421351.png)

webpack安装

````bash
npm install webpack@3.6.0 -g #-g表示全局安装
````

一个js就是一个模块，main.js是入口文件，bundle.js是出口文件

打包 

````bash
webpack ./src/main.js ./dist/bundle.js
````

#### 03-webpack的loader

##### 01 加载less文件

```js
require('./css/specil.less')
```

打包，报错，没有导入loader

![image-20211004154238816](https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110041542850.png)

安装loader，考虑兼容问题，带版本号，具体可看[中文文档](https://www.webpackjs.com/loaders/less-loader/)

```bash
npm install --save-dev less-loader@4.1.0 less@3.9.0
```

再次打包没报错，成功显示。

##### 02 加载本地图片

````css
background-image: url('../img/v2-ecbcec922e08f5f52f4b20e9b7211fb2_r.jpg');
````

*url-loader图片导入使用base64编码*

显然报错，导入loader，考虑兼容问题，带版本号，具体可看[中文文档](https://www.webpackjs.com/loaders/url-loader/)

````bash
npm install --save-dev url-loader@1.1.2
````

修改**webpack.config.js**

再次打包，依然报错

![image-20211004161633488](https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110041616516.png)

官网说明

If the file is greater than the limit (in bytes) the [`file-loader`](https://www.webpackjs.com/loaders/file-loader/) is used by default and all query parameters are passed to it. You can use other loader using `fallback` option.

超过limit设定的最大文件大小使用file-loader，设置更高数值或者安装file-loader

安装file-loader

````bash
npm install file-loader@3.0.1 --save-dev
````

打包，网页没有成功加载背景图片，output目录(/dist)与图片加载目录不一致(/)

修改webpack-config.js

````js
const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    //新增
    publicPath: 'dist/'
  } 
}
````

重新打包，成功显示

**PS：外链可直接访问，无需打包**

图片命名-webpack-config.js[文档](https://www.webpackjs.com/loaders/file-loader/#placeholders)：

````js
use: [
    {
        loader: 'url-loader',
        options: {
            limit: 8192,
            name: './img/[name][hash:8].[ext]',
        },
    },
],
````

##### 03 ES6语法处理

安装babel-loader，[document](https://www.webpackjs.com/loaders/babel-loader/)

````bash
npm install --save-dev babel-loader@7 babel-core babel-preset-es2015
````

rule添加后修改参数，原参数需要安装preset-env

````js
options: {
    presets: ['es2015'],
},
````

打包，显示成功

#### 04-webpack配置vue

````bash
npm install vue --save	#vue是运行时依赖
````

````js
//main.js
import Vue from 'vue'
const app = new Vue({
  el: '#app',
  data: {
    message: '我是oyw',
  },
})
````

````html
<!-- index.html -->
<div id="app">
    <h2>{{message}}</h2>
</div>
````

console报错

```error
[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
```

当前vue的环境不支持解析template，需要换个环境

````js
//webpack-config.js
module:{...},
resolve: {
  alias: {
    vue$: 'vue/dist/vue.esm.js',
  },
},
````

**PS：打包的js(** *bundle.js* **)导入到html的顺序很重要，会影响网页的渲染，建议放在最后**

##### 01 尽量在vue组件中写html代码

减少修改html中的代码，尽量在vue中书写代码

````html
<!-- index.html -->
<div id="app">
</div>
````

````js
//main.js 
const app = new Vue({
  el: '#app',
  template: `
    <div>
      <h2>{{message}}</h2>
      <button>按钮</button>
    </div>
  `,
  data: {
    message: '我是oyw',
  },
})
````

##### 02 Vue的终极使用方案

以普通js代码实现代码模块化和组件化

````js
// src/main.js
import Vue from 'vue'
import App from './vue/vue'
const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App,
  },
})
````

````js
// src/vue/vue.js
export default {
  template: `...`,
  data() {...},
  methods: {...},
}
````

打包，成功显示

以vue文件实现

安装loader，带上版本

````bash
npm install --save-dev vue-loader@15.4.2 vue-template-compiler@2.5.21
````

打包，报错

````error
vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.
````

[安装插件](https://vue-loader.vuejs.org/zh/migrating.html#%E5%80%BC%E5%BE%97%E6%B3%A8%E6%84%8F%E7%9A%84%E4%B8%8D%E5%85%BC%E5%AE%B9%E5%8F%98%E6%9B%B4)

打包，运行依然报错

````error
[vue-loader] vue-template-compiler must be installed as a peer dependency, or a compatible compiler implementation must be passed via options.
````

vue与vue-template-compiler版本不一致，重装

````bash
npm install vue@2.5.21 vue-template-compiler@2.5.21 --save 
````

打包，成功显示

#### 05-webpack配置Plugins

##### 01 横幅插件

````js
// /webpack-config.js
const webpack = require('webpack')
module.exports = {
  ...
  plugins: [
    new webpack.BannerPlugin('最终解释权归xxx所有'),
  ],
}
````

![image-20211004215718643](https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110042157715.png)

##### 02 打包index.html到dist

````bash
npm install html-webpack-plugin --save-dev
````

````js
// /webpack-config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  ...
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
}
````

删除以下代码，插件会自动生成，补全

````js
// /webpack-config.js
module.exports = {
  ...
  output: {
	...
    //删除下一代码
    publicPath: 'dist/',
  },
}
````

````html
<!-- /index.html -->

<html lang="en">
  <body>
	...
    <!-- 以下这行 -->
    <script src="dist/bundle.js"></script>
  </body>
</html>
````

##### 03 js压缩

````bash
npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
````

````js
// /webpack-config.js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  ...
  plugins: [
    new UglifyJsPlugin(),
  ],
}
````

##### 04 安装本地服务器

````bash
npm install --save-dev webpack-dev-serve@2.9.1
````

````js
// /webpack-config.js
module.exports = {
  ...
  devServer: {
    contentBase: './dist',
    inline: true,
  },
}

````

/package.json

````json
{
  ...
  "scripts": {
    "dev": "webpack-dev-server --open"
  },
  ...
}

````

#### 06-webpack配置分离

配置文件抽离，根据场景进行合并

````bash
npm install webpack-merge@4.1.5 --save-dev
````

````js
// /build/prod.config.js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const base = require('./base.config')
module.exports = webpackMerge(base, {
  Plugins: [new UglifyJsPlugin()],
})
````

````js
// /build/dev.config.js
const webpackMerge = require('webpack-merge')
const base = require('./base.config')
module.exports = webpackMerge(base, {
  devServer: {
    contentBase: './dist',
    inline: true,
  },
})
````

package.json

````json
{
    "script":{
        "build": "webpack --config ./build/prod.config.js",
        "dev": "webpack-dev-server --open --config ./build/dev.config.js"
    }
}
````

````js
// /build/base.config.js
const path = require('path')
module.exports = {
  ...
  //改动下一行，__dirname发生变化，base.config.js文件的路径与dist文件夹的相对位置发生变化
  output: {
    path: path.resolve(__dirname, '../dist'),
	...
  },
  ...
}
````

### 13 Vue CLI

安装[document](https://cli.vuejs.org/zh/guide/installation.html)

````bash
npm install -g @vue/cli
````

依然想用vue cli2的模板可以安装桥接器[document](https://cli.vuejs.org/zh/guide/creating-a-project.html#%E6%8B%89%E5%8F%96-2-x-%E6%A8%A1%E6%9D%BF-%E6%97%A7%E7%89%88%E6%9C%AC)

````bash
npm install -g @vue/cli-init
````

#### 01-关闭ESLint代码检查

````js
// /config/index.js
module.exports = {
    dev: {
        useEslint: false,
    }
}
````

#### 02-compiler和only简单比较

* runtime-compiler  
  template -> ast -> render -> vdom ->UI

* runtime-only  
  render -> vdom -> UI

render函数使用createElement函数的参数

具体参考utools的程序员手册的vue文档

#### 03-Vue CLI3的配置文件位置

Vue CLI3初始化，具体可看文档[doc](https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create)

````bash
vue create projectname
````

原vuecli2的配置文件移动到

```path
node_modules\@vue\cli-service\webpack.config.js
```

#### 04-箭头函数的补充

````js
const obj = {
    aaa() {
        setTimeout(function () {
            setTimeout(function () {
                console.log(this)
            })
            setTimeout(() => {
                console.log(this)
            })
        })
        setTimeout(() => {
            setTimeout(function () {
                console.log(this)
            })
            setTimeout(() => {
                console.log(this)
            })
        })
    },
}
obj.aaa()
````

````bash
Window
Window
Window
Object
````

箭头函数的this向外层作用域中找，一层一层查找this，直到有this的定义

### 14 Vue Router

#### 01-前后端开发发展

1. 后端渲染
2. 前后端分离
3. SPA（simple page web application）单页面富应用

#### 02-Vue Router简单使用

[doc](https://router.vuejs.org/zh/installation.html)

[API](https://router.vuejs.org/zh/api/)

````bash
npm install vue-router --save
````

````vue
// src\App.vue
<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view />  //要渲染页面所在的位置
  </div>
</template>
<script>
import router from '@/router'
export default {
  name: 'App',
  router,
}
</script>
````

````js
// src\router\index.js
import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import About from "@/components/About"; // '@'解析为'/src'
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/home",
      component: Home
    },
    {
      path: "/about",
      component: About
    }
  ]
});
````

首页默认显示

````js
// src\router\index.js
...
export default new Router({
  routes: [
    {
        path: "",
        redirect: "/home"
    }
...
````

改变浏览器地址栏url的hash显示

````js
// src\router\index.js
export default new Router({
  ...
  mode: "history"
});
````

![image-20211005174223480](https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110051742562.png)

router-link标签的属性设置，参考[API](https://router.vuejs.org/zh/api/#router-link-props)

#### 03-通过代码调整路由

$router隐式对象

````vue
// src\App.vue
<template>
  <div id="app">
    <!-- <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>-->
    <button @click="btnHome">首页</button>
    <button @click="btnAbout">关于</button>
    <router-view />
...
export default {
  ...
  methods: {
    btnHome() {
      this.$router.push('/home')
    },
    btnAbout() {
      this.$router.push('/about')
    ...
````

#### 04-动态匹配路由

[doc](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html)

在路由路径中使用**动态路径参数**

````js
// src\router\index.js
const routes = [
  ...
  {
    path: "/user/:userId",
    component: User
  }
];
````

````vue
// src\App.vue
<template>
  <div id="app">
    ...
    <router-link to="/user/zhangsan">用户</router-link>
    //动态绑定data中的数据
//    <router-link :to="'/user/'+userId">用户</router-link>       
    <router-view />
  </div>
</template>
````

动态匹配路由中活跃路由参数问题：上述的userId参数会放在$route.params中

````vue
// src\components\User.vue
<template>
  <div>
    <h2>{{$route.params.userId}}</h2>
  </div>
</template>
````

#### 05-打包的js文件结构

app.*.js:用户自己写的代码

mainfest.*.js:业务代码的底层支撑，\__webpack_require__

vendor.*.js:第三方依赖，vue/vue-router/axios

#### 06-路由的懒加载

匹配一个路由加载对应的js文件，[doc](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html#%E6%8A%8A%E7%BB%84%E4%BB%B6%E6%8C%89%E7%BB%84%E5%88%86%E5%9D%97)

````vue
// src\router\index.js
// import Home from "@/components/Home";
// import About from "@/components/About";
// import User from "@/components/User";
const Home = () => import("@/components/Home");
const About = () => import("@/components/About");
const User = () => import("@/components/User");
````

#### 07-嵌套路由

[doc](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)

````vue
// 05-learnvuerouter\src\components\Home.vue
<template>
  <div>
    <router-link to="/home/news" tag="button">新闻</router-link>
    <router-link to="/home/message" tag="button">消息</router-link>
    <router-view></router-view>
  </div>
</template>
````

````js
// 05-learnvuerouter\src\router\index.js
{
  path: "/home",
  component: Home,
  children: [
    {
      path: "",
      redirect: "news"
    },
    {
      path: "news",
      component: HomeNews
    },
    {
      path: "message",
      component: HomeMessage
    }
  ]
},
````

#### 08-vu-route参数传递

使用$route.query传参[API](https://router.vuejs.org/zh/api/#router-link-props)，[API](https://router.vuejs.org/zh/api/#%E8%B7%AF%E7%94%B1%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7)

````vue
// 05-learnvuerouter\src\App.vue
<template>
  <div id="app">
    <router-link :to="{path:'/profile', query:{name:'ouyangwei',age:22}}">档案</router-link>
    <router-view />
  </div>
</template>
````

````vue
// 05-learnvuerouter\src\components\Profile.vue
<template>
  <div>
    <h2>我是Profile组件</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
  </div>
</template>
````

#### 09-导航守卫

全局守卫，[doc](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB)

````js
// 05-learnvuerouter\src\router\index.js
router.beforeEach((to, from, next) => {
  //mathched是一个嵌套路由子路由数组，第一个是最上层路由
  window.document.title = to.matched[0].meta.title;
  next();
});
````

组件缓存

\<keep-alive\>标签

````vue
// 05-learnvuerouter\src\App.vue
<keep-alive>
  <router-view />
</keep-alive>
````

````vue
// 05-learnvuerouter\src\components\About.vue
<script>
export default {
  created() {
    console.log('about created')
  },
}
</script>
````

#### 10-路径别名

````js
// 06-tabbar\build\webpack.base.conf.js
module.exports = {
	...
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      'assert': resolve('src/assert')
    }
  },
}
````

````js
'@/components/HelloWorld'
````

### 15 Promise

优雅的异步调用方式

基本使用

````html
<script>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      //两种状态只满足一种
      // resolve('hello Vue')
      reject('error message')
    }, 2000)
  })
    .then((data) => {
    console.log(data)
  })
    .catch((err) => {
    console.log(err)
  })
</script>
````

另一种形式

````html
<script>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('hello Vue')
      reject('error message')
    }, 2000)
  }).then(
    (data) => {
      console.log(data)
    },
    (err) => {
      console.log(err)
    }
  )
</script>
````

链式调用

````html
<script>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('111')
    }, 2000)
  })
    .then((data) => {
    console.log(data)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('222')
      }, 2000)
    })
  })
    .then((data) => {
    console.log(data)
  })
</script>
````

另一种方式

````html
<script>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('111')
    }, 2000)
  })
    .then((data) => {
    console.log(data)
    return Promise.resolve(data + '222')
  })
    .then((data) => {
    console.log(data)
  })
</script>
````

如果我们希望数据直接包装成Promise.resolve，那么在then中可以直接返回数据

Promise.reject(err) 可以替换成 throw err

Promise的all方法

````html
<script>
  Promise.all([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolve1')
      }, 2000)
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolve2')
      }, 4000)
    }),
  ]).then((results) => {
    console.log(results[0] + results[1])
  })
</script>
````

所有请求都成功时才会执行then里的方法，参数results保存着请求的结果

### 16 Vuex

Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**，[doc](https://vuex.vuejs.org/zh/)

#### 01-State

````js
// 08-learnvuex\src\store\index.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0
  },
}
export default store;                             
````

将store添加到所有的vue事例中

````js
// 08-learnvuex\src\main.js
...
import store from "./store";
new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
````

访问

````vue
$store.state.count
````

#### 02-getter

````js
//
const store = new Vuex.Store({
  state: {
    students: [
      { id: 110, name: "why", age: 18 },
      { id: 111, name: "kobe", age: 24 },
      { id: 112, name: "james", age: 30 },
      { id: 113, name: "curry", age: 10 }
    ]
  },
  //类似computed
  getters: {
    PowerCount(state) {
      return state.count * state.count;
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 20);
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length;
    },
    //返回一个函数，再将调用时传的参传给函数
    moreAgeStu(state) {	
      return function(age) {
        return state.students.filter(s => s.age > age);
      };
    }
  }
});
````

#### 03-mutations

````js
// 08-learnvuex\src\store\index.js
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    info: {
      name: "kobo",
      age: 40,
      height: 1.98
    }
  },
  mutations: {
    add(state) {
      state.count++;
    },
    sub(state) {
      state.count--;
    },
    addCount(state, count) {
      state.count += count;
    },
    addCount2(state, depload) {
      state.count += depload.count;
    },
    updateInfo(state) {
      //错误方式
      // state.info["sex"] = "man";
      // 页面响应式的刷新
      // Vue.set(state.info, "sex", "man");
      Vue.delete(state.info, "name");
    }
  },
});
export default store;
````

类型常量

````js
// 08-learnvuex\src\store\store-config.js
export const ADD = "add";
````

````js
// 08-learnvuex\src\store\index.js
...
import { ADD } from "./store-config";
const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    [ADD](state) {
      state.count++;
    },
  },
});
export default store;
````

在组件中使用也是要导入的

````vue
// 08-learnvuex\src\App.vue
<template>
  <div id="app">
    <h2>{{$store.state.count}}</h2>
    <button @click="add">+</button>
  </div>
</template>
<script>
import { ADD } from './store/store-config'
export default {
  name: 'App',
  methods: {
    add() {
      this.$store.commit(ADD)
    },
  },
}
</script>
````

