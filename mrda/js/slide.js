
var glume = function(id){
    this.ctn = document.getElementById(id);
    this.adLis = null; //banner 里面的li元素初始化
    this.btns = null; //banner 里面的按钮元素。点击进行图片轮换
    this.animStep = 0.1;//动画速度0.1～0.9 数字越大 速度越快
    this.switchSpeed = 5;//自动播放间隔(s)
    this.defOpacity = 1; 
    this.tmpOpacity = 1;
    this.crtIndex = 0; //初始化时刻的图片内容 
    this.crtLi = null; // 初始化当前的li标签内容信息
    this.adLength = 0;// banner里面图片的长度
    this.timerAnim = null;
    this.timerSwitch = null;
    this.init();
};
//给glume加原型
glume.prototype = {
    fnAnim:function(toIndex){
        if(this.timerAnim){window.clearTimeout(this.timerAnim);}
        if(this.tmpOpacity <= 0){
            this.crtLi.style.opacity = this.tmpOpacity = this.defOpacity;
            this.crtLi.style.filter = 'Alpha(Opacity=' + this.defOpacity*100 + ')';
            this.crtLi.style.zIndex = 0;
            this.crtIndex = toIndex;
            return;
        }
        this.crtLi.style.opacity = this.tmpOpacity = this.tmpOpacity - this.animStep;
        this.crtLi.style.filter = 'Alpha(Opacity=' + this.tmpOpacity*100 + ')';
        this.timerAnim = window.setTimeout(this.fnAnim.bind(this,toIndex),50);
    },
    fnNextIndex:function(){
        return (this.crtIndex >= this.adLength-1)?0:this.crtIndex+1;
    },
    fnSwitch:function(toIndex){
        if(this.crtIndex==toIndex){return;}
        this.crtLi = this.adLis[this.crtIndex];
        for(var i=0;i<this.adLength;i++){
            this.adLis[i].style.zIndex = 0;
        }
        this.crtLi.style.zIndex = 2;
        this.adLis[toIndex].style.zIndex = 1;
        for(var i=0;i<this.adLength;i++){
            this.btns[i].className = '';
        }
        this.btns[toIndex].className = 'on'
        this.fnAnim(toIndex);
    },
    fnAutoPlay:function(){
        this.fnSwitch(this.fnNextIndex());
    },
    fnPlay:function(){
        this.timerSwitch = window.setInterval(this.fnAutoPlay.bind(this),this.switchSpeed*1000);// 图片转化动画效果
    },
    fnStopPlay:function(){
        window.clearTimeout(this.timerSwitch);
    },
    init:function(){
        this.adLis = this.ctn.getElementsByTagName('li');
        this.btns = this.ctn.getElementsByTagName('p')[0].getElementsByTagName('span');
        this.adLength = this.adLis.length;
        for(var i=0,l=this.btns.length;i<l;i++){
            with({i:i}){
                this.btns[i].index = i;
                this.btns[i].onmouseover = this.fnSwitch.bind(this,i);
            }
        }
        this.adLis[this.crtIndex].style.zIndex = 2;
        this.fnPlay();
        this.ctn.onmouseover = this.fnStopPlay.bind(this); //  当鼠标移动到图片上边是 停止图片的轮换
        this.ctn.onmouseout = this.fnPlay.bind(this);//当鼠标已开是图片继续轮换
    }
};
var player1 = new glume('mod-slide-api');