import Categories from './Categories';

const data = [
  {
    id: '1',
    name: 'ShoppingList1',
    created: new Date().toLocaleDateString(),
    content: 'This is my content',
    category: Categories.Task,
    dates: '',
  },
  {
    id: '2',
    name: 'ShoppingList2',
    created: new Date().toLocaleDateString(),
    content: 'This is my content',
    category: Categories.Random,
    dates: '',
  },
  {
    id: '3',
    name: 'ShoppingList3',
    created: new Date().toLocaleDateString(),
    content: 'This is my content',
    category: Categories.Idea,
    dates: '',
  },
  {
    id: '4',
    name: 'ShoppingList4',
    created: new Date().toLocaleDateString(),
    content: 'This is my content',
    category: Categories.Task,
    dates: '',
  },
  {
    id: '5',
    name: 'ShoppingList5',
    created: new Date().toLocaleDateString(),
    content: 'This is my content',
    category: Categories.Random,
    dates: '',
  },
  {
    id: '6',
    name: 'ShoppingList6',
    created: new Date().toLocaleDateString(),
    content: 'This is my content',
    category: Categories.Idea,
    dates: '',
  },
  {
    id: '7',
    name: 'ShoppingList7',
    created: new Date().toLocaleDateString(),
    content: 'This is my content',
    category: Categories.Task,
    dates: '',
  },
];

const defaultValues = {
  name: '',
  content: '',
  category: '',
};

export { data, defaultValues };
