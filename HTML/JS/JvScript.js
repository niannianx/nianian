/*声明变量*/
var esico = document.getElementById('icolist').getElementsByTagName('li');
var eicolist = document.querySelector('#icolist');
var eimglist = document.querySelector('#imglist');
var etest = document.querySelector('#test');
var eprev = document.querySelector('.prev');     /**  获取两个箭头 */
var enext = document.querySelector('.next');
var left = 0;
var timer;

run();

/*计时滚动*/
function run()
{

    if (left <= -4800)   { left = 0;}
    var m = Math.floor(-left/1200) ;
/**每显示一张图要停留的时间 */
   var n = (left % 1200 == 0) ? n = 1200 : n = 6;
   eimglist.style.marginLeft = left + 'px';
   left -= 10;
    timer = setTimeout(run,n);
    icochange(m);
}




function icochange(m){

    for (let index = 0; index < esico.length; index++) {
    esico[index].style.backgroundColor = '';
    }
    
    if (m < esico.length) {
    esico[m].style.backgroundColor = 'red';
    }
    
    }
    

/**页面跳转 */
function imgchange(n){
    let lt = - (n  * 1200)
    imglist.style.marginLeft = lt + 'px';
    left = lt;
    }
    
    eprev.onclick = function(){
        let prevgo = Math.floor(-left/1200)-1;
    
        if (prevgo == -1) { prevgo =3;}
    
      imgchange(prevgo);
       icochange(prevgo);
    }
    
    enext.onclick = function(){
    let nextgo = Math.floor(-left/1200)+1;  /**声明块内变量  向下取整  判断当前图片序号*/
    
    if (nextgo == 4) {
    nextgo =0;}
    
    imgchange(nextgo);
    icochange(nextgo);
    }
    
    eicolist.onclick = function(){
    var tg = event.target;
    let ico = tg.innerHTML - 1;
    imgchange(ico);
    icochange(ico);
    }
    
    eimglist.onmouseover = function(){
    clearTimeout(timer);
    }
    
    eimglist.onmouseout = function(){
    run();
    }
    
    
   