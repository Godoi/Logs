import { Rz2LogsPage } from './app.po';

describe('rz2-logs App', () => {
  let page: Rz2LogsPage;

  beforeEach(() => {
    page = new Rz2LogsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
