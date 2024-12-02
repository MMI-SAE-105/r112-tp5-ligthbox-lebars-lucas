// *** LIGHTBOX ***
const LightboxImg = document.querySelector("#lightbox img");
const lightBox = document.querySelector("#lightbox");

document.querySelectorAll("[data-full-img]").forEach((imgThumb) => {
    imgThumb.addEventListener("click", (evt) => {
LightboxImg.src = imgThumb.dataset.fullImg;
lightBox.showModal();
    });
});

lightBox.addEventListener("click", (evt) =>  lightBox.close() );