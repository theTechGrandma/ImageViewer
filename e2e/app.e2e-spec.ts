import { DynicsImageViewerPage } from './app.po';

describe('dynics-image-viewer App', () => {
  let page: DynicsImageViewerPage;

  beforeEach(() => {
    page = new DynicsImageViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
