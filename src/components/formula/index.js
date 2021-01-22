import { $ } from '../../core/dom';
import { ExcelComponent } from '../../core/ExcelComponent';
export class Formula extends ExcelComponent {
    static className = 'excel__formula'
    constructor($root, options) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'keydown'],
            subscribe: ['currentText'],
            ...options,
        })
    }
    init() {
        super.init()
        this.$formula = this.$root.find('#formula')
        this.$on('table:select', $cell => {
            this.$formula.text($cell.data.value)
        })
    }
    toHtml() {
        return `
        <div class="info">fx</div>
        <div 
        id="formula" 
        class="input" 
        contenteditable 
        spellcheck="false"
        ></div>`
    }
    storeChanged({ currentText }) {
        this.$formula.text(currentText)
    }
    onInput(event) {
        this.$emit('formula:input', $(event.target).text())
    }
    onKeydown(event) {
        if (event.key === 'Enter') {
            event.target.textContent = ''
        }
        this.$emit('formula:keydown', event)
    }
}
