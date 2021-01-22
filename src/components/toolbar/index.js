import { defaultStyles } from '../../constants';
import { $ } from '../../core/dom';
import { ExelStateComponent } from '../../core/ExelStateComponent';
import { createToolbar } from './toolbar.template';

export class Toolbar extends ExelStateComponent {
    static className = 'excel__toolbar'
    constructor($root, options) {
        super($root, {
            name: 'Toolbar',
            listeners: ['click'],
            subscribe: ['currentStyles'],
            ...options,
        })
    }
    prepear() {
        this.initState(defaultStyles)
    }
    get template() {
        return createToolbar(this.state)
    }
    toHtml() {
        return this.template
    }
    storeChanged(changes) {
        this.setState(changes.currentStyles)
    }
    onClick(event) {
        const $target = $(event.target)
        if ($target.data.type === 'button') {
            const value = JSON.parse($target.data.value)
            this.$emit('toolbar:applayStyle', value)
        }
    }
}
