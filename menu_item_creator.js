//Underscore Inserter
function us_insrt(inpt_name)

{

    return inpt_name.replace(" ", "_");

}

// Menu Item Generator
function menu_item_entry(selected_category)

{

    var menu_addition = "";
    var menu_addition_options = "";

    var ii;
    for (ii = 0; ii < menu_list.length; ii++) {

        if (menu_list[ii].category == selected_category) {


            // Add Options

            menu_addition_options = '<div class="row"><div class="columnA"><table style="width: 100%;\
                                                    border-collapse: separate;\
                                                    border-spacing: 5px;">\
                                        <colgroup>\
                                          <col style="width: 40%;">\
                                          <col style="width: 60%;">\
                                        </colgroup>'

            for (const property in menu_list[ii])

            {

                if (property != "id" && property != "category" && property != "name" &&
                    property != "description" && property != "image_url" &&
                    property != "url")

                {

                    menu_addition_options += '<tr><td style="text-align:right;">' +
                        property.replace("_", " ") + ':</td><td>'


                    if (menu_list[ii][property].length == 1)

                    {

                        menu_addition_options += menu_list[ii][property];

                    } else

                    {

                        menu_addition_options += '<select style="width:150pt"\
                                                  id="' + ii + "_" + property + '">'

                        for (jj = 0; jj < menu_list[ii][property].length; jj++)

                        {

                            menu_addition_options += '<option>' + menu_list[ii][property][jj] + '</option>';

                        }

                        menu_addition_options += '</select>';

                    }
                    
                     menu_addition_options += '</td></tr>';

                }

            }

            menu_addition_options += '</table></div>\
                                        <div class="columnB">\
                                         <button type="button" onclick="add_to_cart('
                                        + menu_list[ii].id + ')">Add to Cart\
                                        </div></div>';

            menu_addition += '<div class="card">\
                                <div class="card-horizontal">\
                                  <div class="img-square-wrapper">\
                                    <img src="' + menu_list[ii].image_url + 
                                    '" alt="' + menu_list[ii].name + '" width="200px">\
                                  </div>\
                                  <div class="card-body">\
                                    <p>\
                                      <a class="btn btn-primary"\
                                         data-toggle="collapse"\
                                         href="#collapse' + menu_list[ii].id + '"\
                                         role="button"\
                                         aria-expanded="false"\
                                         aria-controls="collapseExample">'
                                         + menu_list[ii].name +
                                      '</a>\
                                    </p>\
                                    <p class="card-text">' + menu_list[ii].description + '</p>\
                                  </div>\
                                </div>\
                                <div class="card-footer">\
                                  <div class="collapse" id="collapse' + menu_list[ii].id +
                                      '" data-parent="#menu_master">\
                                    <div class="card card-body">'
                                    + menu_addition_options +
                                    '</div>\
                                  </div>\
                                </div>\
                              </div><br>'

        }

    }
    return menu_addition;
}
