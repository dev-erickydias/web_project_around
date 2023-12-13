import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback, popupForm ) {
    super(popupSelector);
    this._formElement = popupForm;
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
    this._formElement
      .querySelector('.button')
      .addEventListener('submit', (evt) => {
        evt.preventDefault();
        const valores = this._getInputValues()
        this._submitCallback(valores);
        super.setEventListeners();
      });
  } 
  reset(){
    this._formElement.reset()
  }
  close() {
    super.close();
  }
}