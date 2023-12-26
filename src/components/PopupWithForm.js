import Popup from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback, popupForm ) {
    super(popupSelector);
    this._formElement = document.querySelector(popupForm);
    this._submitCallback = submitCallback
  }

  _getInputValues() {
    const inputs = Array.from(this._formElement.querySelectorAll('input'));
    const values = {};
    inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement
      .addEventListener('submit', (evt) => {
        evt.preventDefault();
        const valores = this._getInputValues()
        this._submitCallback(valores);
        this.close()
      });
  } 
  reset(){
    this._formElement.reset()
  }
  close() {
    super.close();
  }

}