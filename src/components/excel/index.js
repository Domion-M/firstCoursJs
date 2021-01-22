import { $ } from '../../core/dom'
import { Emittor } from '../../core/Emitter';
import { StoreSubscriber } from '../../core/StoreSubscriber';
import { preventDefault } from '../../core/utils';
import { updateDate } from '../../duks/actions';

export class Excel {
    constructor(options) {
        this.components = options.componets || []
        this.store = options.store
        this.emitter = new Emittor()
        this.subscriber = new StoreSubscriber(this.store)
    }
    getRoot() {
        const $root = $.create('div', 'excel');
        const componentOptions = {
            emitter: this.emitter,
            store: this.store,
        }
        this.components = this.components.map(Component => {
            const $el = $.create('div', Component.className)
            const component = new Component($el, componentOptions)
            $el.html(component.toHtml())
            $root.append($el)
            return component
        })
        return $root
    }
    init() {
        if (process.env.NODE_ENV === 'production') {
            document.addEventListener('contextmenu', preventDefault)
        }
        this.store.dispatch(updateDate())
        this.subscriber.subscriberComponent(this.components)
        this.components.forEach(component => {
            component.init()
        })
    }
    destroy() {
        this.subscriber.unsubscribeFromStore()
        this.components.forEach(component => component.destroy())
        document.removeEventListener('contextmenu', preventDefault)
    }
}
