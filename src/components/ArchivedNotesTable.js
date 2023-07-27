import UnarchiveButton from '../ui/Buttons/UnarchiveButton';
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableHeaderCell,
} from '../ui/Table';
import Container from '../ui/Container';

function ArchivedNotesTable({ elements, headers, store }) {
  return Container({
    title: 'Archived Notes',
    children: [
      Table({
        elements,
        header: TableHeader({ elements: headers, render: TableHeaderCell }),
        render: TableRow({
          render: TableCell,
          buttons: [UnarchiveButton({ store })],
        }),
      }),
    ],
  });
}

export default ArchivedNotesTable;
