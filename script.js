// List of images
const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
];


// Current image number
let currentImage = 0;


// ===============================
// OPEN LIGHTBOX
// ===============================

function openLightbox(index) {

    currentImage = index;

    document.getElementById("lightbox-img").src =
        images[currentImage];

    document.getElementById("lightbox").style.display = "flex";
}


// ===============================
// CLOSE LIGHTBOX
// ===============================

function closeLightbox() {

    document.getElementById("lightbox").style.display = "none";
}


// ===============================
// NEXT / PREVIOUS IMAGE
// ===============================

function changeImage(direction) {

    currentImage = currentImage + direction;


    // If we go after the last image
    if (currentImage >= images.length) {
        currentImage = 0;
    }


    // If we go before the first image
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }


    // Display the new image
    document.getElementById("lightbox-img").src =
        images[currentImage];
}


// ===============================
// FILTER IMAGES
// ===============================

function filterImages(category) {

    const items =
        document.querySelectorAll(".gallery-item");


    items.forEach(function(item) {

        if (
            category === "all" ||
            item.classList.contains(category)
        ) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });

}


// ===============================
// CLOSE LIGHTBOX WHEN CLICKING
// OUTSIDE THE IMAGE
// ===============================

document
    .getElementById("lightbox")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeLightbox();

        }

    });
