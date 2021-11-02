"use strict";
exports.id = 367;
exports.ids = [367];
exports.modules = {

/***/ 634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7522d784",
  "path": "/Linux.html",
  "title": "Linux",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 1,
      "title": "Linux",
      "slug": "linux",
      "children": [
        {
          "level": 2,
          "title": "Linux云服务器",
          "slug": "linux云服务器",
          "children": []
        },
        {
          "level": 2,
          "title": "Linux系统启动过程",
          "slug": "linux系统启动过程",
          "children": [
            {
              "level": 3,
              "title": "内核的引导",
              "slug": "内核的引导",
              "children": [
                {
                  "level": 4,
                  "title": "运行级别",
                  "slug": "运行级别",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "level": 2,
          "title": "Linux系统目录结构",
          "slug": "linux系统目录结构",
          "children": []
        },
        {
          "level": 2,
          "title": "文件基本属性",
          "slug": "文件基本属性",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "Linux.md",
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

/***/ 52:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Linux_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/Linux.html.vue?vue&type=template&id=0b8b1c24



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h1><h2 id="linux云服务器" tabindex="-1"><a class="header-anchor" href="#linux云服务器" aria-hidden="true">#</a> Linux云服务器</h2><p>简介</p><p><a href="https://www.runoob.com/linux/linux-cloud-server.html#tx" target="_blank" rel="noopener noreferrer">腾讯云`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>：腾讯云目前活动多一些，性价比也高，<a href="https://curl.qcloud.com/AbZapp4Q" target="_blank" rel="noopener noreferrer"><strong>直达链接</strong> `)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p><strong>如果需要购置海外服务器（国内要备案），可以点击：</strong><a href="https://curl.qcloud.com/5C1FtZ3S" target="_blank" rel="noopener noreferrer"> https://curl.qcloud.com/5C1FtZ3S`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><strong>。</strong></p><p><a href="https://www.runoob.com/linux/linux-cloud-server.html#ali" target="_blank" rel="noopener noreferrer">阿里云`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>：折扣力度也很大，<a href="https://www.aliyun.com/minisite/goods?userCode=i5mn5r7m" target="_blank" rel="noopener noreferrer"><strong>直达链接</strong> `)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>。</p><p><a href="https://www.runoob.com/linux/linux-cloud-server.html#hw" target="_blank" rel="noopener noreferrer">华为云`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>：领券购买也很划算，<a href="https://activity.huaweicloud.com/cps/recommendstore.html?fromacct=f3797f3d-4da5-4a2f-9149-130ad807c940&amp;utm_source=dGlhbnFpeGlu=&amp;utm_medium=cps&amp;utm_campaign=201905" target="_blank" rel="noopener noreferrer"><strong>直达链接</strong> `)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>。</p><h2 id="linux系统启动过程" tabindex="-1"><a class="header-anchor" href="#linux系统启动过程" aria-hidden="true">#</a> Linux系统启动过程</h2><h3 id="内核的引导" tabindex="-1"><a class="header-anchor" href="#内核的引导" aria-hidden="true">#</a> 内核的引导</h3><p>当计算机打开电源后，首先是BIOS开机自检，按照BIOS中设置的启动设备（通常是硬盘）来启动。</p><p>操作系统接管硬件以后，首先读入 /boot 目录下的内核文件</p><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/bg2013081702.png" alt="bg2013081702"></p><p>运行init</p><p>init 进程是系统所有进程的起点，你可以把它比拟成系统所有进程的老祖宗，没有这个进程，系统中任何进程都不会启动。</p><p>init 程序首先是需要读取配置文件 /etc/inittab。</p><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/bg2013081703.png" alt="bg2013081703"></p><h4 id="运行级别" tabindex="-1"><a class="header-anchor" href="#运行级别" aria-hidden="true">#</a> 运行级别</h4><p>许多程序需要开机启动。它们在Windows叫做&quot;服务&quot;（service），在Linux就叫做&quot;守护进程&quot;（daemon）。</p><p>init进程的一大任务，就是去运行这些开机启动的程序。</p><p>但是，不同的场合需要启动不同的程序，比如用作服务器时，需要启动Apache，用作桌面就不需要。</p><p>Linux允许为不同的场合，分配不同的开机启动程序，这就叫做&quot;运行级别&quot;（runlevel）。也就是说，启动时根据&quot;运行级别&quot;，确定要运行哪些程序。</p><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/bg2013081704.png" alt="bg2013081704"></p><p>Linux系统有7个运行级别(runlevel)：</p><ul><li><p>运行级别0：系统停机状态，系统默认运行级别不能设为0，否则不能正常启动</p></li><li><p>运行级别1：单用户工作状态，root权限，用于系统维护，禁止远程登陆</p></li><li><p>运行级别2：多用户状态(没有NFS)</p></li><li><p>运行级别3：完全的多用户状态(有NFS)，登陆后进入控制台命令行模式</p></li><li><p>运行级别4：系统未使用，保留</p></li><li><p>运行级别5：X11控制台，登陆后进入图形GUI模式</p></li><li><p>运行级别6：系统正常关闭并重启，默认运行级别不能设为6，否则不能正常启动</p></li></ul><h2 id="linux系统目录结构" tabindex="-1"><a class="header-anchor" href="#linux系统目录结构" aria-hidden="true">#</a> Linux系统目录结构</h2><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/d0c50-linux2bfile2bsystem2bhierarchy.jpg" alt="d0c50-linux2bfile2bsystem2bhierarchy"></p><h2 id="文件基本属性" tabindex="-1"><a class="header-anchor" href="#文件基本属性" aria-hidden="true">#</a> 文件基本属性</h2><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/Linux.html.vue?vue&type=template&id=0b8b1c24

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/Linux.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const Linux_html = (__exports__);

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
//# sourceMappingURL=367.app.js.map