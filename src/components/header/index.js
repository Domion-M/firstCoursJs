import { $ } from '../../core/dom';
import { ExelStateComponent } from '../../core/ExelStateComponent';
import { debounce } from '../../core/utils';
import * as action from '../../duks/actions';
import { createHeader } from './header.template';

export class Header extends ExelStateComponent {
    static className = 'excel__header'
    constructor($root, options) {
        super($root, {
            name: 'Header',
            listeners: ['input'],
            subscribe: ['title'],
            ...options,
        })
    }
    prepear() {
        this.onInput = debounce(this.onInput.bind(this), 300)
    }
    init() {
        super.init()
    }
    get template() {
        const title = this.store.getState().title
        return createHeader(title);
    }
    toHtml() {
        return this.template
    }
    onInput(event) {
        const $target = $(event.target);
        this.$dispatch(action.changeTitle($target.text()))
    }
}
