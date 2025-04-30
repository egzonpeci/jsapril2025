fetch("json/products_1.json").then(res => res.json())
    .then(data => {

        // console.log(data.products);
        let htmlProd = '';
        data.products.map(item => {
            htmlProd += Products.ShowCards(item);
        });

        document.getElementById("products").innerHTML = htmlProd;
    })
    .catch(gabim => console.log(gabim))
    .finally(console.log("mire eshte cdo gje"));



class Products {
    constructor(id, category, description, title, thumbnail) {
        this.id = id;
        this.category = category;
        this.description = description;
        this.title = title;
        this.thumbnail = thumbnail;
    }

    getDescription() {
        return this.description + " " + this.category;
    }

    static ShowData(objekti) {
        document.writeln("Metoda statike " + objekti.description);
    }

    static ShowCards(obj) {
        return `
            <div class="alert alert-success mt-2">
            <img src="${obj.thumbnail}">
            <h1>${obj.title}</h1>
           <p><strong>Desc:</strong> ${obj.description} </p>
           <div class="text-end">
           <button class="btn btn-info btn-sm">Add to Cart</button>
           </div>
             </div>`;
    }

}

let obj_1 = new Products(1, "kategoria x", "desc test");
console.log(obj_1.getDescription());
// obj_1.ShowData();
Products.ShowData(obj_1);








