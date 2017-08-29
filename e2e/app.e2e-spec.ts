import { DishOrderPage } from './app.po';

describe('dish-order App', () => {
  let page: DishOrderPage;

  beforeEach(() => {
    page = new DishOrderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello from Angular App with Webpack');
  });
});
