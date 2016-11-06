import { LaunchPadUiPage } from './app.po';

describe('launch-pad-ui App', function() {
  let page: LaunchPadUiPage;

  beforeEach(() => {
    page = new LaunchPadUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
