const { contain, not } = require('@serenity-js/assertions')
const { Check, d, Task } = require('@serenity-js/core')
const { By, Click, CssClasses, PageElement } = require('@serenity-js/web')

module.exports.TodoListItem = class TodoListItem {

    // Public API captures the business domain-focused tasks
    // that an actor interacting with a TodoListItem app can perform

    static markAsCompleted = (item) =>
        Task.where(d `#actor marks ${ item } as completed`,
            Check.whether(CssClasses.of(item), not(contain('completed')))
                .andIfSo(this.toggle(item)),
        )

    static markAsOutstanding = (item) =>
        Task.where(d `#actor marks ${ item } as outstanding`,
            Check.whether(CssClasses.of(item), contain('completed'))
                .andIfSo(this.toggle(item)),
        )

    static toggle = (item) =>
        Task.where(d `#actor toggles the completion status of ${ item }`,
            Click.on(
                this.#toggleButton().of(item),
            ),
        )

    // Private API captures ways to locate interactive elements and data transformation logic.
    // Private API supports the public API and is not used in the test scenario directly.

    static #toggleButton = () =>
        PageElement
            .located(By.css('input.toggle'))
            .describedAs('toggle button')
}
