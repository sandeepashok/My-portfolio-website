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