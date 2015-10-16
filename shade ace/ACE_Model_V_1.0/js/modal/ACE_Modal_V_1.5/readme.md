# Ace modal


 model分为两种，

## html
第一种是html形式触发。演示是modal.html
'''
<a data-toggle="modal"  data-target="#myModal" >Modal Demo</a>
 
<div id="myModal" class="modal fade hide in" data-backdrop="static">
 <h4 class="modal-title">本操作需要您先注册百姓网</h4>
 <a href="###" data-dismiss="modal" class="close">×</a>
 <div class="modal-content">
   Lorem ipsum dolor sit amet,
 </div>
</div>
'''

开启modal的触发点是data-toggle="modal"  data-target="#myModal" 或者是 data-toggle="modal"  href="#myModal" ，

触发开启的modal和对应modal的id相对应。

关闭时使用data-dismiss="modal"

# js
第一种是js形式触发。演示是modal_js.html
'''
<div id="myModal" class="modal fade hide in" data-backdrop="static">
 <h4 class="modal-title">本操作需要您先注册百姓网</h4>
 <a href="###" class="close" id="myModal-dismiss">×</a>
 <div class="modal-content">
   Lorem ipsum dolor sit amet,
 </div>
</div>
<script src="js/jquery-1.9.1.min.js"></script>
<script src="js/modal.js"></script>
<script>
$(document).ready(function(){
  /* 使用js开启modal */ 
  $("#myModal-open").click(function(){
  	$('#myModal').modal('show');
  });
  /* 使用js关闭modal */ 
  $("#myModal-dismiss").click(function(){
  	$('#myModal').modal('hide');
  });
});
</script>
'''
在原来的html基础上去掉对应的出发点，使用js来控制。
$('#myModal').modal('show')表示对应的modal的开启。
$('#myModal').modal('hide') 表示对应modal的关闭。


## history
8月29日 js多层锁屏内容。
        下午，多层loading内容的组件实现。
9月4日  突然，根绝工作还只是工作，这个只是一个养活自己和不断向上生活的过程而已，在对待工作要全力以赴的同时，
自己应该给自己留点时间去对待生活和照顾自己对应的内容信息。

