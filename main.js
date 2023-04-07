//bodymovin js to play Lottiefiles
const loadAnimation = document.getElementById("loadani")
const animItem = bodymovin.loadAnimation({
    wrapper: loadAnimation,
    animType: 'svg',
    loop: false,
    autoplay: true,
    path:'/Assets/loading.json',
    speed: 3,
});
//----------------------------------------

// Using JQUERY to handle page load with a delay because page is not heavy enough.
$(window).on("load",function(){
    // $(".loader-wrapper").delay(2000).fadeToggle(300);
    $(".loader-wrapper").hide();
});
//----------------------------------------
