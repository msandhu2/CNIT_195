function add_to_cart(menu_id)

{

    var order_item = {};

    order_item.name = menu_list[menu_id - 1].name;



    $('select').each(function() {

        if ($(this).attr('id').split("_")[0] == menu_id - 1)

        {


            order_item[$(this).attr('id').split("_")[1]] =
                document.getElementById($(this).attr('id')).value;

        };

    });



    var order_table_ref = document.getElementById('order_table').getElementsByTagName('tbody')[0];

    // Insert a row at the end of table
    var order_item_row = order_table_ref.insertRow();

    // Insert a cell at the end of the row
    var newCell_A = order_item_row.insertCell();
    var newCell_B = order_item_row.insertCell();

    newCell_A.appendChild(document.createTextNode(order_item.name));
    newCell_B.appendChild(document.createTextNode(order_item.Price));
    newCell_B.style.textAlign = "right";


    for (const property in order_item)

    {

        if (property != "name" && property != "Price")

        {

            order_item_row = order_table_ref.insertRow();
            newCell_A = order_item_row.insertCell();
            newCell_A.appendChild(document.createTextNode(property + ":"));
            newCell_A.style.textAlign = "right";

            newCell_B = order_item_row.insertCell();
            newCell_B.appendChild(document.createTextNode(order_item[property]));
            newCell_B.style.textAlign = "left";



        }

        order_item_row = order_table_ref.insertRow();
        newCell_A = order_item_row.insertCell();
        newCell_B = order_item_row.insertCell();

    }

}
