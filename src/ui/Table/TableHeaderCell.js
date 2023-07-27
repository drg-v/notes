function TableHeaderCell({ element }) {
  let cell = document.createElement('th');
  cell.innerText = element;
  return cell;
}

export default TableHeaderCell;
