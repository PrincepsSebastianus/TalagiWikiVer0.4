let i = false  
function mapEnlarge1(img){
    if(!i){
    img.style.scale = "1.35";
    img.style.transform = "translate(-13vw,-12.8vh)";
    img.style.padding = "10vh 35vw";
    img.style.backgroundColor = "rgb(33, 32, 41, 0.7)";
    i = true;
    }
    else{
    img.style.scale = "1";
    img.style.transform = "translate(0,0)";
    img.style.padding = "0";
    img.style.backgroundColor = "transparent";
    i = false;
    }
}
function mapEnlarge(img){
    if(!i){
    img.style.scale = "1.35";
    img.style.transform = "translate(2vw,-32.8vh)";
    img.style.padding = "20vh 35vw";
    img.style.backgroundColor = "rgb(33, 32, 41, 0.7)";
    i = true;
    }
    else{
    img.style.scale = "1";
    img.style.transform = "translate(0,0)";
    img.style.padding = "0";
    img.style.backgroundColor = "transparent";
    i = false;
    }
}