class User {
    constructor(email, phone, username) {
        this.email = email;
        this.phone = phone;
        this.username = username;
    }

    static GenerateRow(obj) {
        return `<tr id="row_${obj.id}">
                    <td>${obj.email}</td>   
                    <td>${obj.username}</td>
                    <td>${obj.phone}</td>
                    <td><button onclick="deleteUser(${obj.id})" class="btn btn-danger">Delete</button>  </td>
                </tr>`;
    }

}


//get users

fetch("https://fakestoreapi.com/users", {
    method: "GET"
})
    .then(res => res.json())
    .then(users => {
        let htmlUsers = '';
        users.forEach(element => {
            htmlUsers += User.GenerateRow(element);
        });
        document.getElementById("users").innerHTML = htmlUsers;
    });



function deleteUser(id) {
    let row = document.getElementById(`row_${id}`);
    row.style.display = "none";
}