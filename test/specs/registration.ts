import * as assert from 'assert';

describe ('User', function () {
    it ('can register', function () {
        browser.url(`/signup`)

        const email = `test${new Date().getTime() / 1000}@test.com`

        $('#user_name').setValue(email)

        $('#user_email').setValue(email)

        $('#user_password').setValue(email)
        $('#user_password_confirmation').setValue(email)

        $('input[name=commit]').click()

        browser.pause(2000)
        const alert = $('.alert-success')

        assert(alert.isDisplayed(), `Expected success alert to be visible after registration`)
        
        const alertText = alert.getText()
        const expectedText = 'Добро пожаловать на GoodiDeas!'
        assert(alertText.includes(expectedText),
            `Alert text: "${alertText}" to match expected: "${expectedText}", after success registration`)
    })
})