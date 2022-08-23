
import { RegisterElements } from '../../interfaces/RegisterElements';
import { User } from '../../interfaces/User';
import { registerRequest, registerValidation } from './registration';
import getRequestFormData from '../dataHandlers/getRequestFormData';

function showRegister(): void {
  const registerModal = document.querySelector('.modal-register') as HTMLElement;

  registerModal.classList.remove('modal--hidden');
  registerModal.classList.add('modal--active');
}

function showLogin(): void {
  const registerModal = document.querySelector('.modal-login') as HTMLElement;

  registerModal.classList.remove('modal--hidden');
  registerModal.classList.add('modal--active');
}

function showRequest(): void {
  const requestModal = document.querySelector('.modal-request') as HTMLElement;

  requestModal.classList.remove('modal--hidden');
  requestModal.classList.add('modal--active');
}

function hideModal(): void {
  const registerModal: NodeListOf<Element> = document.querySelectorAll('.modal');

  [...registerModal].map(item => {
    item.classList.remove('modal--active');
    item.classList.add('modal--hidden');
  });
}

export function openRegisterWindowListener(): void {
  const registerBtn = document.getElementById('register') as HTMLButtonElement;
  const registerSpan = document.getElementById('registerSpan') as HTMLSpanElement;

  registerBtn.addEventListener('click', showRegister);
  registerSpan.addEventListener('click', showRegister);
}

export function closeModalWindowListener(): void {
  const modalClose: NodeListOf<Element> = document.querySelectorAll('.modal__close');

  [...modalClose].map(item => item.addEventListener('click', hideModal));
}

export function openLoginWindowListener(): void {
  const loginBtn = document.getElementById('login') as HTMLButtonElement;

  loginBtn.addEventListener('click', showLogin);
}

export function openRequestWindowListener(): void {
  const requestBtn = document.getElementById('requestSpan') as HTMLButtonElement;

  requestBtn.addEventListener('click', showRequest);
}

export function openHelpWindowListener(): void {
  const requestBtn = document.getElementById('helpSpan') as HTMLButtonElement;

  requestBtn.addEventListener('click', showRegister);
}

export function registerSubmitListener() {
  const form = document.querySelector('.modal-register__form') as HTMLFormElement;
  form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    const elements = form.elements as RegisterElements;
    const user : User = {
      login: elements.login.value,
      pwd: elements.pwd.value,
      name: elements.name.value,
      email: elements.email.value,
    };
    const dataValidated = registerValidation(user);
    if (dataValidated.err) return alert(dataValidated.message);
    registerRequest(user);
  });
}

export function createRequestListener(): void {
  const requestForm = document.getElementById('requestForm') as HTMLFormElement;
  requestForm.addEventListener('submit', getRequestFormData);
}

export function addListeners(): void {
  openRegisterWindowListener();
  openLoginWindowListener();
  openRequestWindowListener();
  openHelpWindowListener();
  createRequestListener();
  closeModalWindowListener();
  registerSubmitListener();
}

