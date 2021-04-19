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

            menu_addition_options = '<br><table style="width: 100%;\
                                                    border-collapse: separate;\
                                                    border-spacing: 5px;">\
                                        <colgroup>\
                                          <col style="width: 40%;">\
                                          <col style="width: 60%;">\
                                        </colgroup>'                            
                                            
           for (const property in menu_list[ii])                             
                                       
              {                            
              
               if (property != "id" && property != "category" && property != "name"
                                    && property != "description" && property != "image_url"
                                    && property != "url" )
               
               {
              
               menu_addition_options += '<tr><td style="text-align:right;">' +
                                         property.replace("_"," ") + ':</td><td>'
                 
                 
              if (menu_list[ii][property].length == 1)
               
                 {
                 
                  menu_addition_options += menu_list[ii][property];
                 
                  }
                  
               else
               
                 {    
                 
                  menu_addition_options += '<select style="width:150pt"\
                                                  id="' + ii + "_" + property + '">'
                                   
                   
                                   
                                                
               for (jj = 0; jj < menu_list[ii][property].length; jj++)
               
                {
                
                 menu_addition_options += '<option>' + menu_list[ii][property][jj] + '</option>';
                
                 }
               
               menu_addition_options += '</select></td></tr>';       
              
               }           
               
               }                 
   
              }
   
            menu_addition_options +=   '<tr><td></td><td>\
                                        <button type="button" style="width:150pt" onclick="add_to_cart('
                                        + menu_list[ii].id + ')">Add to Cart</td></tr>\
                                      </table>';
            
            menu_addition += '<div class="card-header" id="menu_item_' + us_insrt(menu_list[ii].name) + '">\
                                <h2 class="mb-0">\
                                    <button class="btn btn-link"\
                                            type="button"\
                                            data-toggle="collapse"\
                                            data-target="#collapse_' + us_insrt(menu_list[ii].name) + '"\
                                            aria-expanded="true"\
                                            aria-controls="collapse_' + us_insrt(menu_list[ii].name) + '">' +
                                            menu_list[ii].name +
                                   '</button>\
                                </h2>\
                            </div>\
                            <div id="collapse_' + us_insrt(menu_list[ii].name) + '"\
                                 class="collapse"\
                                 aria-labelledby="menu_item_' + us_insrt(menu_list[ii].name) + '"\
                                 data-parent="#submenu_' + menu_list[ii].category + '">\
                              <div class="card-body item">\
                                <div class="row">\
                                  <div class="columnA">'
                                    + menu_list[ii].description + menu_addition_options + 
                                   '</div>\
                                    <div class="columnB">\
                                    <img src="' + menu_list[ii].image_url + '" alt="'
                                     + menu_list[ii].name + '" width="100%">\
                                  </div>\
                                  </div>\
                                </div>\
                            </div>';

        }

    }
    return menu_addition;
}
