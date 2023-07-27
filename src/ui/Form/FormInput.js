function FormInput({ element, id }) {
  let input = document.createElement('input');
  input.setAttribute('id', id);
  input.className = 'form-control';
  input.value = element;
  return input;
}

export default FormInput;
