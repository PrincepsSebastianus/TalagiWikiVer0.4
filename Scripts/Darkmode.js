let darkMode;

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode = true;
}
else{darkMode = false};

if(!darkMode){
  document.getElementById('darkModeSwitch').checked = true;
}


if(darkMode){
  document.body.classList.add("dark-mode");
}

document.getElementById("darkModeSwitch").addEventListener("change", function(e) {
  document.body.classList.toggle("dark-mode");
  e.preventDefault();
})

console.log(darkMode);