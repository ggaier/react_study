window.onload = function runAfterLoad() {
    animateLogo("#react_logo")
    animateRobot("#android-robot");
    updateSliderControl();
}

window.onscroll=function(){
    updateSliderControl()
}

/**
 * 对Logo做easyIn和easyOut动画
 * @param graphId
 */
function animateLogo(graphId) {
    TweenMax.fromTo(graphId, 1, {
            // from
            css: {
                y: "10px",
            }
        }, {
            // to
            css: {
                y: "-20px",
            },

            // 永久重复动画的选项
            repeat: -1,

            // 反转、重新运行动画的选项
            yoyo: true,

            // 改变 easing 类型
            ease: Power1.easeInOut,
        }
    );
}

/**
 * 左右晃动右下角的robot图片
 */
function animateRobot(robotId) {
    var t = new TimelineMax({yoyo: true, repeat: -1});
    t.to(robotId, 0.5, {rotation: "-30deg"})
        .to(robotId, 0.5, {rotation: "-45deg"});
}

function updateSliderControl(){
    var links=document.querySelectorAll("#slider-control a");
    console.log(links);
    for(var i=0;i<links.length;i++){
        var link=links[i];

        console.log("section="+section+",link="+link.toString());
        var linkstr=link.toString();
        var section=document.querySelector(linkstr.substr(linkstr.indexOf("#")));
        var sectionTop=$(section).offset().top;
        var sectionBottom=$(section).height()+sectionTop;
        if(window.scrollY>=sectionTop&&window.scrollY<sectionBottom){
            link.className="active";
        }else{
            link.className="";
        }
    }

}


