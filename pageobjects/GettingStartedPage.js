import Element from '../core/Element.js';
import BasePage from './BasePage.js';

const pagination = new Element('.pagination-nav__label');



class GettingStartedPage extends BasePage {

  get pagination() {
    return pagination;
  }

  async open() {
    await super.open('docs/gettingstarted');
  }
}

export default new GettingStartedPage();
