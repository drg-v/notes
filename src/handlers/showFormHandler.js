function showFormHandler({ store }) {
  return () => {
    store.setShowForm();
  };
}

export default showFormHandler;
