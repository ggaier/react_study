
/**
 * 对Logo做easyIn和easyOut动画
 * @param graphId
 */
function animateLogo(graphId) {
    //TweenMax.fromTo(graphId, 1, {
    //        // from
    //        css: {
    //            left: "-200px",
    //        }
    //    }, {
    //        // to
    //        css: {
    //            left: "200px",
    //        },
    //
    //        // 永久重复动画的选项
    //        repeat: -1,
    //
    //        // 反转、重新运行动画的选项
    //        yoyo: true,
    //
    //        // 改变 easing 类型
    //        ease: Power2.easeInOut,
    //    }
    //);
    TweenMax.from(graphId,2,{
        css: {
            // 在同时更改多个 CSS 属性
            left: "-200px",
            opacity: 0,
        },
    });
}

