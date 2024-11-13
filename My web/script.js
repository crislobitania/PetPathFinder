let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click",function(){
    navbar.classList.toggle("active");
});

window.onscroll =() => {
    navbar.classList.remove("active");
};

function downloadApp() {
    const link = document.createElement("a");
    link.href = "app_link.apk"; // replace this with the actual app link
    link.download = "PetPathFinderApp.apk"; // name for the downloaded file
    link.click();
}

