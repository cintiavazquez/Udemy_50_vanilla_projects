const SETTINGS = document.querySelector(".settings_background");
const BODY = document.querySelector("body");
const TOGGLE = document.querySelector(".settings");
let themePreference;

function getThemePreference() {
    themePreference =
        localStorage.getItem("preference") === "true" ? true : false;

    if (themePreference) {
        BODY.classList.add("light");
        TOGGLE.classList = `settings fa-regular fa-sun`;
    } else {
        BODY.classList.remove("light");
        TOGGLE.classList = `settings fa-regular fa-moon`;
    }
}

getThemePreference();

SETTINGS.addEventListener("click", function () {
    themePreference = !themePreference;
    localStorage.setItem("preference", themePreference);
    getThemePreference();
});
