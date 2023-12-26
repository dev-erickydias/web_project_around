export class Section {
  constructor({ data, renderer }, container) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = container;
  }

  _setItem(element) {
    this._container.append(element);
  }

  setElement(element){
    this._container.prepend(element);
  }
  renderItems() {
    this._renderedItems.forEach((item) => {
      const returnRenderer = this._renderer(item)
      this._setItem(returnRenderer)
    })
  }
}