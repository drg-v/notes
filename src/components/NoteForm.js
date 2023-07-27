import { Form, FormField, FormLabel, FormInput, FormSelect } from '../ui/Form';
import { SubmitButton } from '../ui/Buttons';
import Container from '../ui/Container';
import Categories from '../store/Categories';
import { Error } from '../ui/Messages';

function NoteForm({ elements = {}, labels, store }) {
  const elementsEntries = Object.entries(elements);
  const formElements = elementsEntries.map((el, index) => ({
    label: labels[index],
    element: el[1],
    id: el[0],
  }));

  return Container({
    title: 'Note Form',
    children: [
      Form({
        elements: formElements,
        render: [
          FormField({ renderLabel: FormLabel, renderInput: FormInput }),
          FormField({ renderLabel: FormLabel, renderInput: FormInput }),
          FormField({
            renderLabel: FormLabel,
            renderInput: FormSelect({ options: Object.values(Categories) }),
          }),
        ],
        button: SubmitButton(),
        store,
      }),
      store.getFormError() ? Error({ message: store.getFormError() }) : '',
    ],
  });
}

export default NoteForm;
