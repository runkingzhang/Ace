
# Getting Start

## <a name='TOC'>内容列表</a>

  1. [html书写顺序](#html)
  1. [css书写顺序](#objects)
  1. [注释规范](#note)

### <a name="html">html书写顺序</a>
html属性顺序。 HTML 属性应当按照以下给出的顺序依次排列，确保代码的易读性。

•	class
•	id, name
•	data-*
•	src, for, type, href
•	title, alt
•	aria-*
•	role*

使用下面介绍的fires的书写方式来书写，模块之间可以相互嵌套。
利用 同一套html 通过css层叠机制控制，不同样式来实例原型，构件对应的样式内容。

使用
```
<div class="mod-box new-mod-box-margin">
```
的来实例原型。
mod-box 当作是一个box的原型
new-mod-box-margin 当作一个box的实例




### <a name="css">css书写顺序</a>

css书写顺序声明顺序。 相关的属性声明应当归为一组，并按照下面的顺序排列：
- Positioning
- Box model
- Typographic

在组件中，一般情况下css的书写书序如下。

```css
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* Box-model */
  display: block;
  float: right;
  width: 100px;
  height: 100px;
  padding:10px;
  margin:10px;
  border: 1px solid #e5e5e5;
  border-radius: 3px;

  /* Typography */
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  color: #333;
  text-align: center;

  /* Visual */
  background-color: #f5f5f5;


  /* Misc */
  opacity: 1;
}
```

##	<a name="note">注释规范</a>
注释旨在指明团队协作中的创作、个性者和代码作用。在 CSS 中，无论块组还是单行注释，均使用  
```html
/* 注释 */。
```
由于中文注释可能导致代码失效，但中文作为团队最有效的沟通文字，最好的使用方法是，保证在 
```html
/*  和  */ 
```
之间的中文前后都有空格，以保证 CSS 不会失效。

在组件中，主要使用的两种注释如下：
```css
/* mod-box model层的box模块                                                         --- 简单描述
 * author: runkingzhang@163.com                                                     --- 作者
 * require: button                                                                  --- 依赖（可选）
 * father:                                                                          --- 基类（可选,当构建实体的时候需要填写）
 */

.mod-box{
font-family:serif\0/; /* solution:win7 ie8 line-height bug */      --- 行内注释
}

/* new-mod-box-favar  model层的box模块的实例                                        --- 简单描述
 * author: runkingzhang@163.com                                                     --- 作者
 * require:                                                                         --- 依赖（可选）
 * father:   mod-box                                                                --- 基类（可选）
 */
```


## 模块命名规范
<!--这边的书写写的还是不好的，自己要注意对这一块的把我。-->
### 页面LMC分层

把页面的HTML结构分为分类三层。

- layout 层 **: 主要控制页面大区块的布局，典型模块是header

*lay-+ {位置}-+ [名称(可选)]*
```css
.lay-header{}
.lay-container{}
.lay-content{}
.lay-footer{}
```

- model层 **: 主要页面可以前台的模块，box，tab

*mod-+ [名称]-+ [名称(可选)]*
```css
.mod-box{border: 1px solid #F5F5F5; width:100%;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);}
.mod-box-head{}
.mod-box-head-title{ float: left;display: inline; font-weight:normal; }
.mod-box-head-text{ float: left;; display: inline; margin: 0 0 0 10px;}
.mod-box-head-more{ float: right; color:#999;}
.mod-box-container{ min-height:10px;}
.mod-box-content{}
```
model层每个子模块都有对应的名称，直接使用class选择区而不使用之类选择器，之类选择器在子类中使用。 每个model模块应该是一个整体，所以建议将一些方法出行（如浮动的清楚）内置在模块中间。
不要出现在其他地方使用后mod，然后是对上级模块和子模块产生影响。


- **content层 **: 组要控制页面的内容展现样式，典型是内容的左右布局和list

*con-+ [名称]-+ [名称(可选)]*
```css
.con-shop-box{}
.con-shop-left{ }
.con-shop-right{}
```

content层的每个子模块都有对应的名称，直接使用class选择器而不使用父类选择器，父类选择器在实例中使用。通过css重叠机制实现实例代码对原型代码的重写。

这三层应该是相互分离的，相互嵌套的。理论上来说不应该有属性跨层次继承和相互影响。 单独模块的html+css组合应该可以应用到其他的环境中，层次之间不应该纯在相互依赖的关系。
content中的排版和字体，应该提取到公用模块上面来，单独使用type.css来整体定义页面文字展现。


###	原型和实例

把layout，model，content层中的模块当做是原型模块。

```html
<div class="mod-box new-mod-box">
      <div class="mod-box-head"></div>
      <div class="mod-box-content"></div>
</div>
```

像上面的这种方式来对模块在页面的中使用，用new来创建原型实例。
在页面开发中用mod-box来提取出页面中模块的共用样式，组建相关模块，用new-mod-box来实现模块的在页面的应用。


- new-+[lay/mod/content模块名]-+[实例名称]

利用css的引入方法的优先级，css的权重计算和css的书写顺序来对原来模块中的css属性值进行重叠。
```css
.new-mod-box-promoted{ margin:15px 0 0 0;}
.new-mod-box-promoted  .mod-box-head{ height:40px;}
```
实例原型的css应该写在原型属性的下方，会对css进行重叠。这是通过css书写顺序实现的。 对模块的子模块的属性重写和设置都通过在原有子模块的前面+实例模块名称的方式来实现。 在css中实例和模型应该写在一起。
如果只是一些单独的margin和padding这些布局，也可以直接使用.mgt{margin:15px 0 0 0;}这样的原子类。



### 栅格系统
Puerh 使用 980px 宽、20 栏（每栏 30px）、10px 间隙的栅格系统。内容区域为 980px，撑开宽度为 1000px。所有栅格必须包含到   .container   内。使用  .grid   模块，扩展名   .grid-N   N 代表 1~20 中的任意整数。具体的使用如下：


```html
<h1 class="typo-h1">
                   980px Gridset Demo
                </h1>
                <div id="grid-demo" class="container">
                    <div class="lay-grid lay-grid-20">
                        lay-grid-20
                    </div>
                    <div class="lay-grid lay-grid-1">
                        1
                    </div>
                    <div class="lay-grid lay-grid-2">
                        lay-grid-2
                    </div>
                    <div class="lay-grid lay-grid-3">
                        lay-grid-3
                    </div>
                    <div class="lay-grid lay-grid-4">
                        lay-grid-4
                    </div>
                    <div class="lay-grid lay-grid-10 last">
                        lay-grid-10
                    </div>
                    <div class="lay-maincol">
                        maincol
                    </div>
                    <div class="lay-sidecol last">
                        sidecol
                    </div>
                </div>
```
点击查看demo


<!--
### 排版类：TYPO.CSS
这个库不同于一般的 CSS Reset，在提供 Reset 的同时，提供适合中文并且最大化兼容种系统的排版方法。在需要排版的地方使用  .typo  作为父容器的类，或在单独需要使用的时候，使用  .typo-TAGNAME  的方式单独使用。具体使用方式参考：
```html
// 在 b .typo 内使用标签，将对应相应语义显示
<div class="typo">
 <h3>Title</h3>
 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
 <ul>
  <li>item 1</li>
  <li>item 2</li>
 </ul>
 ..
</div>
// 在没有 .typo 的情况下使用 b .typo-TAGNAME
<h3 class="typo-h3">Title</h3>
<ul class="typo-ul">
  <li>item 1</li>
  <li>item 2</li>
</ul>
```-->



###	小工具
小工具中时归纳了一些常见的css类名称和内容。
CLEARFIX: 清理浮动，在浮动元素的父节点添加。
```html
<ul class="clearfix">
    <li class="float-item">…</li>
    <li class="float-item">…</li>
..
</ul>
```


###	兼容：CSS Hack
兼容是 CSS 中最大的难点。各种 hack 可以帮助你快速解决问题，但不一定是解决问题的真正方法。所以，hack 应该尽量避免使用。很多时候都是写法决定 bug，在有时间允许的情况下，请多进行测试以找到最佳方式。
```css
.all-IE{property:value\9;}
:root .IE-9{property:value\0/;}
.gte-IE-8{property:value\0;}
.lte-IE-7{*property:value;}
.IE-7{+property:value;}
.IE-6{_property:value;}
.not-IE{property//:value;}
@-moz-document url-prefix() { .firefox{property:value;} }
@media all and (-webkit-min-device-pixel-ratio:0) { .webkit{property:value;} }
@media all and (-webkit-min-device-pixel-ratio:10000),not all and (-webkit-min-device-pixel-ratio:0) { .opera{property:value;} }
@media screen and (max-device-width: 480px) { .iphone-or-mobile-s-webkit{property:value;} }
```

目前在网站中会自动添加 body class，显示方式如下：  浏览器   版本号   系统名 
```html
// 在 Body 中加 class
<body class='firefox firefox-12 mac'>
 
// 目前支持的 class name
浏览器：.firefox / .chrome / .safari / .ie / .opera / .maxthon / .netscape
版本号：浏览器版本号取整：比如 firefox 12.03 会显示 firefox-12
系统名：.mac / .win / .vista / .win7 / .ubuntu / .linux
 
// 标记与使用：
文件：Browser.php (/lib/)
调用：Browser::detect()
```
通过body的重叠机制来实现兼容性的调试。

          
注意：别用轻易使用hack，IE下很多兼容性问题都是 has Layout 引起的。试着给元素加上:
```css
display: inline-blockheight: (除 auto外任何值)
width: (除 auto外任何值)
float: (left或 right)
position: absolutewriting-mode: tb-rlzoom: (除 normal外任意值)

```


## JavaScript 组件

Spade Ace 使用 Twitter Bootstrap 库的自定义 Javascript 插件。在这个基础上对Javascript插件做了一定的改造。

提取几个常用的javascript的逐渐内容信息。

如果在项目中有特殊的需求，也可以自己书写对应的Javascript和html,css做相关的配合。










          






