import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }
//for
  getPageTitle() {
    return element(by.css('ion-title')).getText();
  }
}
