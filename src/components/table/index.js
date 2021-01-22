import { ExcelComponent } from '../../core/ExcelComponent';
import { createTable } from './table.template'
import { resizeHeandler } from './table.resize'
import { isCell, matrix, nextSelector, shouldResize } from './table.function'
import { TableSelection } from './TableSelection'
import { $ } from '../../core/dom'
import * as action from '../../duks/actions'
import { defaultStyles } from '../../constants';
import { parse } from '../../core/parse';
export class Table extends ExcelComponent {
    static className = 'excel__table';
    static colCount = 25;
    constructor($root, options) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown', 'keydown', 'input'],
            ...options,
        })
    }
    toHtml() {
        return createTable(Table.colCount, this.store.getState());
    }
    prepear() {
        this.selection = new TableSelection()
    }
    init() {
        super.init()
        this.selectCell(this.$root.find(`[data-id="0/0"]`))
        this.$on('formula:input',
            text => {
                this.selection.current
                    .attr('data-value', text)
                    .text(parse(text))
                this.updateTextInStore(text)
            })
        this.$on('formula:keydown', event => this.onKeydown(event))
        this.$on('toolbar:applayStyle',
            value => {
                this.selection.applyStyle(value)
                this.$dispatch(action.applyStyle({
                    value,
                    ids: this.selection.selectedIds,
                }))
            }
        )
    }
    selectCell($cell) {
        this.selection.select($cell)
        this.$emit('table:select', $cell)
        const styles = $cell.getStyles(Object.keys(defaultStyles))
        this.$dispatch(action.changeStyles(styles))
    }

    async resizeTable(event) {
        console.log('res', event);
        try {
            const data = await resizeHeandler(event, this.$root)
            this.$dispatch(action.tableResize(data));
        } catch (error) {
            console.warn(error)
        }
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            this.resizeTable(event)
        } else if (isCell(event)) {
            const $target = $(event.target);
            if (event.shiftKey) {
                const cells = matrix($target, this.selection.current)
                    .map(id => this.$root.find(`[data-id="${id}"]`))
                this.selection.selectGroup(cells)
            } else {
                this.selectCell($target);
            }
        }
    }
    onKeydown(event) {
        const keys = [
            'ArrowUp',
            'ArrowDown',
            'ArrowLeft',
            'ArrowRight',
            'Tab',
            'Enter',
        ]
        const { key } = event
        if (keys.includes(key) && !event.shiftKey) {
            event.preventDefault();
            const id = this.selection.current.id('/')
            const $next = this.$root.find(nextSelector(key, id, Table.colCount))
            this.selection.select($next, id)
            this.$emit('table:select', $next)
        }
    }

    updateTextInStore(value) {
        this.$dispatch(action.changeText({
            id: this.selection.current.id(),
            value,
        }))
    }

    onInput(event) {
        this.updateTextInStore($(event.target).text())
    }
}
