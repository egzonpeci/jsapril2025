$(document).ready(function () {
    class Product {
        constructor(id, title, image, price, category) {
            this.id = id;
            this.title = title;
            this.image = image;
            this.price = price;
            this.category = category;
        }

        static CardGeneration(obj) {
            return `
        <div class="col-md-3">
        <div class="card">
             <img src="${obj.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${obj.title}</p>
    <div class="text-end">
    <strong class="card-text">${obj.price}</strong>
  </div>
    <div class="">
    <strong class="card-text">Category: ${obj.category}</strong>
  </div>
  </div>
  </div>
</div>`;
        }
    }


    //get all products

    let currentCategory = localStorage.getItem("category_name") == null ? "all" : localStorage.getItem("category_name");

    GetProductsByUrl("/products", currentCategory);

    resetAllClass();

    // filter products by category
    $(document).on("click", ".search_by_category", function () {
        resetAllClass();
        let category = $(this).attr("category");
        $(this).removeClass("alert-info");
        $(this).addClass("alert-warning");
        $(this).addClass("active");
        let urlForSearch = category == "all" ? `/products` : `/products/category/${category}`;
        GetProductsByUrl(`${urlForSearch}`, category);
    });


    function GetProductsByUrl(url, category) {
        localStorage.setItem("category_name", category);
        let categoryName = localStorage.getItem("category_name");
        url = categoryName == "all" ? `/products` : `/products/category/${category}`;
        fetch(`${main_api_url}${url}`).then(res => res.json())
            .then(data => {
                let products = '';
                data.map(product => {
                    products += Product.CardGeneration(product);
                })
                document.getElementById("products").innerHTML = products;
            });
    }

    function resetAllClass() {
        $(".search_by_category").addClass("alert-info");
        $(".search_by_category").removeClass("alert-warning");
        $(".search_by_category").removeClass("active");
    }


    function setClassActive() {
        let getActiveClass = $(".search_by_category");
        console.log(getActiveClass);
    }
    
    setClassActive();
});


