function FormSelect({ options = [] }) {
  return ({ element, id }) => {
    let select = document.createElement('select');
    select.className = 'form-select mx-2';
    select.id = id;
    let selectOptions = options.map((el) => {
      let option = document.createElement('option');
      option.value = el;
      option.innerText = el;
      if (element === el) option.selected = 'selected';
      return option;
    });
    select.append(...selectOptions);
    return select;
  };
}

export default FormSelect;
