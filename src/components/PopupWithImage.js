import Popup from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(imageSelector, titleSelector, popupSelector) {
        super(popupSelector);
        this._popup = document.querySelector(popupSelector);
        this._imageElement = this._popup.querySelector(imageSelector)
        this._captionElement =  this._popup.querySelector(titleSelector)
    }
    
    close(){
        super.close();
    }

    setEventListeners(){
        const imageClose = this._popup.querySelector(".close-image");
        imageClose.addEventListener("click", () => this.close());
        this._popup.firstElementChild.addEventListener("click", () => {
          this.close()
        });
    }

    open(imageUrl, caption) {
        this._imageElement.src = imageUrl;
        this._imageElement.alt = "Image of " + caption;
        this._captionElement.textContent = caption;
        super.open();
    }
} 