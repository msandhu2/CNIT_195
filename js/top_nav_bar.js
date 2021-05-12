function top_nav(nav_element)

{

    var return_block = '';


    return_block = '<nav class="navbar navbar-dark bg-nav navbar-expand-lg fixed-top">\
        <a class="navbar-brand logo font-italic text-warning text-yellow" href="index.html">\
            <i class="fa fa-coffee my-dark"></i>\
           Javaliscious\
        </a>';
   
        if (nav_element == 'menu')     
        
        {
        
        return_block +=
        
        '<button class="menu_scroll_button" type="button" onClick="scroll_to(\'header_drinks\')">Drinks</button>\
            <div class="divider"></div>\
        <button class="menu_scroll_button" type="button" onClick="scroll_to(\'header_food\')">Food</button>\
            <div class="divider"></div>\
        <button class="menu_scroll_button" type="button" onClick="scroll_to(\'header_merchandise\')">Merchandise</button>';
        
         }
        
        return_block +=
        
        '<button class="navbar-toggler"\
                type="button"\
                data-toggle="collapse"\
                data-target="#navbar-list-6"\
                aria-controls="navbarNav"\
                aria-expanded="false"\
                aria-label="Toggle navigation">\
          <span class="navbar-toggler-icon"></span>\
        </button>\
        <div class="collapse navbar-collapse justify-content-end bg-center" id="navbar-list-6">\
          <ul class="navbar-nav">';

    if (nav_element == 'home')

    {

        return_block +=

            '<li class="nav-item active active-custom custom-hover">\
              <a class="nav-link nav-link-custom" href="index.html">HOME</span></a>\
            </li>';

    } else {

        return_block +=

            '<li class="nav-item active custom-hover">\
              <a class="nav-link nav-link-custom" href="index.html">HOME</span></a>\
            </li>';

    }

    if (nav_element == 'menu')

    {

        return_block +=

            '<li class="nav-item active active-custom custom-hover">\
                <a class="nav-link nav-link-custom" href="menu.html">MENU</a>\
            </li>';

    } else {

        return_block +=

            '<li class="nav-item custom-hover">\
                <a class="nav-link nav-link-custom" href="menu.html">MENU</a>\
            </li>';

    }

    if (nav_element == 'about')

    {

        return_block +=

            '<li class="nav-item active active-custom custom-hover">\
              <a class="nav-link nav-link-custom" href="about.html">ABOUT</a>\
            </li>';

    } else {

        return_block +=

            '<li class="nav-item custom-hover">\
              <a class="nav-link nav-link-custom" href="about.html">ABOUT</a>\
            </li>';

    }

  //  if (nav_element == 'gift_card')

  //  {

  //      return_block +=

  //          '<li class="nav-item active active-custom custom-hover">\
  //            <a class="nav-link nav-link-custom" href="giftCard/giftcard.html">GIFT CARD</a>\
  //          </li>';

  //  } else {

  //      return_block +=

  //         '<li class="nav-item custom-hover">\
  //           <a class="nav-link nav-link-custom" href="giftCard/giftcard.html">GIFT CARD</a>\
  //          </li>';

  //  }

    if (nav_element == 'register')

    {

        return_block +=

            '<li class="nav-item active active-custom custom-hover">\
              <a class="nav-link nav-link-custom" href="register.html">REGISTER</a>\
            </li>';

    } else {

        return_block +=

            '<li class="nav-item custom-hover">\
              <a class="nav-link nav-link-custom" href="register.html">REGISTER</a>\
            </li>';

    }

    if (nav_element == 'location')

    {

        return_block +=

           '<li class="nav-item nav-item-modified active active-custom custom-hover">\
                <a class="nav-link location nav-link-custom " href="location.html">\
                    <i class="fa fa-map-marker"></i>\
                </a>\
            </li>';

    } else {

        return_block +=

            '<li class="nav-item nav-item-modified custom-hover">\
                <a class="nav-link location nav-link-custom " href="location.html">\
                    <i class="fa fa-map-marker"></i>\
                </a>\
             </li>';

    }



    return_block +=

          '</ul>\
        </div>\
      </nav>'

    return return_block

}

function scroll_to (header_choice) {

var elmnt = document.getElementById(header_choice);
elmnt.scrollIntoView();


}


