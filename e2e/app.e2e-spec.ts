import { Angular2demoPage } from './app.po';

describe('angular2demo App', () => {
  let page: Angular2demoPage;

  beforeEach(() => {
    page = new Angular2demoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
