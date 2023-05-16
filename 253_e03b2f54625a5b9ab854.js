"use strict";(self.webpackChunk_antmjs_antd_max=self.webpackChunk_antmjs_antd_max||[]).push([[253],{7253:(s,a,n)=>{n.r(a),n.d(a,{default:()=>t});const t={tile:"form-box表单盒子",docs:'<h1>form-box 表单盒子</h1>\n<div class="card"><h3 id="%E4%BB%8B%E7%BB%8D"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>介绍</h3>\n<p>基于<code>antd.Form</code>实现配置化渲染表单，统一管理表单信息，支持自定义扩展表单组件</p>\n</div><div class="card"><h3 id="%E5%BC%95%E7%94%A8"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>引用</h3>\n<pre><code class="language-tsx"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormBox</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@antmjs/antd-max&#x27;</span>\n</code></pre>\n</div><div class="card"><h3 id="%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>基本使用</h3>\n<p>当前默认支持 <code>input</code>、<code>select</code>、<code>timePicker</code>、<code>cascader</code>、<code>treeSelect</code>、<code>monthPicker</code>、<code>rangePicker</code>组件</p>\n<p>组件案例</p>\n<div class="demo-code-wrapper" id="form-box__demo-base_wrapper">\n<div class="demo-code-box" id="form-box__demo-base"></div>\n<div class="show-code-btn">\n<svg t="1683506698040" class="icon" viewBox="0 0 1024 1024"  width="20" height="20"><path d="M753.6 611.52a32 32 0 1 1 28.8 56.96l-256 128a32 32 0 0 1-28.8 0l-256-128a32 32 0 0 1 28.8-56.96L512 732.16z m0-288a32 32 0 1 1 28.8 56.96l-256 128a32 32 0 0 1-28.8 0l-256-128a32 32 0 1 1 28.8-56.96L512 444.16z" p-id="2292"></path></svg>\n</div>\n<div class="code-box">\n<div class="demo-code-tabs"><div class="code-tab-name code-tab-name-active" id="name0">demo-base.tsx</div><div class="code-tab-name " id="name1">demo-types.ts</div></div>\n<div class="code-item code-item0">\n<pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-title class_">FormMax</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../index&#x27;</span>\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ISearchParams</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./demo-types&#x27;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Index</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">return</span> (\n    &lt;<span class="hljs-title class_">FormMax</span>&lt;<span class="hljs-title class_">ISearchParams</span>&gt;\n      queryInit\n      actions={[\n        {\n          <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;default&#x27;</span>,\n          <span class="hljs-attr">children</span>: <span class="hljs-string">&#x27;重置&#x27;</span>,\n          <span class="hljs-attr">fType</span>: <span class="hljs-string">&#x27;reset&#x27;</span>,\n        },\n        {\n          <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;primary&#x27;</span>,\n          <span class="hljs-attr">children</span>: <span class="hljs-string">&#x27;搜索&#x27;</span>,\n          <span class="hljs-attr">onClick</span>: <span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {\n            <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {\n              <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n                <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">info</span>(res)\n                <span class="hljs-title function_">resolve</span>(<span class="hljs-literal">null</span>)\n              }, <span class="hljs-number">2000</span>)\n            })\n          },\n          <span class="hljs-attr">async</span>: <span class="hljs-literal">true</span>,\n        },\n      ]}\n      config={[\n        {\n          <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;name&#x27;</span>,\n          <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;用户名称&#x27;</span>,\n          <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;input&#x27;</span>,\n        },\n        {\n          <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;select&#x27;</span>,\n          <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;下拉搜索&#x27;</span>,\n          <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;select&#x27;</span>,\n          <span class="hljs-attr">props</span>: {\n            <span class="hljs-attr">options</span>: [\n              { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;选项1&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;key1&#x27;</span> },\n              { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;选项2&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;key2&#x27;</span> },\n            ],\n          },\n        },\n        {\n          <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;time&#x27;</span>,\n          <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;日期选择&#x27;</span>,\n          <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;timePicker&#x27;</span>,\n        },\n        {\n          <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;month&#x27;</span>,\n          <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;月份选择&#x27;</span>,\n          <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;monthPicker&#x27;</span>,\n        },\n        {\n          <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;creatTime&#x27;</span>,\n          <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;创建时间&#x27;</span>,\n          <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;rangePicker&#x27;</span>,\n        },\n        {\n          <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;treeSelect&#x27;</span>,\n          <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;树选择&#x27;</span>,\n          <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;treeSelect&#x27;</span>,\n          <span class="hljs-attr">props</span>: {\n            <span class="hljs-attr">treeData</span>: [],\n          },\n        },\n        {\n          <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;cascader&#x27;</span>,\n          <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;树选择&#x27;</span>,\n          <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;cascader&#x27;</span>,\n          <span class="hljs-attr">props</span>: {\n            <span class="hljs-attr">options</span>: [],\n          },\n        },\n      ]}\n    /&gt;\n  )\n}\n\n</code></pre>\n</div>\n<div class="code-item code-item1">\n<pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">type</span> <span class="hljs-title class_">ISearchParams</span> = {\n  name?: <span class="hljs-built_in">string</span>\n  select?: <span class="hljs-built_in">number</span>\n  time?: <span class="hljs-built_in">number</span>\n  treeSelect?: <span class="hljs-built_in">number</span>\n  month?: <span class="hljs-built_in">string</span>\n  cascader?: <span class="hljs-built_in">string</span>\n  creatTime?: <span class="hljs-built_in">string</span>\n}\n\n</code></pre>\n</div>\n</div>\n</div>\n</div><div class="card"><h3 id="%E6%89%A9%E5%B1%95%E7%BB%84%E4%BB%B6"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>扩展组件</h3>\n<p>通过<code>FormBox.register</code>方法来扩展组件</p>\n<p>如下重新定义<code>FormBox</code>, 扩展一个<code>imageUploader</code>图片上传组件</p>\n<p>然后就可以使用<code>imageUploader</code>图片上传组件</p>\n<div class="demo-code-wrapper" id="form-box__demo-register_wrapper">\n<div class="demo-code-box" id="form-box__demo-register"></div>\n<div class="show-code-btn">\n<svg t="1683506698040" class="icon" viewBox="0 0 1024 1024"  width="20" height="20"><path d="M753.6 611.52a32 32 0 1 1 28.8 56.96l-256 128a32 32 0 0 1-28.8 0l-256-128a32 32 0 0 1 28.8-56.96L512 732.16z m0-288a32 32 0 1 1 28.8 56.96l-256 128a32 32 0 0 1-28.8 0l-256-128a32 32 0 1 1 28.8-56.96L512 444.16z" p-id="2292"></path></svg>\n</div>\n<div class="code-box">\n<div class="demo-code-tabs"><div class="code-tab-name code-tab-name-active" id="name0">demo-register.tsx</div><div class="code-tab-name " id="name1">form-max-extra.tsx</div></div>\n<div class="code-item code-item0">\n<pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-title class_">FormMax</span>_ <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./form-max-extra&#x27;</span>\n\n<span class="hljs-keyword">type</span> <span class="hljs-title class_">ISearchParams</span> = {\n  <span class="hljs-attr">images</span>: <span class="hljs-built_in">string</span>[]\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Index</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">return</span> (\n    &lt;<span class="hljs-title class_">FormMax</span>_&lt;<span class="hljs-title class_">ISearchParams</span>&gt;\n      actions={[\n        {\n          <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;primary&#x27;</span>,\n          <span class="hljs-attr">children</span>: <span class="hljs-string">&#x27;提交&#x27;</span>,\n          <span class="hljs-attr">onClick</span>: <span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">info</span>(res),\n        },\n      ]}\n      config={[\n        {\n          <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;images&#x27;</span>,\n          <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;上传图片&#x27;</span>,\n          <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;imageUploader&#x27;</span>,\n        },\n      ]}\n    /&gt;\n  )\n}\n\n</code></pre>\n</div>\n<div class="code-item code-item1">\n<pre><code class="language-tsx"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Upload</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;antd&#x27;</span>\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">IFormMaxItemProps</span>, <span class="hljs-title class_">IFormMaxProps</span>, <span class="hljs-title class_">InternalType</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../types&#x27;</span>\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">FormMax</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../index&#x27;</span>\n\n<span class="hljs-keyword">interface</span> <span class="hljs-title class_">IFormMaxItemPropsNew</span>&lt;T&gt; <span class="hljs-keyword">extends</span> <span class="hljs-title class_">IFormMaxItemProps</span>&lt;T&gt; {\n  <span class="hljs-attr">type</span>: <span class="hljs-title class_">InternalType</span> | <span class="hljs-string">&#x27;imageUploader&#x27;</span>\n}\n\n<span class="hljs-keyword">interface</span> <span class="hljs-title class_">IFormMaxPropsNew</span>&lt;T&gt; <span class="hljs-keyword">extends</span> <span class="hljs-title class_">IFormMaxProps</span>&lt;T&gt; {\n  <span class="hljs-attr">config</span>: <span class="hljs-title class_">IFormMaxItemPropsNew</span>&lt;T&gt;[]\n}\n\n<span class="hljs-keyword">const</span> <span class="hljs-title function_">normFile</span> = (<span class="hljs-params">e: <span class="hljs-built_in">any</span></span>) =&gt; {\n  <span class="hljs-keyword">if</span> (<span class="hljs-title class_">Array</span>.<span class="hljs-title function_">isArray</span>(e)) {\n    <span class="hljs-keyword">return</span> e\n  }\n  <span class="hljs-keyword">return</span> e?.<span class="hljs-property">fileList</span>\n}\n\n<span class="hljs-title class_">FormMax</span>.<span class="hljs-title function_">resiterComponent</span>({\n  <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;imageUploader&#x27;</span>,\n  <span class="hljs-attr">component</span>: <span class="hljs-title class_">Upload</span>,\n  <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#x27;onChange&#x27;</span>,\n  <span class="hljs-attr">valuePropName</span>: <span class="hljs-string">&#x27;fileList&#x27;</span>,\n  <span class="hljs-attr">getValueFromEvent</span>: normFile,\n  <span class="hljs-attr">transformProps</span>: <span class="hljs-function">(<span class="hljs-params">props</span>) =&gt;</span> {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">action</span>: <span class="hljs-string">&#x27;/upload.do&#x27;</span>,\n      <span class="hljs-attr">listType</span>: <span class="hljs-string">&#x27;picture-card&#x27;</span>,\n      <span class="hljs-attr">children</span>: <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">marginTop:</span> <span class="hljs-attr">8</span> }}&gt;</span>上传<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>,\n      ...props,\n    }\n  },\n})\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title class_">FormMax</span>_&lt;T&gt;(<span class="hljs-attr">props</span>: <span class="hljs-title class_">IFormMaxPropsNew</span>&lt;T&gt;) {\n  <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">FormMax</span> {<span class="hljs-attr">...props</span>} /&gt;</span></span>\n}\n\n</code></pre>\n</div>\n</div>\n</div>\n<p>自定义组件需要设置<a href="https://ant.design/components/form-cn#formitem"><code>antd.FormItemProps</code></a>的属性, 如:</p>\n<ul>\n<li>getValueFromEvent： 设置如何将 event 的值转换成字段值</li>\n<li>trigger：设置收集字段值变更的时机</li>\n<li>validateTrigger： 设置字段校验的时机</li>\n<li>valuePropName： 子节点的值的属性，如 Switch 的是 \'checked\'。该属性为 getValueProps 的封装，自定义 getValueProps 后会失效</li>\n</ul>\n</div><div class="card"><h3 id="IFormBoxProps"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>IFormBoxProps</h3>\n<p><code>FormBox&lt;T&gt;</code>组件的 props 类型说明如下</p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>queryInit</td>\n<td>用地址中的参数初始化表单</td>\n<td><code>boolean</code></td>\n</tr>\n<tr>\n<td>config</td>\n<td>表单渲染配置</td>\n<td><code>IFormBoxItemProps&lt;T&gt;[]</code></td>\n</tr>\n<tr>\n<td>actions</td>\n<td>表单渲染配置, 继承 antd 的<code>ButtonProps</code></td>\n<td><code>ButtonProps[]</code></td>\n</tr>\n<tr>\n<td>defaultValues</td>\n<td>表单初始化, 默认<code>false</code></td>\n<td><code>T</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="IFormBoxItemProps"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>IFormBoxItemProps</h3>\n<p><code>config</code>的配置项<code>IFormBoxItemProps&lt;T&gt;</code>继承了<a href="https://ant.design/components/form-cn#formitem">antd.FormItemProps</a> ,类型如下</p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>支持的组件的名称</td>\n<td><code>\'timePicker\'/ \'monthPicker\'/ \'rangePicker\'/\'cascader\'/\'treeSelect\'/\'input\'/\'select\'</code></td>\n</tr>\n<tr>\n<td>props</td>\n<td>表单组件的参数</td>\n<td><code>Record&lt;string, any&gt;</code></td>\n</tr>\n<tr>\n<td>key</td>\n<td>表单字段名称</td>\n<td><code>keyof T</code></td>\n</tr>\n<tr>\n<td>label</td>\n<td>表单 label</td>\n<td><code>string</code></td>\n</tr>\n<tr>\n<td>col</td>\n<td>大屏幕 24 分中占比, 默认<code>8</code></td>\n<td><code>number</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="ButtonProps"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>ButtonProps</h3>\n<p><code>action</code>下的每一项继承了<a href="https://ant.design/components/button-cn#api"><code>antd.ButtonProps</code></a>\n内部其他类型如下：</p>\n<pre><code class="language-ts"><span class="hljs-keyword">interface</span> <span class="hljs-title class_">ButtonProps</span>_&lt;T&gt; <span class="hljs-keyword">extends</span> <span class="hljs-title class_">ButtonProps</span> {\n  <span class="hljs-comment">// 点击事件回调返回表单数据</span>\n  onClick?: <span class="hljs-function">(<span class="hljs-params">result: T</span>) =&gt;</span> <span class="hljs-built_in">void</span>\n  <span class="hljs-comment">// 重置表单操作</span>\n  fType?: <span class="hljs-string">&#x27;reset&#x27;</span>\n  <span class="hljs-comment">// 是否开启异步按钮</span>\n  <span class="hljs-keyword">async</span>?: <span class="hljs-built_in">boolean</span>\n}\n</code></pre>\n</div><div class="card"><h3 id="IRegisterFormParams"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>IRegisterFormParams</h3>\n<p>FormBox.<code>showComponents</code> 和 FormBox.<code>registerComponent</code> 的方法：</p>\n<pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">IRegisterForm</span> = <span class="hljs-function">(<span class="hljs-params">params: IRegisterFormParams</span>) =&gt;</span> <span class="hljs-built_in">void</span>\n<span class="hljs-keyword">type</span> showComponents = <span class="hljs-function">() =&gt;</span> <span class="hljs-title class_">Record</span>&lt;<span class="hljs-built_in">string</span>, <span class="hljs-title class_">IRegisterFormParams</span>&gt;\n</code></pre>\n<p>IRegisterFormParams 类型, 继承了<a href="https://ant.design/components/form-cn#formitem"><code>antd.FormItem.Props</code></a>，内部类型说明如下:</p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>组件名称</td>\n<td><code>string</code></td>\n</tr>\n<tr>\n<td>component</td>\n<td>组件方法</td>\n<td><code>any</code></td>\n</tr>\n<tr>\n<td>transformValue</td>\n<td>转换提交的时候的表单数据</td>\n<td><code>(fields: any) =&gt; any</code></td>\n</tr>\n<tr>\n<td>transformDefaultValue</td>\n<td>转换初始化的时候的 defaultValue</td>\n<td><code>(fields: any) =&gt; any</code></td>\n</tr>\n<tr>\n<td>transformProps</td>\n<td>转换传给组件的参数, <code>formItemProps</code>目前只有 label</td>\n<td><code>(props, formItemProps) =&gt; any</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="FormInstance"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>FormInstance</h3>\n<p>通过<code>useRef</code>和<code>ref</code>获取，与<a href="https://ant.design/components/form-cn#forminstance"><code>antd.FormInstance</code></a>保持一致</p>\n</div>',h3Ids:"介绍:::引用:::基本使用:::扩展组件:::IFormBoxProps:::IFormBoxItemProps:::ButtonProps:::IRegisterFormParams:::FormInstance",codePath:["form-box__demo-base","form-box__demo-register"]}}}]);