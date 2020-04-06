$(document).ready(function(){
    zb();
    $(".choose a").hide();
    $(".mid").hide(); 
    $(".ch").click(function(){
        $(".choose a").show();
        $(".mid").hide(300);
    });
    $("a").click(function (){
        var name;
        $("a").hide();
        name=$(this).attr("class");
        $(".yt img").attr("src","pic/" + name + "/0.jpg");
        // $(".yt").attr("id",name);
        csh(name);
        $(".st").click(function(){
            caus(name);
            endtime()
            time();
        })
    }); 
})
function zb(w){//制表
    for (let i = 0; i < 5; i++) {
        $(".pic").append("<tr></tr>");
    }
    for (let i = 0; i < 5; i++) {
        $(".pic").children().append("<td></td>");
    }
    let bg = $(".pic").children().children();
    let k = 0;   
    for (let i = 0; i < 25; i++) {
        $(bg[i]).attr("class",i);
        // bg[i].setAttribute("class",i);
        if ((i>5&&i<9)||(i>10&&i<14)||(i>15&&i<19)) {
            // bg[i].setAttribute("onclik","move()");
            $(bg[i]).attr("onclick","move(" + i + ")");
        }
        else{
            if ((i>=1&&i<=3)||(i>=21&&i<=23)) {
                $("."+i).css({"background-image":"url(pic/border.jpg)","background-size":"4px,4px","height":"4px"});
            }
            else{
                if (i!=0&&i!=4&&i!=20&&i!=24) {
                    $("."+i).css({"background-image":"url(pic/border.jpg)","background-size":"4px,4px","width":"4px","background-repeat":"repeat"}); 
                }
                else{
                    $("." + i).css({"background-image":"url(pic/border.jpg)","background-size":"4px,4px","width":"4px","height":"4px"}); 
                }
            }
        }  
    }
    csh(8);
}
function csh(value){//初始化图片
    let k = 0;
    for (let i = 0; i < 24; i++) {   
        if ((i>5&&i<9)||(i>10&&i<14)||(i>15&&i<19)) {
            $("."+i).css({"background-image":"url(pic/" + value + "/0_" + k + ".jpg)","background-size":"cover"});
            k++;
        }
    }
}
function caus(value){//扰乱图片顺序
    let c = new Array;
    for (let i = 0; i < 8; i++) {
        c[i]=i;        
    }
    let h = 0
    for (; h%2!=0 || h == 0; ) {
        h = 0;
        c.sort(function(){
            return 0.5 - Math.random();
        })
        for (let j = 0; j < 8; j++) {
            let k = j+1;
            for (; k < 8; k++) {
                if(c[j]>c[k]){
                    h++;
                }    
        }
    }   
    }
    let j = 0;
    for (let i = 0; i < 18; i++) {   
        if ((i>5&&i<9)||(i>10&&i<14)||(i>15&&i<18)) {
            $("."+i).css("background-image","url(pic/" + value + "/0_" + c[j] + ".jpg)");
            $("." + i).attr("id",c[j])
            j++;
        }
    }
    $(".18").css("background-image","none");
    $(".18").attr("id","8");
}
function move(value){
    if (vote(value-1)) {
        turn(value,value-1);
    }
    else if (vote(value+1)) {
        turn(value,value+1);
    }
    else if (vote(value-5)) {
        turn(value,value-5);
    }
    else if (vote(value+5)) {
        turn(value,value+5);
    }
    win();
}
function vote(value){//判断是否可以移动
    var t = $("." + value).css("background-image");
    if (t == "none") {
        return true;
    }else{
        return false;
    }
}
function turn(a,b){//移动图片
    var t = $("." + a).css("background-image");
    $("." + b).css("background-image",t);
    $("." + a).css("background-image","none");
    var k = $("." + a).attr("id");
    $("." + a).attr("id",$("." + b).attr("id"));
    $("." + b).attr("id",k);
}
function win(){
    let k = 0
    let a = new Array;
    let b = new Array;
    let c = new Array;
    c[0] = 6;
    c[1] = 7;
    c[2] = 8;
    c[3] = 11;
    c[4] = 12;
    c[5] = 13;
    c[6] = 16;
    c[7] = 17;
    for (let i = 0; i < 8; i++) {
        a[i] = i;
        b[i] = $("." + c[i]).attr("id");
        if (a[i]==b[i]) {
            k++;
        }
    }
    if (k==8) {
        endtime();
        end();
    }
}
function end(){
    // let w = $(window).width();
    // let h = $(window).height();
    // $(".mid").css({"left":(w-700)/2 + "px","right":(w-700)/2 + "px",});
    // $(".mid").css("margin-top",(h-430)/2 + "px");
    $(".endpic img").attr("src",$(".yt img").attr("src"));
    $(".mid").show(500);

}
function rst(){
    $(".ch").click();
}
let s = 0;
let m = 0;
let t;
function time(){ 
    t = setTimeout(() => {
        s++;
        if(s==60){
            m++;
            s=0;
        }
        $(".time").text("所用时间：" + bz(m) + ":" + bz(s));
        time();
    }, 1000); 
}
function endtime(){
    clearTimeout(t);
    s = 0;
    m = 0;
}
function bz(value){
    let c;
    if (value<10) {
        c = "0" + value;
    }else{
        c = value;
    }
    return c;
}

    



