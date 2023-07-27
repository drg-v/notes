import {
  NotesTable,
  NoteForm,
  ArchivedNotesTable,
  NotesCategoriesTable,
} from './components';
import Store from './store';
import { Error } from './ui/Messages';
import removeAllChildNodes from './utils/removeChildren';

class App {
  constructor(el) {
    this.store = new Store(this.render.bind(this));
    this.el = el;
  }

  createLayout(el) {
    removeAllChildNodes(el);

    const activeNotesTable = NotesTable({
      elements: this.store.getActiveNotes(),
      headers: [
        '#',
        'Name',
        'Created',
        'Content',
        'Category',
        'Days',
        '',
        '',
        '',
      ],
      store: this.store,
    });
    el.appendChild(activeNotesTable);

    if (this.store.showForm()) {
      const noteForm = NoteForm({
        elements: this.store.getFormFields(['name', 'content', 'category']),
        labels: ['Note Name', 'Content', 'Category'],
        store: this.store,
      });
      el.appendChild(noteForm);
    }

    const archivedNotesTable = ArchivedNotesTable({
      elements: this.store.getArchivedNotes(),
      headers: ['#', 'Name', 'Created', 'Content', 'Category', 'Days', ''],
      store: this.store,
    });
    el.appendChild(archivedNotesTable);

    const notesCategoriesTable = NotesCategoriesTable({
      elements: this.store.getNotesByCategories(),
      headers: ['Note Category', 'Active', 'Archived'],
    });
    el.appendChild(notesCategoriesTable);
  }

  render() {
    try {
      this.createLayout(this.el);
    } catch (err) {
      removeAllChildNodes(this.el);
      const error = Error('Error rendering page');
      this.el.appendChild(error);
    }
  }
}

export default App;
