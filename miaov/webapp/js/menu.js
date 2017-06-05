/**
 * Created by Administrator on 2017/2/6.
 */

$(function () {
    var $dl=$('.shopClass_show dl')
    $dl.hover(function () {
        var $this=$(this);
        $this.addClass("active").removeClass("shopClass_item").siblings().addClass("shopClass_item").removeClass("active");
    },function () {
        var $this=$(this);
        $this.siblings().addClass("shopClass_item").removeClass("active");
    });
});