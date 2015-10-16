# layout
在Spade Ace中把页面HTML部分分为三部分，这边是对其中layout的介绍。

### 页面布局
layout 层:主要控制页面大区块的布局，典型模块是header.footer
layout层次的组成分层两块，一块是页面结构，一块是页面手脚架。
layout的html结构中应该是嵌套modal的html和content的html
layout页面中问题排版的特殊用css层叠机制来改写modal和content模块

layout 书写注意事项 layout 是可以规定宽度的，通过css的重叠机制可以来改造原来的modal和content模块的模块，同时可以通过媒体查询来使得页面变成响应时布局。

常用的的layout class如下：
```css
.lay-body{}
.lay-header{}
.lay-container{margin:0 auto;width:980px;padding:0 10px;position:relative;*zoom:1;}
.lay-wrapper{margin:0 auto;width:980px;padding:0 10px;position:relative;*zoom:1;}
.lay-content{margin:0 auto;width:980px;padding:0 10px;position:relative;*zoom:1;}
.lay-maincol{display:block;float:left;margin-right:20px;width:780px;min-height:1px;}
.lay-sidecol{display:block;float:left;margin-right:20px;width:180px;min-height:1px;}
.lay-footer{}
```
### 手脚架
栅格（Gridset）的总宽度为 980px，包含 20 栏，每栏 30px，间隙为 20px；只支持固定宽度，没有 Responsive 支持。这样使用：
```
<div class="container">
  <div class="lay-grid lay-grid-5"> ... </div>
  <div class="lay-grid lay-grid-15 last"> ... </div>
</div>
```
当有多个栏的时候，最后一个栏需要添加一个 .last classname。另外，值得注意的是百姓网有很多页面使用二栏风格，并且都比较一致区分左右栏，所以这个系统中有两个 classname 为它们的 Alias：
```
<div class="container">
  <div class="lay-maincol"> 主栏 </div>
  <div class="lay-sidecol last"> 侧栏 </div>
</div>
```
可以在demo文件中查看 layout的使用。


---

#


```

/* layout*/
.lay-body{}
.lay-header{}
.lay-container{margin:0 auto;width:980px;padding:0 10px;position:relative;*zoom:1;}
.lay-wrapper{margin:0 auto;width:980px;padding:0 10px;position:relative;*zoom:1;}
.lay-content{margin:0 auto;width:980px;padding:0 10px;position:relative;*zoom:1;}
.lay-maincol{display:block;float:left;margin-right:20px;width:780px;min-height:1px;}
.lay-sidecol{display:block;float:left;margin-right:20px;width:180px;min-height:1px;}
.lay-footer{}

/* grid*/

.lay-grid{display:block;float:left;margin-right:20px;min-height:1px;}
.lay-grid-1{width:30px;}
.lay-grid-2{width:80px;}
.lay-grid-3{width:130px;}
.lay-grid-4{width:180px;}
.lay-grid-5{width:230px;}
.lay-grid-6{width:280px;}
.lay-grid-7{width:330px;}
.lay-grid-8{width:380px;}
.lay-grid-9{width:430px;}
.lay-grid-10{width:480px;}
.lay-grid-11{width:530px;}
.lay-grid-12{width:580px;}
.lay-grid-13{width:630px;}
.lay-grid-14{width:680px;}
.lay-grid-15{width:730px;}
.lay-grid-16{width:780px;}
.lay-grid-17{width:830px;}
.lay-grid-18{width:880px;}
.lay-grid-19{width:930px;}
.lay-grid-20{width:980px;}
.last{margin-right:0;}
```





