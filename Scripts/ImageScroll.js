const images = document.querySelectorAll(".side-contentBgImg img"); // Select all images inside the containers
const mainContent = document.querySelector(".main-content"); // Select the main-content element

// Read scroll percentages from the HTML data attribute
const scriptTag = document.querySelector('script[src="Scripts/ImageScroll.js"]');
let scrollPercentages = scriptTag.getAttribute("data-scroll-thresholds")
    .split(",")
    .map(Number); // Convert the string to an array of numbers (percentages)

// Function to calculate scroll thresholds based on percentages
function calculateScrollThresholds() {
    const totalScrollableHeight = mainContent.scrollHeight - mainContent.clientHeight; // Total scrollable height
    return scrollPercentages.map((percentage) => (percentage / 100) * totalScrollableHeight); // Convert percentages to pixel values
}

// Calculate thresholds dynamically
let scrollThresholds = calculateScrollThresholds();

// Recalculate thresholds on window resize (in case the scrollable height changes)
window.addEventListener("resize", () => {
    scrollThresholds = calculateScrollThresholds();
});

mainContent.addEventListener("scroll", () => {
    const scrollPosition = mainContent.scrollTop; // Get the current scroll position of main-content
    const totalScrollableHeight = mainContent.scrollHeight - mainContent.clientHeight; // Total scrollable height
    const scrollPercentage = Math.round((scrollPosition / totalScrollableHeight) * 100); // Calculate scroll percentage

    // Log the scroll percentage to the console
    console.log(`Scroll Percentage: ${scrollPercentage}%`);

    // Determine the index of the image to show based on the scroll position
    let index = 0;
    for (let i = 0; i < scrollThresholds.length; i++) {
        if (scrollPosition >= scrollThresholds[i]) {
            index = i;
        } else {
            break;
        }
    }

    // Hide all images and show only the current image
    images.forEach((img, i) => {
        const parent = img.parentElement; // Get the parent container
        if (i === index) {
            parent.style.display = "flex"; // Show the container
            img.style.display = "block"; // Show the image
        } else {
            parent.style.display = "none"; // Hide the container
        }
    });
});