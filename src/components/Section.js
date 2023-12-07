export default class Section {
    constructor({ data, renderer }, container) {
      this._renderedItems = data;
      this._renderer = renderer;
      this._container = container;
    }
  
    setItem(element) {
      this._container.append(element);
    }

    clear() {
      this._container.innerHTML = '';
    }
  
    renderItems() {
      this.clear();
      this._renderedItems.forEach((item) => {
        this._renderer(item) 
     })
    }
  }