function TableHeader({ elements = [], render }) {
  let tableHeader = document.createElement('thead');
  let headerRow = document.createElement('tr');
  let headers = elements.map((el) => render({ element: el }));
  headerRow.append(...headers);
  tableHeader.appendChild(headerRow);
  return tableHeader;
}

export default TableHeader;
