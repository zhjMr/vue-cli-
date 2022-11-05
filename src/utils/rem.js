

//rem原理 根字体大小
change()
//窗口大小改变事件
window.onresize = function () {
    change()
},
    //横竖屏事件
    window.onorientationchange = function () {
        change();
    }
function change() {
    // document.documentElement.clientWidth设备可是宽度  document.body.clientWidth IE兼容问题
    var winW = document.documentElement.clientWidth || document.body.clientWidth
    document.documentElement.style.fontSize = winW * 100 / 750 + 'px';
    // console.log('1rem' + winW * 100 / 750 + 'px');
}
