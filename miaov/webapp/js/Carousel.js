/**
 * Created by Administrator on 2017/1/3.
 */
/**
 * Created by Administrator on 2016/12/24.
 */
var imgManager={
    init:function(data){
        var $ul=$("<ul></ul>");
        $.each(data,function (index,item) {
            var $img=$("<img>");
            var $li=$("<li></li>");
            var $a=$("<a></a>");
            $img.attr("src",item.imgSrc).attr("title",item.title);
            $a.attr("href",item.link).append($img);
            $li.addClass("fl").append($a);
            $ul.addClass("adv_img").append($li);
        });
        return $ul;
    },
    switch:function($index){
        var left;
        var step=-$(".adv_img li").outerWidth();
        left=$index*step;
        $(".adv_img").animate({"left": left+"px"},"fast");
    }
};

var titleManager={
    init:function (data) {
        var $ul=$("<ul></ul>");
        $.each(data,function () {
            var $li=$("<li></li>");
            var $a=$("<a></a>");
            $a.attr("href","#");
            $li.addClass("fl").addClass("unchoosed").append($a);
            $ul.addClass("adv_btn").append($li);
        });
        return $ul;
    },
    switch:function ($index) {
        $(".adv_btn li").eq($index).addClass("choosed").removeClass("unchoosed").siblings().removeClass("choosed").addClass("unchoosed");
    }
};

var carouselManager = {
    init:function (data) {
        var $ul_img=imgManager.init(data);
        var $ul_tag=titleManager.init(data);
        $ul_tag.children("li").first().removeClass("unchoosed").addClass("choosed");
        var $prevSpan=$("<span class='prev'><</span>");
        var $nextSpan=$("<span class='next'>></span>");
        $(".adv_carousel").append($ul_img).append($ul_tag).append($prevSpan).append($nextSpan);
    },
    switch:function () {
        var $index=0;
        var $exdex=0;
        var timeID;
        var len=$(".adv_btn li").length-1;
        $(".prev").click(function(){
            clearInterval(timeID);
            $index--;
            if($index<0){
                $index=len;
            }
            imgManager.switch($index);
            titleManager.switch($index);
            timeID=setInterval(function(){
                $(".next").click()
            },3000);
            return $exdex=$index;
        });
        $(".next").click(function(){
            clearInterval(timeID);
            $index++;
            if($index>len){
                $index=0;
            }
            imgManager.switch($index);
            titleManager.switch($index);
            timeID=setInterval(function(){
                $(".next").click()
            },3000);
            return $exdex=$index;
        });

        $(".adv_img").hover(function () {
            clearInterval(timeID);
        },function () {
            timeID=setInterval(function(){
                $(".next").click()
            },3000);
        }).trigger('mouseleave');
        $(".adv_btn>li").click(function (){
            clearInterval(timeID);
            $index=$(this).index();
            imgManager.switch($index);
            titleManager.switch($index);
            timeID=setInterval(function(){
                $(".next").click()
            },3000);
            return $index;
        });
    }
};


//largeScreenData

function carousel() {
    var json=[
        {
            "imgSrc":"Images//adv_img//adv01.png",
            "title":"年末清仓季3折起-土豪bye bye!",
            "link":"https://tanboge.tmall.com/?ali_trackid=30_7d51ffed23b95ce618e3a93fdc46ce3c&spm=a21bo.50862.201862-2.1.nVsT6Z"
        },
        {
            "imgSrc":"Images//adv_img//adv02.jpg",
            "title":"萌娃年礼逛逛抢-99抢福袋",
            "link":"https://tanboge.tmall.com/?ali_trackid=30_7d51ffed23b95ce618e3a93fdc46ce3c&spm=a21bo.50862.201862-2.1.nVsT6Z"
        },
        {
            "imgSrc":"Images//adv_img//adv01.png",
            "title":"原创新品-专业健身瑜伽服饰",
            "link":"https://tanboge.tmall.com/?ali_trackid=30_7d51ffed23b95ce618e3a93fdc46ce3c&spm=a21bo.50862.201862-2.1.nVsT6Z"
        }
    ];
    carouselManager.init(json);
    carouselManager.switch();

}





