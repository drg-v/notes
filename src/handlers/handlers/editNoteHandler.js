function editNoteHandler({ store }) {
  return (e) => {
    let target = e.target;
    while (target.tagName !== 'TR') target = target.parentNode;
    store.editNote(target.id);
  };
}

export default editNoteHandler;
