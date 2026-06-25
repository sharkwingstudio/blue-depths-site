/////// Global Variables ///////

// Query selectors
const galleryImages = document.querySelectorAll('.gallery-img');
const imageDisplayed = document.querySelector("#displayed-img");
const closeImgButton = document.querySelector("#close-img");
const displayContainer = document.querySelector("#img-expand");

//const navbar = document.querySelector("#header");
//console.log(navbar.clientHeight);

////// Gallery Selection Code ///////

// Enlarge image
function showImage(image) {
    // Prevent scrolling temporarily
    document.body.style.overflow = 'hidden';

    // Update display image to the selected image
    imageDisplayed.src = image.src;
    imageDisplayed.alt = image.alt;

    // Toggle so the image display container isn't hidden anymore
    displayContainer.classList.toggle("hidden-display");
}

// Close image container
function closeImage() {

    // Allow scrolling again
    document.body.style.overflow = '';

    // Remove the source and rest alt
    imageDisplayed.removeAttribute("src");
    imageDisplayed.alt = "Displayed Gallery Image";

    // Toggle so the image display container isn't hidden anymore
    displayContainer.classList.toggle("hidden-display");
}

////// Event Listeners ///////

// Add event listener to gallery images
if (imageDisplayed) { // Just in case current page doesn't use gallery with image expansion
    galleryImages.forEach(image => {
        image.addEventListener("click", () => { // Must use () => to pass showImage as the function to run when the click happens.
            showImage(image);
        });
    });
}

// Add event listener to the close window button
if (closeImgButton) {
    closeImgButton.addEventListener("click", closeImage);
}