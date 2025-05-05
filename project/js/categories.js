//get categories

fetch(`${main_api_url}/products/categories`).then(res => res.json())
    .then(data => {
        let htmlTabs = `<a href="#" category="all" class="search_by_category text-decoration-none m-2 alert alert-warning">ALL</a>`;
        data.map(item => {
            htmlTabs += `<a href="#" category="${item}" class="search_by_category  text-decoration-none m-2 alert alert-info text-uppercase">${item}</a>`;
        });
        document.getElementById("tabs_categories").innerHTML = htmlTabs;
    });

    



