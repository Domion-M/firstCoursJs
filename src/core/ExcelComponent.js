
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
        this.subscribe = options.subscribe || []
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
    storeChanged() { }
    isWatching(key) {
        return this.subscribe.includes(key)
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
    }
}
