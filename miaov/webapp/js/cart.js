/**
 * Created by Administrator on 2017/2/20.
 */
$(function () {
    var offset=$("#cart").offset();
    $(".addCart").click(function (event) {
        var addcar=$(this);
        var showName=addcar.parent().find('.showName').text();
        var img=addcar.children('img').attr('src');
        var name=addcar.children('h5').text();
        var price=Number(addcar.children('span').text().slice(1));
        var flyer=$('<img class="u-flyer" src="'+img+'">');
        var sumPrice=price;
        flyer.fly({
            start:{
                left:event.pageX,
                top:event.pageY
            },
            end:{
                left:offset.left+10,
                top:offset.top+10,
                width:0,
                height:0
            },
            onEnd:function () {
                var $showPlace=$('#showCart');
                var $html=$showPlace.html();
                var $none=$showPlace.find('#none');
                $none.css("display","none");
                var html=
                    '<table id="tb-cart">'+
                    '<thead>'+
                    '<tr><th colspan="3">'+showName+'</th>'+
                    '<th class="sumPrice" colspan="2"><h4>￥<span>'+sumPrice.toFixed(2)+'</span></h4></th>'+
                    '</tr></thead>'+
                    '<tbody><tr class="pro">' +
                    '<td class="checkBox"><input type="checkbox"></td>'+
                    '<td class="img"><img src="'+img+'" title="'+name+'"></td>'+
                    '<td class="amount"><button class="reduce">-</button><input type="text" value="1" min="1"><button class="add">+</button></td>'+
                    '<td class="price"><h4>￥<span>'+price.toFixed(2)+'</span></td>'+
                    '<td class="delete"><button>删除商品</button></td>'+
                    '</tr></tbody></table>';
                $showPlace.html($html+html);
                var $sibPrice=$showPlace.find('.sumPrice').find('span');
                var i=0;
                $.each($sibPrice,function (index,item) {
                    i+=parseInt(item.innerHTML);
                });
                $('#sum_price').text('共计：￥'+i.toFixed(2));

                /*if($html.indexOf(showName)==-1){
                    var html=
                        '<table id="tb-cart">'+
                        '<thead>'+
                        '<tr><th colspan="3">'+showName+'</th>'+
                        '<th class="sumPrice" colspan="2"><h4>￥<span>'+sumPrice+'</span></h4></th>'+
                        '</tr></thead>'+
                        '<tbody><tr class="pro">' +
                        '<td class="checkBox"><input type="checkbox"></td>'+
                        '<td class="img"><img src="'+img+'" title="'+name+'"></td>'+
                        '<td class="amount"><button class="reduce">-</button><input type="text" value="1" min="1"><button class="add">+</button></td>'+
                        '<td class="price"><h4>￥<span>'+price+'</span></td>'+
                        '<td class="delete"><button>删除商品</button></td>'+
                        '</tr></tbody></table>';

                    $showPlace.html($html+html);
                }
                else{
                    var ts=$showPlace.children('#tb-cart').find('th:contains('+showName+')');
                    var t=ts.parent().parent().siblings().find('.amount').children('input');
                    var val=parseInt(t.val());
                    t.val(val+1);

                }

*/
                $('.fa-times').click(function () {
                    $showPlace.animate({left:'100%'},1000)
                });
                $('td.amount').hover(function () {
                    var $re=$(this).children('.reduce');
                    var $add=$re.siblings('.add');
                    $re.css('visibility','visible');
                    $add.css('visibility','visible');
                },function () {
                    var $re=$(this).children('.reduce');
                    var $add=$re.siblings('.add');
                    $re.css('visibility','hidden');
                    $add.css('visibility','hidden');
                });

                $(".add").click(function () {
                    var $this=$(this);
                    var $sib_input=$this.siblings('input');
                    var $sib_reduce=$this.siblings('.reduce');
                    var $price=$this.parent().siblings('.price').find('span').text();
                    var $sumPrice=$this.parents('#tb-cart').find('.sumPrice').find('span');
                    var $val=parseInt($sib_input.val());
                    $sib_input.val($val+1);
                    $sib_reduce.css('cursor','pointer');
                    $sumPrice.text(($price*$sib_input.val()).toFixed(2));
                    var $sibPrice=$this.parents('#showCart').find('.sumPrice').find('span');
                    var i=0;
                    $.each($sibPrice,function (index,item) {
                        i+=parseInt(item.innerHTML);
                    });
                    $('#sum_price').text('共计：￥'+i.toFixed(2));
                });
                $(".reduce").click(function () {
                    var $this=$(this);
                    var $sib_input=$this.siblings('input');
                    var $val=parseInt($sib_input.val());
                    var $price=$this.parent().siblings('.price').find('span').text();
                    var $sumPrice=$this.parents('#tb-cart').find('.sumPrice').find('span');
                    if($val<=1){
                        $this.css('cursor','no-drop');
                    }
                    else{
                        $sib_input.val($val-1);
                    }
                    $sumPrice.text(($price*$sib_input.val()).toFixed(2));
                    var $sibPrice=$this.parents('#showCart').find('.sumPrice').find('span');
                    var i=0;
                    $.each($sibPrice,function (index,item) {
                        i+=parseInt(item.innerHTML);
                    });
                    $('#sum_price').text('共计：￥'+i.toFixed(2));
                });
                $('.delete button').click(function () {
                    var result=confirm("是否删除商品？");
                    var $this=$(this);
                    if(result){
                        $this.parent().parent().parent().parent().remove();
                        var $tr=$('#tb-cart tr');
                        var num=$tr.length;
                        for(var i=0;i<num;i++){
                            $tr.eq(i).find('.num').text((i+1)+".");
                        }
                    }
                    var $sibPrice=$('#showCart').find('.sumPrice').find('span');
                    var q=0;
                    $.each($sibPrice,function (index,item) {
                        q+=parseInt(item.innerHTML);
                    });
                    $('#sum_price').text('共计：￥'+q.toFixed(2));
                });

            }
        });
    });

});