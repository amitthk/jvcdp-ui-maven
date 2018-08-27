import { JvcdpuiPage } from './app.po';

describe('jvcdpui App', function() {
  let page: JvcdpuiPage;

  beforeEach(() => {
    page = new JvcdpuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
