document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px' //针对移动端更具设备宽度判断字体大小
window.addEventListener('load', function() {
        FastClick.attach(document.body)
    }, false) //清楚点击延迟
document.documentElement.addEventListener("touchmove", function(e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, false) //清楚默认事件