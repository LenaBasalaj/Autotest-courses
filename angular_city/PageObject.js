
module.exports = new PageObject ();
function PageObject(){

    this.box1 = element(by.css('#docs > aio-doc-viewer > div > div > div > a:nth-child(1) > section'));
    this.box2 = element(by.xpath('//*[@id="docs"]/aio-doc-viewer/div/div/div/a[2]'));
    this.box3 = element(by.css('#docs > aio-doc-viewer > div > div > div > a:nth-child(3) > section'));
    this.title1 = element(by.css('#what-is-angular'));
    this.title2 = element(by.id('assumptions'));
    this.title3 = element(by.id('feedback'));
    this.icon1 = element(by.css('#what-is-angular > a > i'));
    this.icon2 = element(by.css('#assumptions > a > i'));
    this.icon3 = element(by.css('#feedback > a > i'));
    this.linkJS = element(by.css('#docs > aio-doc-viewer > div > div > p:nth-child(5) > a:nth-child(1)'));
    this.linkMitLicense = element(by.css('body > aio-shell > footer > aio-footer > p:nth-child(2) > a:nth-child(1)'));
    this.docsMenu = element(by.css('body > aio-shell > mat-toolbar > mat-toolbar-row:nth-child(2) > button > span > mat-icon > svg'));
    this.tutorial = element(by.buttonText('Tutorial'));
    this.search = element(by.css('body > aio-shell > mat-toolbar > mat-toolbar-row:nth-child(2) > aio-search-box > input[type="search"]'));
    this.searchRes = element(by.css('body > aio-shell > aio-search-results > div > p'));


}