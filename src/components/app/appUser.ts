import { addUserListeners } from '../controller/listeners/listeners';
import Footer from '../view/footer/footer';
import Header from '../view/header/header';
import Main from '../view/main/main';
import Modal from '../view/modal/modal';

export default class AppUser {
  body: HTMLElement;  

  header: Header;

  main: Main;

  footer: Footer;

  constructor() {
    this.body = document.body;
    this.header = new Header();
    this.main = new Main();
    this.footer = new Footer();
  }

  init(): HTMLElement {
    const modals: HTMLDivElement = new Modal().render();
    this.body.append(modals);
    this.body.append(this.header.render('user'));
    this.body.append(this.main.render('user'));
    this.body.append(this.footer.render());
    addUserListeners();
    return this.body;
  }
}