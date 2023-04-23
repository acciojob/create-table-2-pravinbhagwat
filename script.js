function createTable() {
    //Write your code here
  const rn = prompt('Input number of rows:');
  const cn = prompt('Input number of columns:');

  // Get the table element
  const myTable = document.getElementById('myTable');

  // Create the table rows and cells
  for (let i = 0; i < rn; i++) {
    // Create a new row element
    const row = myTable.insertRow(i);

    for (let j = 0; j < cn; j++) {
      // Create a new cell element
      const cell = row.insertCell(j);

      // Set the text of the cell
      cell.innerHTML = `Row-${i} Column-${j}`;
    }
  }
}
