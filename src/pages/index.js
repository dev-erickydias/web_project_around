import './index.css';
// array com os cards que serão adicionados a ul7
import {
  initialCards,
  cards,
  addFormFirst,
  addSubmit,
  editForm,
  inputNome,
  inputJob,
  submitForm,
popupImage, 
  addInputName,
  addInputImage,
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
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';


// validações dos Formularios
const configFormValidate = { inputErrorClass: "popup__form_theme__red", buttonErrorClass: "disability" }
const configSpanValidate = { spanErrorClass: "form__error_active" }
new FormValidator(addFormFirst, addSubmit, configFormValidate, configSpanValidate).enableValidation()
new FormValidator(editForm, submitForm, configFormValidate, configSpanValidate).enableValidation()


// RENDERIZAR OS CARDS NA TELA QUANDO A APLICAÇÃO CARREGAR
const cardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card(item, '#template', 'openPopupWithImage');
      return card.generateCard();
    },
  },
  cards
);
cardList.renderItems();

// NOVA INSTACIA DAS INFORMAÇÕES DE USUARIO
const newInfoUser = new UserInfo(".profile__title", ".profile__subtitle")



const popupFormEdit = new PopupWithForm("#popup-user-form", ({ nome, job }) => {
  newInfoUser.setUserInfo(  nome, job )
},
".popup__form-edit"
) 
popupFormEdit.setEventListeners()


// EVENTO DE CLICK NO  BUTTON PARA O POPUP ABRIR   
profileButton.addEventListener("click", () => {
  const {name, job } = newInfoUser.getUserInfo()
  inputNome.value = name
  inputJob.value = job
  popupFormEdit.open()
})


const addPopupCard = new PopupWithForm("#popup-card-form", (item) => {
  const card = new Card(item, '#template', 'openPopupWithImage');
  const cardElement = card.generateCard();

  cardList.setElement(cardElement)
},
  "#first"
) 
addPopupCard.setEventListeners()

addButton.addEventListener("click", () => {
addPopupCard.reset()
 addPopupCard.open() 
})