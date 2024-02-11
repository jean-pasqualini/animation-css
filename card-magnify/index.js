document.addEventListener("DOMContentLoaded", function() {
    var element = document.getElementById("contact-card");
    var playButton = document.getElementById("animation-control");
    var animationPanel = document.getElementById("animation-panel");
    var animatedElements = document.querySelectorAll("#contact-card, #magnifying-glass");
    var animationDuration = 3000; // Animation duration in milliseconds

    animatedElements.forEach((item) => {
        let iterationCount = 0;
        const animationName = item.id;
        
        const debugPanel = document.createElement("div");
        animationPanel.appendChild(debugPanel);
        
        item.addEventListener("animationstart", function () {
            iterationCount = 0;
            debugPanel.textContent = animationName + " : started";
        });
      
        // Track animation progress on each iteration
        item.addEventListener("animationiteration", function() {
            console.log("Animation iteration");
            iterationCount++;
            debugPanel.textContent = animationName + " : " + iterationCount;
        });
      
        item.addEventListener("animationend", function () {
            iterationCount = 0;
            debugPanel.textContent = animationName + " : ended";
        });
    });

    playButton.addEventListener("click", function (event) {
        animatedElements.forEach((item) => item.classList.toggle("animation-running"));
    });
  });