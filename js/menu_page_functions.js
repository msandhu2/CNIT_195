var elmnt = document.getElementById("menu_master");

$(document).ready(function(){

    $(".menu-btn").click(function(){
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });
});

$(elmnt).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop_menu_master').fadeIn();
    } else {
        $('#toTop_menu_master').fadeOut();
    }
});

$("#toTop_menu_master").click(function() {
    //$("html, body").animate({scrollTop: 0}, 800);
    //document.getElementById("scroll_page_div").animate({scrollTop: 0}, 800);
    
  elmnt.scrollTop = 0;
      
 });
 



