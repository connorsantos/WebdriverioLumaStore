const { describe, it } = require('mocha')

const { Ensure, equals } = require('@serenity-js/assertions')
const { actorCalled } = require('@serenity-js/core')
const { Navigate, Text } = require('@serenity-js/web')
const HomePage = require('../serenity/LumaPages/Home.page')

describe('Luma tests', () => {

    it('first test', async () => {
        await actorCalled('Dan').attemptsTo(
            Navigate.to('https://magento.softwaretestingboard.com/'),
            Ensure.that(
                Text.of(HomePage.infoSpan), equals('New Luma Yoga Collection')
            )
        )

        browser.url('https://magento.softwaretestingboard.com')
        await HomePage.newYogaBtn.click()
        await expect(HomePage.pgTitle).toHaveTextContaining('New Luma Yoga Collection')
        browser.pause(2000)


        
    })
})