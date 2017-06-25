import { SimpleNgUpgradePage } from './app.po';

describe('simple-ng-upgrade App', () => {
  let page: SimpleNgUpgradePage;

  beforeEach(() => {
    page = new SimpleNgUpgradePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
