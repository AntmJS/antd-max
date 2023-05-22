"use strict";(self.webpackChunkantd_max=self.webpackChunkantd_max||[]).push([[663],{4663:(s,a,n)=>{n.r(a),n.d(a,{default:()=>l});const l={tile:"InfiniteScroll无限滚动",docs:'<h1>InfiniteScroll 无限滚动</h1>\n<div class="card"><h3 id="%E4%BB%8B%E7%BB%8D"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>介绍</h3>\n<p>InfiniteScroll 组件在可见区域时自动加载更多数据。</p>\n</div><div class="card"><h3 id="%E5%BC%95%E5%85%A5"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>引入</h3>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">InfiniteScroll</span>, <span class="hljs-title class_">VirtualList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;antd-max&#x27;</span>\n</code></pre>\n</div><div class="card"><h3 id="%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>基本使用</h3>\n<ul>\n<li>可见区域为窗口，如果滚动区域不是窗体则通过<code>parentClassName</code>设置父元素类名</li>\n</ul>\n<p>代码案例</p>\n  <div class="demo-code-wrapper" id="infinite-scroll__demo-base_wrapper">\n  <div class="demo-code-box" id="infinite-scroll__demo-base"></div>\n  <div class="show-code-btn">\n  <svg t="1683506698040" class="icon" viewBox="0 0 1024 1024"  width="20" height="20"><path d="M753.6 611.52a32 32 0 1 1 28.8 56.96l-256 128a32 32 0 0 1-28.8 0l-256-128a32 32 0 0 1 28.8-56.96L512 732.16z m0-288a32 32 0 1 1 28.8 56.96l-256 128a32 32 0 0 1-28.8 0l-256-128a32 32 0 1 1 28.8-56.96L512 444.16z" p-id="2292"></path></svg>\n  </div>\n  <div class="code-box">\n <div class="demo-code-tabs"><div class="code-tab-name code-tab-name-active" id="name0">demo-base.tsx</div><div class="code-tab-name " id="name1">types.d.ts</div><div class="code-tab-name " id="name2">common.ts</div><div class="code-tab-name " id="name3">demo.less</div></div>\n<div class="code-item code-item0">\n<pre><code class="language-tsx"><span class="hljs-keyword">import</span> { useState, useRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">InfiniteScroll</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../index&#x27;</span>\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">InfiniteScrollInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../types&#x27;</span>\n<span class="hljs-keyword">import</span> { mockGoods } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./common&#x27;</span>\n<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;./demo.less&#x27;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [data, setdata] = useState&lt;<span class="hljs-built_in">any</span>&gt;([])\n  <span class="hljs-keyword">const</span> <span class="hljs-title class_">InfiniteScrollInstance</span> = useRef&lt;<span class="hljs-title class_">InfiniteScrollInstance</span>&gt;(<span class="hljs-literal">null</span>)\n\n  <span class="hljs-keyword">const</span> <span class="hljs-attr">loadMore</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-title class_">Promise</span>&lt;<span class="hljs-string">&#x27;complete&#x27;</span> | <span class="hljs-string">&#x27;loading&#x27;</span>&gt; = <span class="hljs-keyword">async</span> () =&gt; {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-keyword">async</span> (resolve) =&gt; {\n      <span class="hljs-keyword">const</span> reslult = <span class="hljs-keyword">await</span> <span class="hljs-title function_">mockGoods</span>()\n      <span class="hljs-keyword">const</span> <span class="hljs-attr">newData</span>: <span class="hljs-built_in">any</span>[] = data.<span class="hljs-title function_">concat</span>(reslult)\n      <span class="hljs-title function_">setdata</span>(newData)\n      <span class="hljs-comment">// 以下是简单的模拟请求，正常请求请按条件执行::::_QAresolve(&#x27;complete&#x27;)::::_QA</span>\n      <span class="hljs-title function_">resolve</span>(newData.<span class="hljs-property">length</span> &gt; <span class="hljs-number">10</span> ? <span class="hljs-string">&#x27;complete&#x27;</span> : <span class="hljs-string">&#x27;loading&#x27;</span>)\n    })\n  }\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">padding:</span> &#x27;<span class="hljs-attr">4px</span> <span class="hljs-attr">6px</span>&#x27;, <span class="hljs-attr">height:</span> <span class="hljs-attr">550</span>, <span class="hljs-attr">overflow:</span> &#x27;<span class="hljs-attr">scroll</span>&#x27; }}&gt;</span>\n      {data.map((item: any, index) =&gt; (\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n          <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;van-demo-goods-item-wrapper&quot;</span>\n          <span class="hljs-attr">key</span>=<span class="hljs-string">{</span>::::_QA<span class="hljs-attr">van-demo-goods-item-wrapper-infinite</span>::::_AB<span class="hljs-attr">index</span>}::::_QA}\n        &gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;van-demo-goods-item&quot;</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{item.image}</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;img&quot;</span> /&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;right-show&quot;</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>{item.title}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n              {item.isCutPrice &amp;&amp; <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;cutPrice&quot;</span>&gt;</span>最近大降价<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>}\n              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;price&quot;</span>&gt;</span>{item.price}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      ))}\n      <span class="hljs-tag">&lt;<span class="hljs-name">InfiniteScroll</span> <span class="hljs-attr">loadMore</span>=<span class="hljs-string">{loadMore}</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{InfiniteScrollInstance}</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n  )\n}\n\n</code></pre>\n</div>\n<div class="code-item code-item1">\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">FunctionComponent</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">IbaseProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../types/common&#x27;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">interface</span> <span class="hljs-title class_">InfiniteScrollProps</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_">IbaseProps</span> {\n  <span class="hljs-comment">/**\n   * <span class="hljs-doctag">@description</span> 类名\n   */</span>\n  className?: <span class="hljs-built_in">string</span>\n  <span class="hljs-comment">/**\n   * <span class="hljs-doctag">@description</span> 加载方法，初始化便触发，需要返回promise加上后续的状态\n   */</span>\n  <span class="hljs-attr">loadMore</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-title class_">Promise</span>&lt;<span class="hljs-string">&#x27;loading&#x27;</span> | <span class="hljs-string">&#x27;complete&#x27;</span> | <span class="hljs-string">&#x27;error&#x27;</span>&gt;\n  <span class="hljs-comment">/**\n   * <span class="hljs-doctag">@description</span> 所在父级的类名，不设置的话，相对于窗口计算InfiniteScroll的位置\n   */</span>\n  parentClassName?: <span class="hljs-built_in">string</span>\n  <span class="hljs-comment">/**\n   * <span class="hljs-doctag">@description</span> 加载完成文案\n   * <span class="hljs-doctag">@default</span> ::::_QA没有更多了～::::_QA\n   */</span>\n  completeText?: <span class="hljs-title class_">React</span>.<span class="hljs-property">ReactNode</span>\n  <span class="hljs-comment">/**\n   * <span class="hljs-doctag">@description</span> 加载文案\n   * <span class="hljs-doctag">@default</span> ::::_QA加载中...::::_QA\n   */</span>\n  loadingText?: <span class="hljs-title class_">React</span>.<span class="hljs-property">ReactNode</span>\n  <span class="hljs-comment">/**\n   * <span class="hljs-doctag">@description</span> 重新加载按钮\n   * <span class="hljs-doctag">@default</span> ::::_QA重新加载::::_QA\n   */</span>\n  reloadText?: <span class="hljs-title class_">React</span>.<span class="hljs-property">ReactNode</span>\n  <span class="hljs-comment">/**\n   * <span class="hljs-doctag">@description</span> 错误状态文案\n   * <span class="hljs-doctag">@default</span> ::::_QA加载失败::::_QA\n   */</span>\n  errorText?: <span class="hljs-title class_">React</span>.<span class="hljs-property">ReactNode</span>\n  <span class="hljs-comment">/**\n   * <span class="hljs-doctag">@description</span> 自定义完成状态的渲染\n   */</span>\n  renderComplete?: <span class="hljs-title class_">React</span>.<span class="hljs-property">ReactNode</span>\n  <span class="hljs-comment">/**\n   * <span class="hljs-doctag">@description</span> 自定义loading状态的渲染\n   */</span>\n  renderLoading?: <span class="hljs-title class_">React</span>.<span class="hljs-property">ReactNode</span>\n  <span class="hljs-comment">/**\n   * <span class="hljs-doctag">@description</span> 自定义error状态的渲染\n   */</span>\n  renderError?: <span class="hljs-title class_">React</span>.<span class="hljs-property">ReactNode</span>\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">interface</span> <span class="hljs-title class_">InfiniteScrollInstance</span> {\n  <span class="hljs-comment">/**\n   * <span class="hljs-doctag">@description</span> 重置加载状态\n   */</span>\n  <span class="hljs-attr">reset</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-title class_">Promise</span>&lt;<span class="hljs-literal">null</span>&gt;\n}\n\n<span class="hljs-keyword">declare</span> <span class="hljs-keyword">const</span> <span class="hljs-title class_">InfiniteScroll</span>: <span class="hljs-title class_">FunctionComponent</span>&lt;<span class="hljs-title class_">InfiniteScrollProps</span>&gt;\n\n<span class="hljs-keyword">export</span> { <span class="hljs-title class_">InfiniteScroll</span> }\n\n</code></pre>\n</div>\n<div class="code-item code-item2">\n<pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> <span class="hljs-title function_">mockGoods</span> = (<span class="hljs-params"></span>) =&gt; {\n  <span class="hljs-keyword">const</span> initData = [\n    {\n      <span class="hljs-attr">image</span>: <span class="hljs-string">&#x27;https://img.yzcdn.cn/vant/cat.jpeg&#x27;</span>,\n      <span class="hljs-attr">title</span>:\n        <span class="hljs-string">&#x27;中老年羽绒服男冬季爸爸装薄短款白鸭绒中年人男士保暖外套男装 夜空黑 L【建议115斤以内】&#x27;</span>,\n      <span class="hljs-attr">price</span>: <span class="hljs-string">&#x27;¥165.00&#x27;</span>,\n    },\n    {\n      <span class="hljs-attr">image</span>: <span class="hljs-string">&#x27;https://img.yzcdn.cn/vant/cat.jpeg&#x27;</span>,\n      <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;HLA海澜之家马丁靴男士高帮男靴复古工装鞋&#x27;</span>,\n      <span class="hljs-attr">price</span>: <span class="hljs-string">&#x27;¥361.00&#x27;</span>,\n    },\n    {\n      <span class="hljs-attr">image</span>: <span class="hljs-string">&#x27;https://img.yzcdn.cn/vant/cat.jpeg&#x27;</span>,\n      <span class="hljs-attr">title</span>:\n        <span class="hljs-string">&#x27;洁丽雅拖鞋男夏浴室洗澡防滑家居室内EVA大码男士凉拖鞋居家用夏季防臭 灰色 41-42【标准码】&#x27;</span>,\n      <span class="hljs-attr">price</span>: <span class="hljs-string">&#x27;¥22.50&#x27;</span>,\n    },\n    {\n      <span class="hljs-attr">image</span>: <span class="hljs-string">&#x27;https://img.yzcdn.cn/vant/cat.jpeg&#x27;</span>,\n      <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;夏季新款男士T恤宽松气质高端百搭时尚短袖体恤潮牌&#x27;</span>,\n      <span class="hljs-attr">price</span>: <span class="hljs-string">&#x27;¥212.00&#x27;</span>,\n    },\n  ]\n  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {\n    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-title function_">resolve</span>(\n        <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">8</span>).<span class="hljs-title function_">fill</span>(<span class="hljs-string">&#x27;&#x27;</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">_, index</span>) =&gt;</span> {\n          <span class="hljs-keyword">return</span> {\n            index,\n            ...initData[index % <span class="hljs-number">4</span>],\n            <span class="hljs-attr">isCutPrice</span>: index % <span class="hljs-number">2</span> === <span class="hljs-number">0</span> ? <span class="hljs-literal">true</span> : <span class="hljs-literal">false</span>,\n          }\n        }),\n      )\n    }, <span class="hljs-number">1400</span>)\n  })\n}\n\n</code></pre>\n</div>\n<div class="code-item code-item3">\n<pre><code class="language-less"><span class="hljs-selector-class">.van-demo-goods-item-wrapper</span> {\n  <span class="hljs-attribute">height</span>: fit-content;\n  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">8px</span>;\n  <span class="hljs-attribute">overflow</span>: hidden;\n  <span class="hljs-attribute">position</span>: relative;\n}\n\n<span class="hljs-selector-class">.van-demo-goods-item</span> {\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;\n  <span class="hljs-attribute">display</span>: flex;\n  <span class="hljs-attribute">align-items</span>: center;\n  <span class="hljs-attribute">background</span>: <span class="hljs-number">#ffffff</span>;\n  <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">16px</span>;\n  <span class="hljs-attribute">border</span>: <span class="hljs-number">8px</span>;\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">4px</span>;\n\n  <span class="hljs-selector-class">.img</span> {\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">120px</span>;\n    <span class="hljs-attribute">width</span>: <span class="hljs-number">130px</span>;\n    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">8px</span>;\n  }\n\n  <span class="hljs-selector-class">.title</span> {\n    <span class="hljs-attribute">text-align</span>: left;\n    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;\n    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">17px</span>;\n    <span class="hljs-attribute">color</span>: <span class="hljs-number">#434343</span>;\n    <span class="hljs-attribute">padding</span>: <span class="hljs-number">6px</span>;\n  }\n\n  <span class="hljs-selector-class">.price</span> {\n    <span class="hljs-attribute">padding</span>: <span class="hljs-number">6px</span>;\n    <span class="hljs-attribute">text-align</span>: left;\n    <span class="hljs-attribute">color</span>: <span class="hljs-number">#ff4142</span>;\n    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;\n  }\n\n  <span class="hljs-selector-class">.cutPrice</span> {\n    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#fff0f6</span>;\n    <span class="hljs-attribute">color</span>: <span class="hljs-number">#ff2078</span>;\n    <span class="hljs-attribute">padding</span>: <span class="hljs-number">3px</span> <span class="hljs-number">4px</span>;\n    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">3px</span>;\n    <span class="hljs-attribute">display</span>: inline-block;\n    <span class="hljs-attribute">margin-left</span>: <span class="hljs-number">9px</span>;\n    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;\n    <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">6px</span>;\n  }\n}\n\n</code></pre>\n</div>\n  </div>\n  </div>\n</div><div class="card"><h3 id="InfiniteScrollProps"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>InfiniteScrollProps</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>必填</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>className</td>\n<td>类名</td>\n<td><em>  string<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>loadMore</td>\n<td>加载方法，初始化便触发，需要返回 promise 加上后续的状态</td>\n<td><em>  () =&gt; Promise&lt;<br/>    ¦ &quot;loading&quot;<br/>    ¦ &quot;complete&quot;<br/>    ¦ &quot;error&quot;<br/>  &gt;<br/></em></td>\n<td>-</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>parentClassName</td>\n<td>所在父级的类名，不设置的话，相对于窗口计算 InfiniteScroll 的位置</td>\n<td><em>  string<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>completeText</td>\n<td>加载完成文案</td>\n<td><em>  React.ReactNode<br/></em></td>\n<td><code>没有更多了～</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>loadingText</td>\n<td>加载文案</td>\n<td><em>  React.ReactNode<br/></em></td>\n<td><code>加载中...</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>reloadText</td>\n<td>重新加载按钮</td>\n<td><em>  React.ReactNode<br/></em></td>\n<td><code>重新加载</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>errorText</td>\n<td>错误状态文案</td>\n<td><em>  React.ReactNode<br/></em></td>\n<td><code>加载失败</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>renderComplete</td>\n<td>自定义完成状态的渲染</td>\n<td><em>  React.ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>renderLoading</td>\n<td>自定义 loading 状态的渲染</td>\n<td><em>  React.ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>renderError</td>\n<td>自定义 error 状态的渲染</td>\n<td><em>  React.ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="InfiniteScrollInstan"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>InfiniteScrollInstance</h3>\n<table>\n<thead>\n<tr>\n<th>方法</th>\n<th>说明</th>\n<th>类型</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>reset</td>\n<td>重置加载状态</td>\n<td><em>  () =&gt; Promise<null><br/></em></td>\n</tr>\n</tbody>\n</table>\n</div>',h3Ids:"介绍:::引入:::基本使用:::InfiniteScrollProps:::InfiniteScrollInstan",codePath:["infinite-scroll__demo-base"]}}}]);