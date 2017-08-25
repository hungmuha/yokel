import { YokelTestPage } from './app.po';

describe('yokel-test App', () => {
  let page: YokelTestPage;

  beforeEach(() => {
    page = new YokelTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
