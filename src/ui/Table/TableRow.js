function TableRow({ render, buttons }) {
  return ({ element = {} }) => {
    let row = document.createElement('tr');
    row.id = element.id;
    let cells = Object.values(element).map((field) =>
      render({ element: field })
    );
    row.append(...cells, ...buttons.map((button) => button()));
    return row;
  };
}

export default TableRow;
