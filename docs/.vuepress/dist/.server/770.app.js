"use strict";
exports.id = 770;
exports.ids = [770];
exports.modules = {

/***/ 843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-36df6194",
  "path": "/errorindex.html",
  "title": "Vue",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 1,
      "title": "Vue",
      "slug": "vue",
      "children": []
    }
  ],
  "filePathRelative": "errorindex.md",
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

/***/ 850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ errorindex_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/errorindex.html.vue?vue&type=template&id=16447ac0



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h1><p>TypeError: this.getOptions is not a function：版本不兼容webpack</p><div class="language-error ext-error line-numbers-mode"><pre class="language-error"><code>[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>当前vue的环境不支持解析template，需要换个环境，具体查看Vue的笔记</p><div class="language-error ext-error line-numbers-mode"><pre class="language-error"><code>vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><a href="https://vue-loader.vuejs.org/zh/migrating.html#%E5%80%BC%E5%BE%97%E6%B3%A8%E6%84%8F%E7%9A%84%E4%B8%8D%E5%85%BC%E5%AE%B9%E5%8F%98%E6%9B%B4" target="_blank" rel="noopener noreferrer">安装插件`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><div class="language-error ext-error line-numbers-mode"><pre class="language-error"><code>[vue-loader] vue-template-compiler must be installed as a peer dependency, or a compatible compiler implementation must be passed via options.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>vue与vue-template-compiler版本不一致，重装</p><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/errorindex.html.vue?vue&type=template&id=16447ac0

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/errorindex.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const errorindex_html = (__exports__);

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
//# sourceMappingURL=770.app.js.map