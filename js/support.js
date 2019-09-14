/* 参数含义
 * DOM:需要绑定滚轮事件的对象
 * callback: 事件回调函数
 * bool: 是否需要阻止滚轮事件的默认事件
 */
function mousewheel(dom, callback, bool) {
    var type = "mousewheel";
    if(dom.onmousewheel === undefined) {
        // 兼容firefox滚轮事件，事件类型为DOMMouseScroll且只能使用DOM2级事件绑定
        type = "DOMMouseScroll";
    }

    function fn(e) {
        /* 滚轮滚动方向
         * firefox：e.detail
         * IE/Chrome等：e.wheelDelta
         */
        var e = e || window.event;

        // firefox滚轮事件滚动方向兼容
        if(!e.wheelDelta) {
            e.wheelDelta = e.detail/-3*120;
        }

        if(!!bool) {
            if(e.preventDefault) {
                e.preventDefault()
            } else {
                //IE 阻止默认事件兼容
                e.returnValue = false;
            }
        }

        callback && callback.call(this, e);
    }

    if(dom.addEventListener) {
        dom.addEventListener(type, fn)
    } else {
        // IEDOM2级事件绑定兼容
        dom.attachEvent("on" + type, fn)
    }
}