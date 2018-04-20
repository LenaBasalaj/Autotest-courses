var PageObject = require ("C:/Users/F1/IdeaProjects/project(node)/PageObject.js");

beforeEach(function(){

    browser.get('https://angular.io/docs');
});

describe('angularjs page', function() {
   it('should open page with example from box GetAGlimpseOfAngular', function() {

     PageObject.box1.click();
     browser.getAllWindowHandles().then(function (handles) {
        browser.ignoreSynchronization = true;
        browser.switchTo().window(handles[1]);
        browser.sleep('1000');
        expect(browser.getCurrentUrl()).toBe('https://stackblitz.com/angular/ovkakaarayb');
     });
     browser.ignoreSynchronization = false;
   });
  it('should open QuickStart page from box GetGoingWithAngular', function() {
    PageObject.box2.click();
    browser.sleep(5000);
    var name = element(by.css('#quickstart'));
    expect(name.getText()).toEqual('QuickStart');
  });
  it('should open Architecture overview page from box Fundamentals', function() {
    PageObject.box3.click();
    browser.sleep(5000);
    var namePage = element(by.css('#architecture-overview'));
    expect(namePage.getText()).toEqual('Architecture overview');
  });
});

describe('angularjs page', function() {
  it('should change url to https://angular.io/docs#what-is-angular', function() {
      browser.actions().mouseMove(PageObject.title1).perform();
      PageObject.icon1.click();
      expect(browser.getCurrentUrl()).toEqual('https://angular.io/docs#what-is-angular');
  });
  it('should change url to https://angular.io/docs#assumptions and scroll up page', function() {
      browser.actions().mouseMove(PageObject.title2).perform();
      PageObject.icon2.click();
      expect(browser.getCurrentUrl()).toEqual('https://angular.io/docs#assumptions');
  });
  it('should change url to https://angular.io/docs#feedback and scroll up page', function() {
      browser.actions().mouseMove(PageObject.title3).perform();
      PageObject.icon3.click();
      expect(browser.getCurrentUrl()).toEqual('https://angular.io/docs#feedback');
  });
 });

 describe('angularjs page', function() {
   it('should open page about JS via link in the text', function() {
     PageObject.linkJS.click();
     browser.ignoreSynchronization = true;
     expect(browser.getCurrentUrl()).toEqual('https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript');
     browser.ignoreSynchronization = false;
   });
   it('should open page MIT License via link in the text in the footer', function() {
     PageObject.linkMitLicense.click();
     expect(browser.getCurrentUrl()).toEqual('https://angular.io/license');
    });
 });

 describe('angularjs page', function() {
   it('should hide docsMenu and then display ', function() {
     PageObject.docsMenu.click();
     expect(element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav')).isDisplayed()).toBe(false);
     PageObject.docsMenu.click();
     expect(element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav')).isDisplayed()).toBe(true);
   });
 });

describe('result of search', function() {
  it('should display message No results found', function() {
        PageObject.search.click();
        PageObject.search.sendKeys('Dog');
        browser.sleep ('10000');
        expect(PageObject.searchRes.getText()).toEqual('No results found.');
   });
  it('should find MockBackend and redirect to the page', function() {
        PageObject.search.click();
        PageObject.search.sendKeys('mockbackend');
        //expect(element(by.css('body > aio-shell > aio-search-results > div > div > h3')).getText()).toEqual('API (3)');
        element(by.css('body > aio-shell > aio-search-results > div > div > ul.priority-pages > li:nth-child(1) > a')).click();
        browser.sleep ('5000');
        expect(element(by.css('#mockbackend')).isDisplayed());
   });
});

//doesn't work correct
  describe('docsMenu', function() {
    it('should display submenu of Tutorial', function() {
      PageObject.tutorial.click();
      element.all(by.className('vertical-menu-item level-2 collapsed')).then(function(items){
      //expect(items.length).toBe(8);
      expect(items[0].getText()).toBe('1. Introduction');
      expect(items[1].getText()).toBe('2. The Application Shell');
      expect(items[2].getText()).toBe('3. The Hero Editor');
      });
    });
  });
