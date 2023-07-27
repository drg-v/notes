function Error({ message }) {
  let error = document.createElement('div');
  error.className = 'alert alert-danger my-3';
  error.setAttribute('role', alert);
  error.innerText = message;
  return error;
}

export default Error;
