# modal

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







