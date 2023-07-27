import { showFormHandler } from '../../handlers';

function CreateButton({ store }) {
  return () => {
    let button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-primary';
    button.innerText = 'Create Note';
    button.addEventListener('click', showFormHandler({ store }), true);
    return button;
  };
}

export default CreateButton;
