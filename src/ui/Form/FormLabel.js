function FormLabel({ element, id }) {
  let label = document.createElement('label');
  label.setAttribute('for', id);
  label.innerText = element;
  return label;
}

export default FormLabel;
