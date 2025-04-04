let availableKeywords = [];
let keywordLinks = [];

fetch("Scripts/Pages.json")
    .then(response => response.json())
    .then(function(data) {
        // Populate availableKeywords and keywordLinks
        data.forEach(item => {
            availableKeywords.push(item.name); // Add page names to availableKeywords
            keywordLinks.push(item); // Store the entire object (name and link)
        });
        console.log("Available Keywords:", availableKeywords);
        console.log("Keyword Links:", keywordLinks);
    })
    .catch(error => console.error("Error fetching Pages.json:", error));

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = keywordLinks.filter((item) => {
            return item.name.toLowerCase().includes(input.toLowerCase());
        });
        console.log("Filtered Results:", result);
    }
    display(result);
};

function display(result) {
    if (!result.length) {
        resultsBox.innerHTML = "";
        return;
    }

    const content = result
        .map((item) => {
            return `<li onclick="redirectToPage('${item.link}')">${item.name}</li>`;
        })
        .join("");

    resultsBox.innerHTML = `<ul>${content}</ul>`;
}

function redirectToPage(link) {
    if (link) {
        window.location.href = link; // Use the link directly
    }
}