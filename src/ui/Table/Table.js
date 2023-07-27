function Table({ elements = [], header, render }) {
  let table = document.createElement('table');
  table.className = 'table table-striped';
  table.appendChild(header);
  let tableBody = document.createElement('tbody');
  let tableRows = elements.map((el) => render({ element: el }));
  tableBody.append(...tableRows);
  table.appendChild(tableBody);
  return table;
}

export default Table;
