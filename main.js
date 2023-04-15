// Pages DOM
let loadingP = document.getElementById("loader-wrap");
let landingP = document.getElementById("landing");
let contentP = document.getElementById("content");
let typoP = document.getElementById("typo");
let demoP = document.getElementById("demo");
//----------------------------------------

// Arrow buttons
let rightArr = document.getElementById("rightArr");
let leftArr = document.getElementById("leftArr");
let refreshBut = document.getElementById("refreshBut")
rightArr.style.display = "none";
leftArr.style.display = "none";
refreshBut.style.display = "none";
//----------------------------------------


// Pages Visibility default
landingP.style.display = "none"
contentP.style.display = "none"
typoP.style.display = "none"
demoP.style.display = "none"
//----------------------------------------



//bodymovin js to play Lottiefiles
const loadAnimation = document.getElementById("loadani")
const animItem = bodymovin.loadAnimation({
    wrapper: loadAnimation,
    animType: 'svg',
    loop: false,
    autoplay: true,
    path:'/Assets/loading.json',
});
//----------------------------------------

// Using JQUERY to handle page load with a delay because page is not heavy enough.
$(window).on("load",function(){
    $(".loader-wrapper").delay(2000).fadeToggle(300);
    // $(".loader-wrapper").hide();
});
//----------------------------------------

setTimeout(`loadingP.style.display = "none"
            landingP.style.display = "block"
            rightArr.style.display = "block"`, 2400);

// Anime.js animation
var hptitleLoad = anime({
    targets: '#titlewrapper',
    delay: 2100,
    translateX : 1000,
    // autoplay: false
  });
//----------------------------------------

let count = 0;
let helvetica = 'Helvetica';
let speed = 100;

let typeEffect = () => {

    if (count < helvetica.length) {
        document.getElementById("typer").value += helvetica.charAt(count);
        count++;
        setTimeout(typeEffect, speed);
      }
}

// Arrow functions
rightArr.onclick = () => {

    if(landingP.style.display == "block")
    {
        landingP.style.display = "none";
        contentP.style.display ="block";
        leftArr.style.display = "block";
    }
    else if(contentP.style.display == "block")
    {
        contentP.style.display = "none";
        typoP.style.display = "block";
    }
    else if(typoP.style.display == "block")
    {
        typoP.style.display = "none";
        demoP.style.display = "block";
        rightArr.style.display = "none";
        leftArr.style.display = "none"
        refreshBut.style.display = "block"
        typeEffect();
        document.getElementById("typer").focus();
    }
    
}
leftArr.onclick = () => {

    if(contentP.style.display == "block")
    {
        contentP.style.display = "none";
        landingP.style.display = "block";
        leftArr.style.display = "none";
    }
    else if(typoP.style.display == "block")
    {
        typoP.style.display = "none";
        contentP.style.display = "block";
    }  
}

refreshBut.onclick = () => {
    demoP.style.display = "none"
    refreshBut.style.display = "none"
    rightArr.style.display = "block"
    landingP.style.display = "block"
}

let ChangeFont = (font) => {
    
document.getElementById("typer").style.fontFamily = font;
document.getElementById("typer").focus();
}

let resizeL = () => {
    let letter = document.getElementById("typer")

    if(letter.value.length >= 9){
        letter.style.fontSize = "10rem";
        console.log("Size change");
    }
    else{
        letter.style.fontSize = "16rem";
    }
}


