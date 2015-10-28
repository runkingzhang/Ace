# Fires
## 前言
- Fires 的名字来自多火，我以前在在的团队，中文名字叫做艾斯，来自海贼王的火拳艾斯。
- Fires 星星之火，可以燎原。
- Fires 是一种解决方案，并不是一个框架。
- Fires 是火柴，并不是火把。
- Fires是基于原型，面向设计开发的前端解决方案。


## 设计思想

设计思想参考：MVC思想，面向对象和基于原型

理论基础：标准盒子模型，CSS分类、书写顺序和继承,CSS层叠机制 (优先级和权重) ,CSS拉伸和包裹 ,浏览器对CSS的解析机制 。

## 从面向效果的开发向面向设计开发的转变

前端一般将页面开发分为内容（HTML），样式（CSS），行为（Javascript）。
在页面开发的时候做到相互分离，其实我感觉这边有一个MVC思想的延伸，
我们把HTML看做是View，是内容，是数据，
把CSS看做是Model看做是容器，是模型，
把Javascript看做是Controller是控制，是行为。

在以往的开发中，我们一般是做出一个页面，做出一个网站，给每个页面效果都写HTML和CSS实现，
后来我们有了html语义化的要求，有了CSS模块化的要求。

fires在这个基础上在对内容（HTML）和样式（CSS）借鉴MVC的思想来进行细分。
HTML分为layout（布局层）、model（模型层）、content（内容层）
把CSS属性分为展现属性(Controller)，自身属性(model)和文本属性(view)。

把一个页面设计图通过分析，提取出可以复用的模块，做到模块间的解藕。
每个模块可以看做是一个独立的整体，相互嵌套，组装成页面效果。
再利用原型的思想来实现原有CSS模块的页面设计图的不同效果实现。

- layout 层 ：主要控制页面大区块的布局，典型模块是header.footer
- model层：主要页面的可嵌套容器，典型模块是box，tab,nav
- content层:主要控制页面的内容展现样式，典型模块是list

- 页面
    - layout
    - model
    - content
    	-css
    		- Positioning
			- Box model
			- Typographic

对model和content的分类依据是模块内部是不是可以嵌套其他的model和content。可以那么是model，不可以是content。
这边有点像是结构化块状元素，多目标块状元素和终端块状元素的分法。



## CSS模块化向CSS模块原型化的转变

其实这边有点OOP的思想，但是我感觉用js中原型的思想更加容易理解，
考虑到浏览器的解析机制，和html、CSS和javascript一样是解析执行，
原型的理解可能也更加符合实际底层的机制。

这边的一个基础是：CSS优先级+CSS权重+CSS书写顺序来计算页面html到底会显示那些CSS属性，也就是CSS的层叠机制，
Cascading Style Sheets的Cascading。

我用在页面中最常见的box来讲解css模块原型。
页面需要实现的效果如图

![ace show](images/box.png "show")

上面效果可以看做是一个box模型在四种场景中的使用（这边是设置不同的margin）。
我利用fires的规范来模型进行改造。

页面规范请查看[Rules](Rules.md)的定义。

box是一个可以嵌套的内容的元素，所以应该属于model层，对class的命名为mod-box。

我们把mod-box叫做box原型，把new-mod-box-hidden、new-mod-box-margin、new-mod-box-follow叫做是box实例。
修改后的效果。

改造后代码如下：

HTML：
```html
    <div class="lay-container">
        <!-- 下面是mod-box的原型 -->
        <div class="mod-box">
            <div class="mod-box-head">
                 <h3 class="mod-box-head-title">区块标题</h3>
                 <span class="mod-box-head-text">其他文字</span>
                 <a href="#" class="mod-box-head-more">更多</a>
             </div>
            <div class="mod-box-container">
                <div class="mod-box-content">mod-box-content 有默认内边距</div>
            </div>
        </div>
       <!--  下面是mod-box的实例 new-mod-box-hidden-->
        
        <div class="mod-box new-mod-box-hidden">
            <div class="mod-box-head">
                <h3 class="mod-box-head-title">没有内容</h3>
                <span class="mod-box-head-text">其他文字</span>
                <a href="#" class="mod-box-head-more">更多</a>
            </div>
            <div class="mod-box-container" >
                <div class="mod-box-content">mod-box-content 有默认内边距</div>
            </div>
        </div>
        
        <!--  下面是mod-box的实例 new-mod-box-margin-->
        <div class="mod-box new-mod-box-margin">
            <div class="mod-box-head">
                <h3 class="mod-box-head-title">区块标题</h3>
                <span class="mod-box-head-text">其他文字</span>
                <a href="#" class="mod-box-head-more">更多</a>
            </div>
            <div class="mod-box-container">
                <div class="mod-box-content">mod-box-content 有默认内边距</div>
            </div>
        </div>
        <!--  下面是mod-box的实例 new-mod-box-follow-->
        <div class="mod-box new-mod-box-follow">
            <div class="mod-box-head">
                <h3 class="mod-box-head-title">连着上面的box</h3>
                <span class="mod-box-head-text">其他文字</span>
                <a href="#" class="mod-box-head-more">更多</a>
            </div>
            <div class="mod-box-container">
                <div class="mod-box-content">mod-box-content 有默认内边距</div>
            </div>
        </div>
    </div>
```


CSS：
```CSS
.lay-container{width:500px;margin:20px auto ;}
/*下面是box原型的CSS*/
.mod-box{border:1px solid #ccc;zoom:1;font-size:12px;margin:0;padding:0;border-bottom:0;}
.mod-box-head{border-bottom:1px solid #ccc;position:relative;
padding:10px;line-height:16px;
background:-webkit-gradient(linear,left top,left bottom,from(#fcfcfc),to(#f9f9f9));
background:-moz-linear-gradient(top,#fcfcfc,#f9f9f9);
filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fcfcfc', endColorstr='#f9f9f9');
background:-o-linear-gradient(top,#fcfcfc,#f9f9f9);
background:linear-gradient(top,#fcfcfc,#f9f9f9);
zoom:1;}
.mod-box-head:after{content:"."; display:block; height:0; visibility:hidden; clear:both; }
.mod-box-head-title{color:#656565;font-size:14px;font-weight:700;float:left;display:inline;margin:0;padding:0}
.mod-box-head-more{float:right}
.mod-box-head-text{margin-left:10px;color:gray;float:left}
.mod-box-container{background:#fff;border-bottom:1px solid #ccc}
.mod-box-content{padding:10px}
/*下面是box实例的CSS*/
.new-mod-box-hidden{margin: 15px 0 0 0;}
.new-mod-box-hidden .mod-box-container{display: none;}
.new-mod-box-margin{margin: 30px 0 0 0;}
.new-mod-box-follow{border-top:0}
```
把CSS选择器都改成是class选择器，没有使用子类选择器。这样会提升浏览器对页面的渲染。

在上面的例子中，我们把mod-box叫做box原型，
把new-mod-box-hidden、new-mod-box-margin、new-mod-box-follow叫做是box实例。
mod-box作为原型，应该做到对外的是拉伸，对内是包裹，浮动清除方法内置。

利用CSS层叠机制实例继承了原型中的属性，
利用CSS层叠机制实例可以对属性重新赋值和增加属性。

<div class="mod-box new-mod-box-hidden">...</div>
我们通过这种方式来写，new-mod-box-hidden实例写在原型的后面，用new来标记是实例。
在CSS代码中
.new-mod-box-hidden{margin: 15px 0 0 0;}//利用CSS的书写书序
.new-mod-box-hidden .mod-box-container{display: none;}//利用CSS的权重计算

mod实例是写在mod原型后面，这边要特别注意，因为只有写在后面实例属性才会对原型中已有的属性进行重新赋值。
.new-mod-box-hidde用CSS属性书写顺序来实现层叠，
.new-mod-box-hidden .mod-box-container使用权重来实现层叠。
通过这种方式来分离原来在alice中的模型，把特殊的三个应用提取到实例中来。
把第一个mod-box当做是原型的实例。

你可以在demo中查看box的所有代码并且在这基础上做相对应的改变。

 [mod-box 代码实例](demo/ACE_modal_V_1.0/mod-box)。

这种CSS模块原型对layout、model、content都是适用的，CSS模块分为CSS模块原型和CSS模块实例。

原型是通用类库，实例是实际应用。可以通过这种方式提取在项目中常用的模块，组件属于自己个人和公司的组件库。
方便以后快速开发，这样就可以快速实现页面的构建。 

大体就是如此。
其实如果我讲明白了的话就是：
页面分层，模块实例。

至于CSS属性的分类，书写书序、标准盒子模型的理解以及对外的拉伸和对内的、模块的浮动清除等内容应该是内置
在模块的CSS中的。在书写的过程中应当尽量让模块独立，并且不会对外部父亲模块产生布局影响和嵌套在里面的模块产生影响。








