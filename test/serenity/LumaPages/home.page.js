const { By, PageElement} = require('@serenity-js/web')
class HomePage{

    get newYogaBtn(){
        return $('span=Shop New Yoga')
    }

    get pgTitle(){
        return $('span[data-ui-id="page-title-wrapper"]')
    }

    get infoSpan(){
        return PageElement.located(By.css('.info'))
    }

} module.exports = new HomePage()