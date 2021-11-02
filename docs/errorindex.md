# Vue

 TypeError: this.getOptions is not a function：版本不兼容webpack

```error
[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
```

当前vue的环境不支持解析template，需要换个环境，具体查看Vue的笔记

````error
vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.
````

[安装插件](https://vue-loader.vuejs.org/zh/migrating.html#%E5%80%BC%E5%BE%97%E6%B3%A8%E6%84%8F%E7%9A%84%E4%B8%8D%E5%85%BC%E5%AE%B9%E5%8F%98%E6%9B%B4)

````error
[vue-loader] vue-template-compiler must be installed as a peer dependency, or a compatible compiler implementation must be passed via options.
````

vue与vue-template-compiler版本不一致，重装

