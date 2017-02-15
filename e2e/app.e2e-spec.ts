import { AngboPage } from './app.po';

describe('angbo App', function() {
  let page: AngboPage;

  beforeEach(() => {
    page = new AngboPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
