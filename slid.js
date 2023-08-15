document.addEventListener("DOMContentLoaded", function () {
    // This function is executed when the document (HTML) has finished loading

    const rightToLeftButton = document.getElementById("RightToLeft");
    const leftToRightButton = document.getElementById("LeftToRight");
    const slideElement = document.getElementById("slide");
    const topElements = document.querySelectorAll(".top");

    rightToLeftButton.addEventListener("click", function () {
        // This function is executed when the "RightToLeft" button is clicked

        // Animate the "slide" element to move its left margin to "0"
        slideElement.style.marginLeft = "0";

        // Animate all ".top" elements to move their left margin to "100%"
        topElements.forEach(function (element) {
            element.style.marginLeft = "100%";
        });
    });

    leftToRightButton.addEventListener("click", function () {
        // This function is executed when the "LeftToRight" button is clicked

        // Animate the "slide" element to move its left margin to "50%"
        slideElement.style.marginLeft = "50%";

        // Animate all ".top" elements to move their left margin to "0"
        topElements.forEach(function (element) {
            element.style.marginLeft = "0";
        });
    });
});
