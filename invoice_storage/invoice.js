
let productsStorage = localStorage.getItem("products");
document.getElementById("product_item").innerHTML = productsStorage
TotalInvoice();

function AddProduct() {

    //get value from form fields
    let getDesc = document.getElementById("desc").value;
    let getQty = document.getElementById("qty").value;
    let getPrice = document.getElementById("price").value;

    let htmlPayload = Createrow(getDesc, getPrice, getQty);
    document.getElementById("product_item").innerHTML += htmlPayload;

    localStorage.setItem("products", document.getElementById("product_item").innerHTML);
    TotalInvoice();
}

function Createrow(desc, price, qty) {
    return `
                 <tr onclick="deleteProduct(this)">
                    <td>1</td>
                    <td>${desc}</td>
                    <td>${price}</td>
                    <td>
                    <input type="number" value="${qty}">
                   </td>
                    <td colspan="2" class="amount" amount="${qty * price}">
                    ${qty * price}  
                    <button onclick="deleteProduct()" class="btn btn-danger btn-sm">X</button>
                    </td>
                </tr>
   `;
}


function TotalInvoice() {
    let getAmounts = document.getElementsByClassName("amount");
    let sum = 0;
    for (let i = 0; i < getAmounts.length; i++) {
        sum += Number.parseFloat(getAmounts[i].getAttribute("amount"));
    }
    document.getElementById("totalinvoice").innerText = sum;
}


// function deleteProduct(obj) {
//     obj.remove();
//     localStorage.setItem("products", document.getElementById("product_item").innerHTML);
//     let productsStorage_1 = localStorage.getItem("products");
//     document.getElementById("product_item").innerHTML = productsStorage_1
//     TotalInvoice();
// }