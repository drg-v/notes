function validateForm(formFields) {
  return formFields.every((field) => {
    const val = Object.values(field)[0];
    return val.length > 0 && val.length < 200;
  });
}

export default validateForm;
