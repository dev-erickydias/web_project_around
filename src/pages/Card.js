import unlikeImage from "../image/unlike.png"
import likedImage from "../image/liked.png"
export default class Card {
  constructor(data, cardSelector, handleImagePopup) {
    this._card = document.querySelector(cardSelector)
    this._title = data.name;
    this._image = data.link;
    this._abrirPopupComImage = handleImagePopup
  }

  _getTemplate() {
    const cardElement = this._card.content.querySelector(".card").cloneNode(true);
    return cardElement;
  }

  _likeImage(event) {
    if (event.target.classList.contains("card__unlick")) {
      const cardUnlick = event.target;
      const isLiked = cardUnlick.getAttribute("data-liked") === "true";

      if (isLiked) {
        cardUnlick.src = unlikeImage; // Alteração da imagem para "não curtir"
        cardUnlick.setAttribute("data-liked", "false");
      } else {
        cardUnlick.src = likedImage; // Alteração da imagem para "curtir"
        cardUnlick.setAttribute("data-liked", "true");
      }
    }
  }
  _deleteCard(event) {
    const cardToRemove = event.target.closest(".card");
    if (cardToRemove) {
      cardToRemove.remove();
    }
  }

  _setEventListeners() {
    this._element.querySelector(".card__image").addEventListener("click", () => {
      this._abrirPopupComImage(this._image, this._title);
      
    });
    this._element.querySelector(".card__unlick").addEventListener("click", (event) => {
      this._likeImage(event)
    })
    this._element.querySelector(".del").addEventListener("click", (event) => {
      this._deleteCard(event)
    });
    
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".card__image").src = this._image
    this._element.querySelector(".card__title").textContent = this._title;
    return this._element;
  }
}
