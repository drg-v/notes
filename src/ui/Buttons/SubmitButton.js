function SubmitButton() {
  let button = document.createElement('button');
  button.type = 'submit';
  button.className = 'btn btn-success';
  button.innerText = 'Submit';
  return button;
}

export default SubmitButton;
