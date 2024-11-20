// Function to update the large image and text when hovering over a small image
function upDate(previewPic) {
    console.log(previewPic); // Check the image element
    console.log(previewPic.src); // Print the image source
    console.log(previewPic.alt); // Print the alt text

    // Change the text inside the large image div to the alt text
    document.getElementById('image').innerHTML = previewPic.alt;

    // Change the background image of the large image div to the hovered image
    document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;
}

// Function to reset the large image and text when the mouse leaves the image
function undo() {
    // Reset the background image of the large image div to an empty URL
    document.getElementById('image').style.backgroundImage = "url('')";

    // Reset the text of the large image div to the original instruction
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}
