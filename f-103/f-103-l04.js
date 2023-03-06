let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = "green";
}
let action = document.body;
document.body.innerHTML = "Hello";
action.innerHTML += "...";
