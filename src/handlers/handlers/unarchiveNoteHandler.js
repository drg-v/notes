function unarchiveNoteHandler({ store }) {
  return (e) => {
    let target = e.target;
    while (target.tagName !== 'TR') target = target.parentNode;
    store.unarchiveNote(target.id);
  };
}

export default unarchiveNoteHandler;
