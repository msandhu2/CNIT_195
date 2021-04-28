var cart_contents = [];
var cart_item_index = 0;
var NN = 0;
var cart_subtotal = 0;
var tax_and_fees = 0;
var cart_total = 0;
var delete_button;
var order_table_ref;
var order_item_row;
var newCell_A;
var newCell_B;

function add_to_cart(menu_id)

{

    cart_item_index += 1;
    cart_contents[cart_item_index] = {};


    var order_item = {};

    order_item.name = menu_list[menu_id - 1].name;



    $('select').each(function() {

        if ($(this).attr('id').split("_")[0] == menu_id - 1)

        {


            order_item[$(this).attr('id').split("_")[1]] =
                document.getElementById($(this).attr('id')).value;

        };

    });

    for (const property in order_item)

    {

        cart_contents[cart_item_index][property] = order_item[property];

    }


    update_totals();
    display_order();


}

function remove_from_cart(index_of_item_in_cart)


{
    
    for (const property in cart_contents[index_of_item_in_cart])

        {

         cart_contents[index_of_item_in_cart][property]= "";
                           
         }       
    
    update_totals();
    display_order();

}



function display_order()

{

    $("#order_table tr").remove();
    order_table_ref = document.getElementById('order_table').getElementsByTagName('tbody')[0];

    for (NN = 1; NN < cart_contents.length; NN++)

      {
      
       if (cart_contents[NN].Price != "") 
     
    
        {

        order_item_row = order_table_ref.insertRow();

        newCell_A = order_item_row.insertCell();
        newCell_B = order_item_row.insertCell();

        newCell_A.appendChild(document.createTextNode(cart_contents[NN].name));
        newCell_B.appendChild(document.createTextNode(cart_contents[NN].Price));
        newCell_B.style.textAlign = "right";


        for (const property in cart_contents[NN])

        {

            if (property != "name" && property != "Price")

            {

                order_item_row = order_table_ref.insertRow();
                newCell_A = order_item_row.insertCell();
                newCell_A.appendChild(document.createTextNode(property + ":"));
                newCell_A.style.textAlign = "right";

                newCell_B = order_item_row.insertCell();
                newCell_B.appendChild(document.createTextNode(cart_contents[NN][property]));
                newCell_B.style.textAlign = "left";

            } else

            {
                newCell_A.style.fontWeight = "bold";
            }

        }

        delete_button = document.createElement("BUTTON");
        delete_button.innerHTML = "Remove";
        delete_button.setAttribute( "onClick", "javascript: remove_from_cart(" + NN + ");" );
        

        order_item_row = order_table_ref.insertRow();
        newCell_A = order_item_row.insertCell();
        newCell_A.appendChild(document.createTextNode('\u00A0'));

        newCell_B = order_item_row.insertCell();
        newCell_B.appendChild(delete_button);
        newCell_B.style.textAlign = "right";

        order_item_row = order_table_ref.insertRow();
        newCell_A = order_item_row.insertCell();
        newCell_A.appendChild(document.createTextNode('\u00A0'));
    }
    
  }  

}



function update_totals()

{

    cart_subtotal = 0;


    for (NN = 1; NN < cart_contents.length; NN++)

    {

    if (cart_contents[NN].Price != "")
    
    {

        cart_subtotal += parseFloat(cart_contents[NN].Price.split('$')[1]);

    }
    
    }

    tax_and_fees = cart_subtotal * 0.15;
    cart_total = cart_subtotal + tax_and_fees;

    document.getElementById('order_subtotal').innerHTML = cart_subtotal.toFixed(2) + '&nbsp;&nbsp;&nbsp;&nbsp;';
    document.getElementById('order_taxes_and_fees').innerHTML = tax_and_fees.toFixed(2) + '&nbsp;&nbsp;&nbsp;&nbsp;';
    document.getElementById('order_grand_total').innerHTML = cart_total.toFixed(2) + '&nbsp;&nbsp;&nbsp;&nbsp;';

}


function submit_order()


{

    NN = 0;

    while (cart_contents[NN] != null)

      {
      
       if (cart_contents[NN].Price == "") 
     
    
        {
        
        
          cart_contents.splice(NN,1);

        
         }
       
        NN += 1;  
         
       }

 var item_qty = cart_contents.length - 1;

 alert('Code Pending to Submit Order of ' + item_qty + ' items at a total cost of $' + cart_total.toFixed(2) + ' through Stripe.');

location.reload();


 }


