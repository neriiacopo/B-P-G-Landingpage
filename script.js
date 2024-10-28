document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "fx-01.png",
        "fx-02.png",
        "fx-03.png",
        "fx-04.png",
        "fx-05.png",
        "fx-06.png",
        "fx-07.png",
        "fx-08.png",
        "fx-09.png",
    ];
    const folderPath = "./public/fx/";

    let cursorImage = document.createElement("img");
    cursorImage.classList.add("cursor-image");
    document.body.appendChild(cursorImage);

    function getRandomImage() {
        return folderPath + images[Math.floor(Math.random() * images.length)];
    }

    function updateCursorImage() {
        cursorImage.src = getRandomImage();
    }

    updateCursorImage();

    document.addEventListener("mousemove", (e) => {
        cursorImage.style.left = `${e.pageX}px`;
        cursorImage.style.top = `${e.pageY}px`;
    });

    document.addEventListener("click", (e) => {
        const clickedImage = document.createElement("img");
        clickedImage.src = cursorImage.src;
        clickedImage.classList.add("clicked-image");
        clickedImage.style.left = `${e.pageX}px`;
        clickedImage.style.top = `${e.pageY}px`;
        document.body.appendChild(clickedImage);

        updateCursorImage();
    });
});
