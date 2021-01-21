
import { DomListener } from '@core/DomListener'
/**
 * Add comment
 *  возвращает шаблон компонента
 */
export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.store = options.store
        this.storeSub = null
        this.unsubscribers = []
        this.prepear()
    }
    prepear() {

    }
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsub)
    }
    $dispatch(action) {
        this.store.dispatch(action)
    }
    $subscribe(fn) {
        this.storeSub = this.store.subscribe(fn)
    }
    toHtml() {
        return ''
    }
    init() {
        this.initDOMListeners()
    }
    destroy() {
        this.unsubscribers.forEach(unsub => unsub())
        this.removeDOMListeners()
        this.storeSub.unsubscribe()
    }
}
