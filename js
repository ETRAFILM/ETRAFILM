document.addEventListener("DOMContentLoaded", function() {
    console.log("ETRAFILM website is loaded! 🚀");
    
    const btn = document.querySelector(".btn");
    if (btn) {
        btn.addEventListener("mouseover", function() {
            btn.style.backgroundColor = "#ffa500";
        });

        btn.addEventListener("mouseout", function() {
            btn.style.backgroundColor = "#58a6ff";
        });
    }
});
