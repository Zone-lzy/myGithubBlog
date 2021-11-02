"use strict";
exports.id = 389;
exports.ids = [389];
exports.modules = {

/***/ 683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-1997c6e8",
  "path": "/gitbook_build.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "教程",
      "slug": "教程",
      "children": []
    },
    {
      "level": 3,
      "title": "插件篇",
      "slug": "插件篇",
      "children": []
    }
  ],
  "filePathRelative": "gitbook_build.md",
  "git": {
    "updatedTime": 1635865126000,
    "contributors": [
      {
        "name": "li zhenyong",
        "email": "2812492504@qq.com",
        "commits": 1
      }
    ]
  }
}


/***/ }),

/***/ 6:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ gitbook_build_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/gitbook_build.html.vue?vue&type=template&id=42642034



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h3 id="教程" tabindex="-1"><a class="header-anchor" href="#教程" aria-hidden="true">#</a> 教程</h3><p><a href="https://www.cnblogs.com/phyger/p/14035937.html#ghpages_681" target="_blank" rel="noopener noreferrer">打造完美写作系统：Gitbook+Github Pages+Github Actions`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p>用上面的方法完成githubPages的搭建，github Actions使用没成功，Windows写批处理程序实现同样效果</p><ol><li><p>更新完笔记，重构gitbook(0-gitbook_build.bat)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> gitbook
gitbook build
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>上传git(1-git_updata.bat)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> gitbook
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit -m <span class="token string">&quot;updata&quot;</span>
<span class="token function">git</span> push https://github.com/用户名/仓库名
<span class="token builtin class-name">cd</span> _book
<span class="token function">git</span> config --global user.email <span class="token string">&quot;邮箱&quot;</span>
<span class="token function">git</span> config --global user.name <span class="token string">&quot;用户名&quot;</span>
<span class="token function">git</span> init
<span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/用户名/仓库名
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit -m <span class="token string">&quot;updata&quot;</span>
<span class="token function">git</span> branch -M main
<span class="token function">git</span> push --quiet --force <span class="token string">&quot;https://github.com/用户名/仓库名&quot;</span> main:gh-pages <span class="token comment">#没有成功在下一行加上&quot;pause&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>（<strong>重点</strong>）目录结构：<br><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110041151795.png" alt="image-20211004115111743"></p><p>git上传常见错误：</p><ol><li><a href="https://www.cnblogs.com/fairylyl/p/15059437.html" target="_blank" rel="noopener noreferrer">Git 错误：OpenSSL SSL_read: Connection was reset, errno 10054`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ol></li></ol><p><a href="https://blog.csdn.net/wkc1996/article/details/119458835" target="_blank" rel="noopener noreferrer">CDN加速GitHub搭配PicGo自建图床，Typora使用起来太爽了`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h3 id="插件篇" tabindex="-1"><a class="header-anchor" href="#插件篇" aria-hidden="true">#</a> 插件篇</h3><p><a href="https://www.cnblogs.com/mingyue5826/p/10307051.html#214-%E7%94%9F%E6%88%90%E9%A1%B5%E5%86%85%E7%9B%AE%E5%BD%95" target="_blank" rel="noopener noreferrer">插件整理`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p>插件安装：在gitbook init目录中输入</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gitbook <span class="token function">install</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>页内目录生成插件<a href="https://blog.csdn.net/xo19882011/article/details/114917307" target="_blank" rel="noopener noreferrer">ref`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;intopic-toc&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110041506497.png" alt="image-20211004150613446"></p><p>页脚</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;tbfed-pagefooter&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token property">&quot;pluginsConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;tbfed-pagefooter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;copyright&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Copyright &amp;copy oyw6719119 2021&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;modify_label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;最近修订时间：&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;modify_format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YYYY-MM-DD HH:mm:ss&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110041940031.png" alt="image-20211004194017542"></p><p>回到顶部</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;back-to-top-button&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110041941235.png" alt="image-20211004194154378"></p><p>统计网页打开数量 <a href="https://blog.csdn.net/u012887259/article/details/102425733" target="_blank" rel="noopener noreferrer">ref`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p>没有实际效果</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;pageview-count&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110051601244.png" alt="image-20211005160051605"></p><p>代码块复制按钮 <a href="https://blog.csdn.net/bocai_xiaodaidai/article/details/100696794" target="_blank" rel="noopener noreferrer">ref`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;code&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token property">&quot;pluginsConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;copyButtons&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>copyButtons: false 表示关闭复制按钮</p><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110052300755.png" alt="image-20211005230042701"></p><p>自由调节左侧边栏 <a href="https://lingsword.gitbooks.io/gitbook-use/content/plugins.html#splitter" target="_blank" rel="noopener noreferrer">ref`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;splitter&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110052309627.png" alt="image-20211005230908037"></p><p>悬浮页内目录（可收起）</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
	<span class="token string">&quot;anchor-navigation-ex&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token property">&quot;pluginsConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;anchor-navigation-ex&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token comment">// 标题是否显示层级序号.页面标题和导航中的标题都会加上层级显示</span>
		<span class="token property">&quot;showLevel&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
		<span class="token property">&quot;isShowTocTitleIcon&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;tocLevel1Icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fa fa-hand-o-right&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;tocLevel2Icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fa fa-hand-o-right&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;tocLevel3Icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fa fa-hand-o-right&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>隐藏元素 <a href="https://blog.csdn.net/weixin_37865166/article/details/91899788?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-0.no_search_link&amp;spm=1001.2101.3001.4242" target="_blank" rel="noopener noreferrer">ref`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;hide-element&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token property">&quot;pluginsConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;hide-element&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;elements&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.gitbook-link&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/gitbook_build.html.vue?vue&type=template&id=42642034

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/gitbook_build.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const gitbook_build_html = (__exports__);

/***/ }),

/***/ 744:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    for (const [key, val] of props) {
        sfc[key] = val;
    }
    return sfc;
};


/***/ })

};
;
//# sourceMappingURL=389.app.js.map