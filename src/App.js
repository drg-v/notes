class App {
  constructor(el) {
    this.el = el;
  }

  createLayout(el) {
    console.log(el);
  }

  render() {
    try {
      this.createLayout(this.el);
    } catch (err) {
      console.log(err);
    }
  }
}

export default App;
