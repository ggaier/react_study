function animate() {
    // Animation duration is 2 seconds.
    TweenMax.to("#box",2,{
        css: {
            // animate multiple CSS properties at the same time
            left: "200px",
            opacity: 0.4,
        },
    });
}

var $startButton = document.getElementById("start-button");

$startButton.onclick = animate;
