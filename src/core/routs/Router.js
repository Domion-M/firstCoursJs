import { $ } from '../dom'
import { ActiveRoute } from './ActiveRoute'
export class Router {
    constructor(selector, routes) {
        if (!selector) throw new Error('selector is not provider')
        this.placeholder = $(selector)
        this.routes = routes
        this.changePageHandler = this.changePageHandler.bind(this)
        this.currentPage = null
        this.init()
    }
    init() {
        window.addEventListener('hashchange', this.changePageHandler)
        this.changePageHandler()
    }
    changePageHandler() {
        if (this.currentPage) this.currentPage.destroy()
        this.placeholder.clear()
        const Page = ActiveRoute.path.includes('exel')
            ? this.routes.exel
            : this.routes.dashboard
        this.currentPage = new Page(ActiveRoute.param)
        this.placeholder.append(this.currentPage.getRoot())
        this.currentPage.afterRender()
    }
    destroy() {
        window.removeEventListener('hashchange', this.changePageHandler)
    }
}
