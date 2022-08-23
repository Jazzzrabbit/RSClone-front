export default class Modal {
  wrapper: HTMLDivElement;

  constructor() {
    this.wrapper = document.createElement('div');
  }

  getRegister(): string {
    return `<div class="modal modal-register modal--hidden">  
              <div class="modal__content modal-register__content">
                <div class="modal__header modal-register__header">
                  <span class="modal__title modal-register__title">Регистрация</span>
                  <span class="modal__close modal-register__close">&times;</span>
                </div> 
                <form action="#"
                 class="modal__form modal-register__form">
                  <input type="email" name="email" class="modal__input register__email"
                   placeholder="Введите ваш email" required>
                  <input type="text" name="login" class="modal__input register__username" 
                  placeholder="Выберите ваш логин" required>
                  <input type="text" name="name" class="modal__input register__name" 
                  placeholder="Введите ваше имя" required>
                  <input type="password" name="pwd" class="modal__input register__password"
                   placeholder="Выберите Пароль" minlength="6" required>
                  <button class="btn modal__btn register__btn">Зарегистрироваться</button>
                </form>
              </div>
            </div>`;
  }

  getLogin(): string {
    return `<div class="modal modal-login modal--hidden">
              <div class="modal__content modal-login__content">
                <div class="modal__header modal-login__header">
                  <span class="modal__title modal-login__title">Вход</span>
                  <span class="modal__close modal-login__close">&times;</span>
                </div> 
                <form action="" class="modal__form modal-login__form">
                  <input type="text" class="modal__input login__email" placeholder="Введите ваш email">
                  <input type="password" class="modal__input login__password" placeholder="Введите ваш Пароль">
                  <button class="btn modal__btn login__btn">Войти</button>
                </form>
              </div>
            </div>`;
  }

  getRequest(): string {
    return `
    <div class="modal modal-request modal--hidden">
      <div class="modal__content modal-request__content">
        <div class="modal__header modal-request__header">
          <span class="modal__title modal-request__title">Заявка</span>
          <span class="modal__close modal-request__close">&times;</span>
        </div>
        <form action="" class="modal__form modal-request__form" id="requestForm">
          <div class="select-category">
            <h4 class="select-category__title">Категория:</h4>
            <select class="select" name="category" id="category">
              <option value="" selected>Выберите категорию</option>
              <option value="healthcare">Здравоохранение</option>
              <option value="emergency">ЧС</option>
              <option value="veterans">Ветераны и историческая память</option>
              <option value="people">Люди с ОВС</option>
              <option value="children">Дети и подростки</option>
              <option value="animals">Животные</option>
              <option value="nature">Природа</option>
              <option value="science">Наука</option>
              <option value="education">Образование</option>
              <option value="else">Другое</option>
            </select>
          </div>
          <div class="request-radio">
            <h4 class="request-radio__title">Формат проведения:</h4>
            <div class="request-radio__inputs">   
              <label class="request-radio__inputs-label" for="online">
                <input type="radio" name="format" id="online" value="онлайн">Онлайн
              </label>        
              <label class="request-radio__inputs-label" for="offline">
                <input type="radio" name="format" id="offline" value="офлайн">Офлайн
              </label>
            </div>
          </div>
          <div class="request-checkbox">
            <h4 class="request-checkbox__title">Предпочитаемый способ связи:</h4>       
            <div class="request-checkbox__inputs">
              <label class="request-checkbox__inputs-label" for="phone">
                <input type="checkbox" id="phone" name="phone">Телефон
              </label>         
              <label class="request-checkbox__inputs-label" for="email">
                <input type="checkbox" id="email" name="email">Электронная почта
              </label>        
              <label class="request-checkbox__inputs-label" for="messenger">
                <input type="checkbox" id="messenger" name="messenger">Мессенджер
              </label>
            </div>
          </div>
          <div class="request-location">
            <h4 class="request-location__title">Локация оказания помощи:</h4>
            <select class="request-location__select" name="location" id="location">
              <option value="country" selected>Страна</option>
              <option value="belarus">Республика Беларусь</option>
              <option value="russia">Российская Федерация</option>
              <option value="ukraine">Украина</option>
            </select>
            <input class="request-location__select-input" name="address"
              type="text" placeholder="Адрес" id="address">
          </div>
          <div class="request-textarea">
            <h4 class="request-textarea__title">Суть проблемы и необходимая помощь:</h4>
            <textarea name="textarea" cols="80" rows="10" class="request-textarea__textarea" id="textarea"></textarea>
          </div>
          <button class="btn modal__btn modal-request__btn" type="submit" id="createRequest">Создать</button>
        </form>
      </div>
    </div>`;   
  }

  render(): HTMLDivElement {
    this.wrapper.innerHTML += this.getRegister();
    this.wrapper.innerHTML += this.getLogin();
    this.wrapper.innerHTML += this.getRequest();
    this.wrapper.classList.add('modal-wrapper');
    return this.wrapper;
  }
}