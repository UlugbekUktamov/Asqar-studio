const sidebar = document.querySelector(".sidebar");
const saidbar_open = document.querySelector(".saidbar-open");
const main = document.querySelector(".main")
const sidebar_fixed = document.querySelector(".sidebar-fixed")

saidbar_open.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    main.classList.toggle("active");
})

window.onscroll = function () {
    scrollfunc()
}

function scrollfunc() {
    if (document.documentElement.scrollTop > 1900) {
        sidebar_fixed.classList.add("active");
    } else {
        sidebar_fixed.classList.remove("active");
    }
}