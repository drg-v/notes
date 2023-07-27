import validateForm from '../utils/validateForm';

function submitFormHandler({ store, fields }) {
  return (e) => {
    e.preventDefault();
    const formFields = fields.map((field) => ({
      [field]: document.querySelector(`#${field}`).value,
    }));
    const isValid = validateForm(formFields);
    isValid
      ? store.submitNote(formFields)
      : store.setFormError(
          "Inputs can't be empty or longer than 200 characters"
        );
  };
}

export default submitFormHandler;
