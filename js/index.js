window.onload=function(){
    setTimeout("switch_image()",1000);
}
var current=1;
var num_image = 21;
function switch_image(){
    current++;
    document.images['image'].src='./img/anh-'+current+'.jpg';
    if(current<num_image){
        setTimeout("switch_image()",1000);
    }
    else if(current==num_image){
        current=0;
        setTimeout("switch_image()",1000);
    }
}