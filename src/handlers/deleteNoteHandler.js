function deleteNoteHandler({ store }) {
  return (e) => {
    let target = e.target;
    while (target.tagName !== 'TR') target = target.parentNode;
    store.deleteNote(target.id);
  };
}

export default deleteNoteHandler;
