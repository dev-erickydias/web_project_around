import './index.css';
// array com os cards que serão adicionados a ul7
import { 
  initialCards, 
  cards, 
  addFormFirst, 
  addSubmit, 
  editForm, 
  submitForm, 
  inputNome, 
  inputJob, 
  popupImage, 
  addInputName, 
  addInputImage, 
  profileTitle, 
  profileSubtitle, 
  profileButton, 
  addButton, 
  popupCardForm,
  popupUserForm,
  formClose,
  addClose,
  overlay,
  overlayAdd,
  overlayImage,
  imgClose
 } from "../utils/constants.js"




// Importes 
import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { Section } from '../components/Section.js';



// validações dos Formularios
const configFormValidate = { inputErrorClass: "popup__form_theme__red", buttonErrorClass: "disability" }
const configSpanValidate = { spanErrorClass: "form__error_active" }
new FormValidator(addFormFirst, addSubmit, configFormValidate, configSpanValidate).enableValidation()
new FormValidator(editForm, submitForm, configFormValidate, configSpanValidate).enableValidation()


// Renderização dos Cards na tela quando iniciar 
const cardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card(item, '#template', 'openPopupWithImage');
      const newCard = card.generateCard();
      cardList.setItem(newCard);
    },
  },
  cards,
);
cardList.renderItems();

