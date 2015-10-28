# Content 

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

以list来作为一个content模块,
[con-list 代码实例](demo/ACE_Content_V_1.0/list)。











