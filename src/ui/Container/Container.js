function Container({ title, children }) {
  let container = document.createElement('div');
  container.className = 'container py-2';
  let header = document.createElement('h1');
  header.innerText = title;
  container.append(header, ...children);
  return container;
}

export default Container;
