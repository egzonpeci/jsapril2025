
let students = [
    ["1", "Filan Fisteku", "Prishtine", "044112233"],
    ["2", "Filan Fisteku", "Prishtine", "044112233"],
    ["3", "Filan Fisteku", "Prishtine", "044112233"],
    ["4", "Filan Fisteku", "Prishtine", "044112233"],
    ["5", "Filan Fisteku", "Prishtine", "044112233"],
    ["6", "Filan Fisteku", "Prishtine", "044112233"]
]


function generateCard(description) {
    return `
    <div class="col-md-3 m-2">
       <div class="card">
  <img src="https://www.bing.com/th/id/OIP.UvpbLr323Tc9ukIL3PEEygHaHa?w=100&h=101&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${description}</p>
  </div>
  </div>
</div>
    `;
}

let htmlDynamicData = '';
// for (let i = 0; i < students.length; i++) {
//     htmlDynamicData += `
//        <p>Studenti me emrin ${students[i][1]} dhe numrin e telefonit ${students[i][3]}</p>
//     `;
// }

for (let i = 0; i < 0; i++) {
    htmlDynamicData += generateCard("Lorem ipsum test");
}

document.getElementById("setcard").innerHTML = htmlDynamicData;


//te krijohet tabela tbody

let htmlBody = '';

for (let i = 0; i < students.length; i++) {
    htmlBody += `<tr id="row_${i + 1}" class="item_row">`;
    for (let j = 0; j < students[i].length; j++) {
        htmlBody += `<td>${students[i][j]}</td>`
    }
    htmlBody += `<td><button onclick="callFunction('row_${i + 1}')" class="btn btn-danger">X</button></td>`;
    htmlBody += "</tr>";
}

document.getElementById("tableBody").innerHTML = htmlBody;
function callFunction(rowid) {
    let getRowById = document.getElementById(rowid);
    getRowById.hidden = true;
}


function appendRow() {


    let countRowByClassName = document.getElementsByClassName("item_row").length + 1;

    let singleRow = `<tr id="row_${countRowByClassName}" class="item_row">
    <td>${countRowByClassName}</td><td>Filan Fisteku</td>
    <td>Prishtine</td><td>044112233</td>
    <td>
    <button onclick="callFunction('row_${countRowByClassName}')" class="btn btn-danger">X</button>
    </td></tr>`;

    document.getElementById("tableBody").innerHTML += singleRow;

}




