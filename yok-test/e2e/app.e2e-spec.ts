import { YokTestPage } from './app.po';

describe('yok-test App', () => {
  let page: YokTestPage;

  beforeEach(() => {
    page = new YokTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
