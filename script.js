function applyTheme(theme) {
    document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
}

document.addEventListener("DOMContentLoaded", () => {

    var savedTheme = localStorage.getItem("theme") || "auto";

    applyTheme(savedTheme);

    for (var optionElement of document.querySelectorAll("#select-theme option")) {
        optionElement.selected = savedTheme === optionElement.value;
    }

    document.querySelector("#select-theme").addEventListener("change", function () {
        applyTheme(this.value);
        localStorage.setItem("theme", this.value);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var scrollBtn = document.querySelector(".scroll-to-top-btn");

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    scrollBtn.addEventListener("click", function () {
        scrollToTop();
    });
});

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}