import { Page } from "../core/Page";
import { Excel } from '../components/excel';
import { Header } from '../components/header'
import { Toolbar } from '../components/toolbar'
import { Formula } from '../components/formula'
import { Table } from '../components/table'
import { createStore } from '../core/createStore/createStore';
import { rootReducer } from '../duks/rootReducer';
import { storege, debounce } from '../core/utils';
import { normolizeInitialState } from '../duks/initailState';

function storegeName(params) {
    return params
        ? `exel:${params}`
        : `exel:${Date.now().toString()}`
}

export class ExelPage extends Page {
    getRoot() {
        const state = storege(storegeName(this.params))
        const store = createStore(rootReducer, normolizeInitialState(state))
        const stateListeners =
            debounce(state => storege(storegeName(this.params), state), 300)
        store.subscribe(stateListeners)

        this.excel = new Excel({
            componets: [Header, Toolbar, Formula, Table],
            store,
        })
        return this.excel.getRoot()
    }
    afterRender() {
        this.excel.init()
    }
    destroy() {
        this.excel.destroy()
    }
}
