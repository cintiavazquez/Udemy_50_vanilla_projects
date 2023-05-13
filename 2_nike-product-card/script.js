const SHOE1 = document.querySelector(".shoe-1");
const SHOE2 = document.querySelector(".shoe-2");
const COLOR1 = document.querySelector(".color-1");
const COLOR2 = document.querySelector(".color-2");
const CONTAINER = document.querySelector(".container");

COLOR1.addEventListener("click", handleClick);
COLOR2.addEventListener("click", handleClick);

function handleClick() {
    if (CONTAINER.classList.contains("change")) {
        CONTAINER.classList.remove("change");
        return;
    }
    CONTAINER.classList.add("change");
}
