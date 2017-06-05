/**
 * Created by Administrator on 2017/2/10.
 */

$(function () {
    function countDown() {
        var now=new Date();
        var endDate=new Date(now.getFullYear(),now.getMonth(),now.getDate(),24,0,0);
        var diffDate=(endDate.getTime()-now.getTime())/1000;
        var Hour=parseInt(diffDate/(60*60));
        if(Hour<10){
            Hour='0'+Hour;
        }
        var Minute=parseInt((diffDate-Hour*(60*60))/60);
        if(Minute<10){
            Minute='0'+Minute;
        }
        var Second=parseInt(diffDate-Hour*(60*60)-Minute*60);
        if(Second<10){
            Second='0'+Second;
        }

        $('span.hour').text(Hour);
        $('span.minute').text(Minute);
        $('span.second').text(Second);

    }

    setInterval(countDown,1000)
});