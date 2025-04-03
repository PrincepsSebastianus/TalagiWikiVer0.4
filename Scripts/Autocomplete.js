let availableKeywords = [
    'Storia',
    'Regni',
    'Casate',
    'Magia',
];

let keywordLinks = {
    'Storia': 'Page.html',
    'Regni': 'regni.html',
    'Casate': 'casate.html',
    'Magia': 'magia.html',
};

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
}
function display(result){
    if (!result.length) {
        resultsBox.innerHTML = "";
        return;
    }


    const content = result.map((list)=>{
        return `<li onclick="redirectToPage('${list}')">${list}</li>`;
    }).join('');

    resultsBox.innerHTML = `<ul>${content}</ul>`;
}

function redirectToPage(keyword) {
    if (keywordLinks[keyword]) {
        window.location.href = keywordLinks[keyword]; 
    }
}