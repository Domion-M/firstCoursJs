import { ExcelComponent } from '../../core/ExcelComponent';
import { createTable } from './table.template'
import { resizeHeandler } from './table.resize'
import { shouldResize } from './table.function'

export class Table extends ExcelComponent {
    static className = 'excel__table'
    constructor($root) {
        super($root, {
            listeners: ['mousedown'],
        })
    }
    toHtml() {
        return createTable(25);
    }

    onMousedown(e) {
        if (shouldResize(e)) {
            resizeHeandler(e, this.$root)
        }
    }
}
