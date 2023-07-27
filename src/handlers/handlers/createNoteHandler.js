function createNoteHandler({ store }) {
  return (e) => {
    let target = e.target;
    while (target.tagName !== 'TR') target = target.parentNode;
    store.createNote(note);
  };
}

export default createNoteHandler;
