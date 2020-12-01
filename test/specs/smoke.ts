describe('Website', function () {
    it('should have the box', function () {
        browser.url(`/`)
        const box = $('.box.panel')
        if(!box.isDisplayed()) {
            throw new Error ('box should be displayed');
        }
    })
})

