import { submitFormHandler } from '../../handlers';

function Form({ elements = [], render = [], button, store }) {
  const form = document.createElement('form');
  const fields = elements.map((el, index) => render[index]({ element: el }));
  form.append(...fields, button);
  form.addEventListener(
    'submit',
    submitFormHandler({ store, fields: elements.map((el) => el.id) })
  );
  return form;
}

export default Form;
