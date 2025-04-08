let darkMode = localStorage.getItem("darkMode");

if (darkMode === null) {
  darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
} else {
  darkMode = darkMode === "true";
}

if (darkMode) {
  document.body.classList.add("dark-mode");
  document.getElementById("darkModeSwitch").checked = false;
} else {
  document.body.classList.remove("dark-mode");
  document.getElementById("darkModeSwitch").checked = true;
}

document.getElementById("darkModeSwitch").addEventListener("change", function (e) {
  darkMode = !e.target.checked;
  if (darkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
  localStorage.setItem("darkMode", darkMode);
});