const box = document.getElementById('alertBox');
const button = document.getElementById('confirmButton');

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

if (getCookie('data') === 'true') {
    box.style.display = 'none';
}

button.addEventListener('click', function(){
    const width = window.screen.width;
    const height = window.screen.height;
    document.cookie = `data=true; path=/; max-age=31536000`; // 1 anno
    document.cookie = `screen_width=${width}; path=/; max-age=31536000`;
    document.cookie = `screen_height=${height}; path=/; max-age=31536000`;
    box.style.display = 'none';

    const savedWidth = getCookie('screen_width');
    const savedHeight = getCookie('screen_height');
    console.log("Larghezza schermo:", savedWidth);
    console.log("Altezza schermo:", savedHeight);
});