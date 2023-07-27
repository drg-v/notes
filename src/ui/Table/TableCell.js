function TableCell({ element }) {
  let cell = document.createElement('td');
  cell.innerText = element;
  return cell;
}

export default TableCell;
