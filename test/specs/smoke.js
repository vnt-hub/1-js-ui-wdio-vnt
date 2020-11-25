describe('Website', function () {
    it('should be alive', function () {
        browser.url(`/`)
        const img = $('img[src="https://agoodideas.herokuapp.com/assets/logo_s2-68f9fecbca0ae1ccdf8d4109d8d656b5f8a235f68cb6fd9adccea5a444f6d7c9.png"]')
        if(!img.isExisting()) {
            throw new Error('Website should be opened, and logo displayed');
        }
    })
})

/**describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
    })
})*/