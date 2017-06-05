/**
 * Created by Administrator on 2017/2/11.
 */

function setCookie(cookieObject) {
    var cookieValue=encodeURI(cookieObject.value);
    if(cookieObject.expires==''||cookieObject.expires==undefined){
        var now=new Date();
        now.setMonth(now.getMonth()+6);
        var cookieExpires=now.toString();
    }
    document.cookie=cookieObject.name+'='+cookieValue+';expire='+cookieExpires
}


function getCookieValue(cookieName) {
    var cookieValue=document.cookie;
    var cookieStarAt=cookieValue.indexOf(' '+cookieName+'=');
    if(cookieStarAt==-1){
        cookieStarAt=cookieValue.indexOf(cookieName+'=');
    }
    if (cookieStarAt==-1){
        cookieValue=null;
    }
    else{
        cookieStarAt=cookieValue.indexOf('=',cookieStarAt)+1;
        var cookieEndsAt=cookieValue.indexOf(';',cookieStarAt);
        if (cookieEndsAt==-1){
            cookieEndsAt=cookieValue.length;
        }
        cookieValue=decodeURI(cookieValue.substring(cookieStarAt,cookieEndsAt));
    }
    return cookieValue;
}