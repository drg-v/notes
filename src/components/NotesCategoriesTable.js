import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableCell,
} from '../ui/Table';
import Container from '../ui/Container';

function NotesCategoriesTable({ elements, headers }) {
  return Container({
    title: 'Notes by Categories',
    children: [
      Table({
        elements,
        header: TableHeader({ elements: headers, render: TableHeaderCell }),
        render: TableRow({
          render: TableCell,
          buttons: [],
        }),
      }),
    ],
  });
}

export default NotesCategoriesTable;
