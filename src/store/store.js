import filterObject from '../utils/finlterObject';
import { data, defaultValues } from './data';
import Categories from './Categories';

class Store {
  constructor(render) {
    this.state = {
      activeNotes: data,
      archivedNotes: [],
      activeFormId: '',
      activeForm: false,
      maxId: data.length,
      formError: '',
    };
    this.render = render;
  }

  getActiveNotes() {
    return this.state.activeNotes;
  }

  getArchivedNotes() {
    return this.state.archivedNotes;
  }

  getFormError() {
    return this.state.formError;
  }

  showForm() {
    return this.state.activeForm;
  }

  setShowForm() {
    this.state.activeForm = true;
    this.state.activeFormId = '';
    this.render();
  }

  setFormError(message) {
    this.state.formError = message;
    this.render();
  }

  getFormFields(fields) {
    if (!this.state.activeFormId) return defaultValues;
    let formFields = this.state.activeNotes.find(
      (note) => note.id === this.state.activeFormId
    );
    return filterObject(formFields, fields);
  }

  countNotes(notes, key) {
    return notes.reduce(
      (count, note) => (note.category === Categories[key] ? count + 1 : count),
      0
    );
  }

  getNotesByCategories() {
    return Object.keys(Categories).map((key) => {
      const activeAmount = this.countNotes(this.state.activeNotes, key);
      const archivedAmount = this.countNotes(this.state.archivedNotes, key);
      return {
        name: Categories[key],
        activeAmount,
        archivedAmount,
      };
    });
  }

  addNote(note) {
    this.state.activeNotes = [...this.state.activeNotes, note];
    this.render();
  }

  archiveNote(id) {
    const noteIndex = this.state.activeNotes.findIndex(
      (note) => note.id === id
    );
    this.state.archivedNotes = [
      ...this.state.archivedNotes,
      this.state.activeNotes[noteIndex],
    ];
    this.state.activeNotes = this.state.activeNotes.filter(
      (note) => note.id !== id
    );
    this.render();
  }

  unarchiveNote(id) {
    const noteIndex = this.state.archivedNotes.findIndex(
      (note) => note.id === id
    );
    this.state.activeNotes = [
      ...this.state.activeNotes,
      this.state.archivedNotes[noteIndex],
    ];
    this.state.archivedNotes = this.state.archivedNotes.filter(
      (note) => note.id !== id
    );
    this.render();
  }

  editNote(id) {
    this.state.activeFormId = id;
    this.state.activeForm = true;
    this.render();
  }

  submitNote(formValues) {
    this.state.formError = '';
    let note = formValues.reduce((note, field) => ({ ...note, ...field }), {});
    note.created = new Date().toLocaleDateString();
    note.dates = note.content
      .match(/[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}/g)
      .join(', ');
    if (this.state.activeFormId) {
      note.id = this.state.activeFormId;
      this.state.activeNotes = this.state.activeNotes.map((el) =>
        el.id !== note.id
          ? el
          : {
              id: String(note.id),
              name: note.name,
              created: note.created,
              content: note.content,
              category: note.category,
              dates: note.dates,
            }
      );
    } else {
      this.state.maxId += 1;
      note.id = this.state.maxId;
      this.state.activeNotes = [
        ...this.state.activeNotes,
        {
          id: String(note.id),
          name: note.name,
          created: note.created,
          content: note.content,
          category: note.category,
          dates: note.dates,
        },
      ];
    }
    this.state.activeFormId = '';
    this.state.activeForm = false;
    this.render();
  }

  deleteNote(id) {
    this.state.activeNotes = this.state.activeNotes.filter(
      (el) => el.id !== id
    );
    this.render();
  }
}

export default Store;
