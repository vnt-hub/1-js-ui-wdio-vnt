import * as assert from 'assert';

describe("Items search", function() {
    it("should show results in case multiple items matches", function() {
      browser.url(`/`)
      $('input[name=search]').setValue('египет')
      browser.keys('Enter')
      browser.pause(3000)
      const box = $$('.box.panel')
      assert(box.length > 1, `Search results page should have multiple items on it`)
      browser.back();
    });
  
    it("no matching results", function() {
      browser.url(`/`)
      $('input[name=search]').setValue('abcdefg')
      browser.keys('Enter')
      browser.pause(3000)
      const box = $('.box.panel')
      assert(box.isDisplayed, `Search results page should have item on it`)
    });
  });
