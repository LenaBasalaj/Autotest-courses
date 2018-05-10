var pageObject = require ('./PageObject.js');


beforeEach(async function(){

    await browser.get('https://angular.io/docs');
});

describe('angularjs page', function() {
   xit('should open page with example from box GetAGlimpseOfAngular', async function() {

     await pageObject.box1.click();
     await browser.getAllWindowHandles().then(async function (handles) {
        browser.ignoreSynchronization = true;
        await browser.switchTo().window(handles[1]);
        await browser.sleep('5000');
        expect(await browser.getCurrentUrl()).toBe('https://stackblitz.com/angular/vqljkrnnogd');
     });
     browser.ignoreSynchronization = false;
   });
  it('should open QuickStart page from box GetGoingWithAngular', async function() {
    await pageObject.box2.click();
    var name = element(by.css('#quickstart'));
    await browser.wait(name.isDisplayed(), 10000, 'quickstart element not found');
    expect(await name.getText()).toEqual('QuickStart');
  });
  xit('should open Architecture overview page from box Fundamentals', async function() {
    await pageObject.box3.click();
    var namePage = element(by.css('#architecture-overview'));
    await browser.wait(namePage.isDisplayed(), 5000, 'name page not found');
    expect(await namePage.getText()).toEqual('Architecture overview');
  });
});

describe('angularjs page', function() {
  it('should change url to https://angular.io/docs#what-is-angular', async function() {
      await browser.actions().mouseMove(pageObject.title1).perform();
      await pageObject.icon1.click();
      expect(await browser.getCurrentUrl()).toEqual('https://angular.io/docs#what-is-angular');
  });
  it('should change url to https://angular.io/docs#assumptions and scroll up page', async function() {
      await browser.actions().mouseMove(pageObject.title2).perform();
      await pageObject.icon2.click();
      expect(await browser.getCurrentUrl()).toEqual('https://angular.io/docs#assumptions');
  });
  it('should change url to https://angular.io/docs#feedback and scroll up page', async function() {
      await browser.actions().mouseMove(pageObject.title3).perform();
      await pageObject.icon3.click();
      expect(await browser.getCurrentUrl()).toEqual('https://angular.io/docs#feedback');
  });
 });

 describe('angularjs page', function() {
   it('should open page about JS via link in the text', async function() {
     await pageObject.linkJS.click();
     browser.ignoreSynchronization = true;
     expect(await browser.getCurrentUrl()).toEqual('https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript');
     browser.ignoreSynchronization = false;
   });
   it('should open page MIT License via link in the text in the footer', async function() {
     await pageObject.linkMitLicense.click();
     expect(await browser.getCurrentUrl()).toEqual('https://angular.io/license');
    });
 });

 describe('angularjs page', function() {
   it('should hide docsMenu and then display ', async function() {
     await pageObject.docsMenu.click();
     await expect(element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav')).isDisplayed()).toBe(false);
     await pageObject.docsMenu.click();
     expect(await element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav')).isDisplayed()).toBe(true);
   });
 });

describe('result of search', function() {
  it('should display message No results found', async function() {
        await pageObject.search.click();
        await pageObject.search.sendKeys('Dog');
        await browser.sleep ('10000');
        expect(await pageObject.searchRes.getText()).toEqual('No results found.');
   });
  xit('should find MockBackend and redirect to the page', async function() {
        await pageObject.search.click();
        await pageObject.search.sendKeys('mockbackend');
        //expect(element(by.css('body > aio-shell > aio-search-results > div > div > h3')).getText()).toEqual('API (3)');
        var name = element(by.css('a[href$="api/http/testing/MockBackend"]'));
        await name.click();
        await browser.wait (name, 6000, 'result not found');
        expect(await element(by.css('#mockbackend')).isDisplayed());
   });
});

//doesn't work correct
  describe('docsMenu', function() {
    it('should display submenu of Tutorial', async function() {
      await pageObject.tutorial.click();
      await element.all(by.className('vertical-menu-item level-2 collapsed')).then(async function(items){
      //expect(items.length).toBe(8);
      await expect(items[0].getText()).toBe('1. Introduction');
      await expect(items[1].getText()).toBe('2. The Application Shell');
      await expect(items[2].getText()).toBe('3. The Hero Editor');
      });
    });
  });
