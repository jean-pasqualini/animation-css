document.addEventListener("DOMContentLoaded", function () {
    var animationPanel = document.getElementById("animation-panel");
   
    const myScrollTimeline = new ScrollTimeline({
        source: document.querySelector("#animation-scroll"),
        axis: 'x',
    });
    
    const anim = new Animation(
        new KeyframeEffect(
            document.getElementById("box"),
            [
                { width: "100%", offset: 0.5 },
                { width: "50%", offset: 1 }
            ],
            {
               // duration: 3000,
                //duration: 3000,
                //iterations: Infinity,
                //easing: "steps(5, jump-none)",
            
            }
        ),
        myScrollTimeline
    );
    anim.play();
});