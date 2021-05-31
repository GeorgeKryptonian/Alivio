const iconMenu = document.querySelector(".menu__icon");

if (iconMenu) {
    const menuBody = document.querySelector(".menu__body");
    const wrapper = document.querySelector(".wrapper");
    iconMenu.addEventListener("click", function () {
        menuBody.classList.toggle("_active");
        wrapper.classList.toggle("_hidden");
        document.body.classList.toggle("_hidden");
        iconMenu.classList.toggle("menu__icon-active")
    });
}