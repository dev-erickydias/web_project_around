export default class Popup {
    constructor(popupSelector) {
      this._popup = popupSelector;
    }
    open() {
      this._popup.classList.add("popup_opened");
    }
    close() {
      this._popup.classList.remove("popup_opened");
      document.removeEventListener("keydown", this._handleEscClose());
    }
    _handleEscClose(evt) {
      if (evt.key === "Escape") {
        const popup = Array.from(document.querySelectorAll(".popup"));
        popup.forEach((element) => {
          element.classList.remove("popup_opened");
        });
      }
    }
    setEventListeners() {
      const popupClose = this._popup.querySelector(".popup__form-close"); // formulario
      popupClose.addEventListener("click", () => this.close());
          this._popup.firstElementChild.addEventListener("click", () => {
          this.close()
        });
  
      document.addEventListener("keydown", this._handleEscClose());
    }
  }