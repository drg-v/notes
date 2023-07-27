import {
  ArchiveButton,
  CreateButton,
  DeleteButton,
  EditButton,
} from '../ui/Buttons';
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableHeaderCell,
} from '../ui/Table';
import Container from '../ui/Container';

function NotesTable({ elements, headers, store }) {
  return Container({
    title: 'Active Notes',
    children: [
      Table({
        elements,
        header: TableHeader({ elements: headers, render: TableHeaderCell }),
        render: TableRow({
          render: TableCell,
          buttons: [
            EditButton({ store }),
            ArchiveButton({ store }),
            DeleteButton({ store }),
          ],
        }),
      }),
      CreateButton({ store })(),
    ],
  });
}

export default NotesTable;
