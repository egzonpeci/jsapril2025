$(document).ready(function () {

    let current_nrprod = localStorage.getItem("nr_prod") == null ? 0 : localStorage.getItem("nr_prod");
    $("#nr_prod").text(current_nrprod);

    $(document).on("click", ".add-to-cart", function () {
        let nr_prod = Number.parseInt($("#nr_prod").text());
        localStorage.setItem("nr_prod", nr_prod + 1);
        let productId = $(this).attr("id");

        fetch(`${main_api_url}/products/${productId}`)
            .then(json => json.json())
            .then(data => {
                let checkProduct = localStorage.getItem("products_cart") == null ? true : false;
                if (checkProduct) {
                    let obj = [];
                    obj.push(data);
                    localStorage.setItem("products_cart", JSON.stringify(obj));
                }
                if (!checkProduct) {
                    let obj = JSON.parse(localStorage.getItem("products_cart"));
                    obj.push(data);
                    localStorage.setItem("products_cart", JSON.stringify(obj));
                }
            });

        //get after update
        let current_nrprod = localStorage.getItem("nr_prod");
        $("#nr_prod").text(current_nrprod);
        // alert(productId);
    });

    let allProducts = localStorage.getItem("products_cart") == null ? null : JSON.parse(localStorage.getItem("products_cart"));

    if (allProducts != null) {
        let rowProducts = '';

        for (let i = 0; i < allProducts.length; i++) {
            rowProducts += `
           
           <tr id="row_${allProducts[i].id}">
              <td>
                   <img height="70" width="70" src="${allProducts[i].image}">
              </td>
              <td>
                 ${allProducts[i].title}
              </td>
              <td>1</td>
              <td>${allProducts[i].price}</td>
              <td>
               <button data-id="${allProducts[i].id}" class="delete_prod btn btn-danger btn-sm" >X</button>
              </td>
           </tr>
           `;

        }
        $("#prod_cart").html(rowProducts);


        $(document).on("click", ".delete_prod", function () {
            let allProducts = localStorage.getItem("products_cart") == null ? null : JSON.parse(localStorage.getItem("products_cart"));
            let prod_id = $(this).attr("data-id");
            $(`#row_${prod_id}`).remove();
            let newObj = [];
            if (allProducts != null) {
                allProducts.map(item => {
                    if (item.id != prod_id) {
                        newObj.push(item)
                    }
                })
                $("#nr_prod").text(newObj.length);
                localStorage.setItem("nr_prod", newObj.length);
                localStorage.setItem("products_cart", JSON.stringify(newObj));
            }
        });

    }
});

