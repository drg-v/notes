function archiveNoteHandler({ store }) {
  return (e) => {
    let target = e.target;
    while (target.tagName !== 'TR') target = target.parentNode;
    store.archiveNote(target.id);
  };
}

export default archiveNoteHandler;
