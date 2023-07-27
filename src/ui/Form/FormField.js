function FormField({ renderLabel, renderInput }) {
  return ({ element }) => {
    const field = document.createElement('div');
    field.className = 'form-group';
    const label = renderLabel({ element: element.label, id: element.id });
    const input = renderInput({ element: element.element, id: element.id });
    field.append(label, input);
    return field;
  };
}

export default FormField;
