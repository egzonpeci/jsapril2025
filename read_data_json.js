
//localhost
// fetch("json/products.json")
fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {

        data = data.filter(x => x.category == "electronics");
        let htmlProducts = '';
        data.map(item => {
            htmlProducts += `
            <div class="col-md-3 mt-2">
              <div class="card">
               <img src="${item.image}" class="card-img-top" alt="...">
               <div class="card-body">
                 <p class="card-text">${item.title}</p>
                <p class="card-text fw-bold">Category: ${item.category}</p>
               </div>
               <div class="text-end m-2">
               <button onclick="GetDescription('${item.description}')" class="btn btn-info btn-sm">Details</button>
               </div>
               </div>
             </div>`;
        });
        document.getElementById("products").innerHTML = htmlProducts;
    })
    .catch(error => console.log("Gabimi" + error));


// document.writeln("test");


function productDetails(id) {
    alert(id);
}



function GetDescription(description) {
    alert(description);
}