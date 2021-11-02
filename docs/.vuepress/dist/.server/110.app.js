"use strict";
exports.id = 110;
exports.ids = [110];
exports.modules = {

/***/ 141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-40ed10fe",
  "path": "/Java.html",
  "title": "Java",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 1,
      "title": "Java",
      "slug": "java",
      "children": [
        {
          "level": 2,
          "title": "数组",
          "slug": "数组",
          "children": []
        },
        {
          "level": 2,
          "title": "面向对象",
          "slug": "面向对象",
          "children": []
        },
        {
          "level": 2,
          "title": "继承",
          "slug": "继承",
          "children": [
            {
              "level": 3,
              "title": "类方法的重写：",
              "slug": "类方法的重写",
              "children": []
            },
            {
              "level": 3,
              "title": "super",
              "slug": "super",
              "children": []
            }
          ]
        }
      ]
    }
  ],
  "filePathRelative": "Java.md",
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

/***/ 118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Java_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/Java.html.vue?vue&type=template&id=dd7c6d7e

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h1><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><ul><li>动态初始化：数组声明且为数组元素分配空间与赋值的操作分开进行</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> names<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
names <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> “钱学森”<span class="token punctuation">;</span>
names<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> “邓稼先”<span class="token punctuation">;</span>
names<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> “袁隆平”<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>静态初始化：在定义数组的同时就为数组元素分配空间并赋值。</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> arr1<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>数组是引用对象，new出来的数组存放在堆中</p><p><img src="https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/202110181119602.png" alt="image-20211018111936268"></p><h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h2><table><thead><tr><th></th><th>成员变量</th><th>局部变量</th></tr></thead><tbody><tr><td>声明的位置</td><td>直接声明在类中</td><td>方法形参或内部、代码块内、构造器内</td></tr><tr><td>修饰符</td><td>private、public、static、final等</td><td>不能用权限修饰符修饰，可以用final修饰</td></tr><tr><td>初始化值</td><td>有默认初始化值</td><td>没有默认初始化值，必须显式赋值，方可使用</td></tr><tr><td>内存加载位置</td><td>堆空间或静态域内</td><td>栈空间</td></tr></tbody></table><p>JavaSE 5.0 中提供了**Varargs(<strong>variable number of arguments</strong>)**机制，允许直接定义能和多个实参相匹配的形参。从而，可以用一种更简单的方式，来传递个数可变的实参。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//JDK 5.0以前：采用数组形参来定义方法，传入多个同一类型变量</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> a <span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> books<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//JDK5.0：采用可变个数形参来定义方法，传入多个同一类型变量</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> a <span class="token punctuation">,</span><span class="token class-name">String</span>…books<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>说明：</strong></p><ol><li>声明格式：方法名(参数的类型名 ...参数名)</li><li>可变参数：方法参数部分指定类型的参数个数是可变多个：0个，1个或多个</li><li>可变个数形参的方法与同名的方法之间，彼此构成重载</li><li>可变参数方法的使用与方法参数部分使用数组是一致的</li><li>方法的参数部分有可变形参，需要放在形参声明的<strong>最后</strong></li><li>在一个方法的形参位置，最多只能声明<strong>一个</strong>可变个数形参</li></ol><p>为什么java引用类型传的是地址？</p><table><thead><tr><th>修饰符</th><th>类内部</th><th>同一个包</th><th>不同包的子类</th><th>同一个工程</th></tr></thead><tbody><tr><td>private</td><td>Yes</td><td></td><td></td><td></td></tr><tr><td>缺省</td><td>Yes</td><td>Yes</td><td></td><td></td></tr><tr><td>protected</td><td>Yes</td><td>Yes</td><td>Yes</td><td></td></tr><tr><td>public</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td></tr></tbody></table><p>类的属性赋值</p><ul><li><p>赋值的位置：</p><p>① 默认初始化</p><p>② 显式初始化</p><p>③ 构造器中初始化</p><p>④ 通过“对象.属性“或“对象.方法”的方式赋值</p></li><li><p>赋值的先后顺序：</p><p>① - ② - ③ - ④</p></li></ul><h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h2><h3 id="类方法的重写" tabindex="-1"><a class="header-anchor" href="#类方法的重写" aria-hidden="true">#</a> 类方法的重写：</h3><ol><li>子类重写的方法必须和父类被重写的方法具有相同的方法名称、参数列表</li><li>子类重写的方法的返回值类型<strong>不能大于</strong>父类被重写的方法的返回值类型</li><li>子类重写的方法使用的访问权限<strong>不能小于</strong>父类被重写的方法的访问权限</li></ol><ul><li>子类不能重写父类中声明为private权限的方法</li></ul><ol start="4"><li>子类方法抛出的异常<strong>不能大于</strong>父类被重写方法的异常</li></ol><p><strong>注意：子类与父类中同名同参数的方法必须同时声明为非static的(即为重写)，或者同时声明为</strong></p><p><strong>static的（不是重写）。因为static方法是属于类的，子类无法覆盖父类的方法。</strong></p><h3 id="super" tabindex="-1"><a class="header-anchor" href="#super" aria-hidden="true">#</a> super</h3><ul><li>子类中所有的构造器默认都会访问父类中空参数的构造器</li><li>当父类中没有空参数的构造器时，子类的构造器必须通过this(参数列表)或者super(参数列表)语句指定调用本类或者父类中相应的 构造器。同时，只能”二选一”，且必须放在构造器的首行</li><li>如果子类构造器中既未显式调用父类或本类的构造器，且父类中又没有无参的构造器，则编译出错</li></ul><table><thead><tr><th>NO.</th><th>区别点</th><th>this</th><th>super</th></tr></thead><tbody><tr><td>1</td><td>访问属性</td><td>访问本类中的属性，如果本类没有此属性则从父类中继续查找</td><td>直接访问父类中的属性</td></tr><tr><td>2</td><td>调用方法</td><td>访问本类中的方法，如果本类没有此方法则从父类中继续查找</td><td>直接访问父类中的方法</td></tr><tr><td>3</td><td>调用构造器</td><td>调用本类构造器，必须放在构造器的首行</td><td>调用父类构造器，必须放在子类构造器的首行</td></tr></tbody></table><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/Java.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const Java_html = (__exports__);

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
//# sourceMappingURL=110.app.js.map