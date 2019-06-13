import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to test-task!');
  });


  it('after button \'Отправить вопрос\' click , created right action', () => {
    // const text = 'Вопрос 1';
    // element(by.css('textarea')).sendKeys(text)
    // element(by.css('.btn-submit')).click()

    // console.log( element(by.css('textarea')));
    
    // expect(by.css('.question-text').toString()).toEqual(' Он на 3 закроет? ');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
