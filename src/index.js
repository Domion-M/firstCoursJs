import { Excel } from './components/excel';
import { Header } from './components/header'
import { Toolbar } from './components/toolbar'
import { Formula } from './components/formula'
import { Table } from './components/table'
import { createStore } from './core/createStore';
import { rootReducer } from './duks/rootReducer';
import { storege, debounce } from './core/utils';
import { initialState } from './duks/initailState';
import './scss/index.scss';

const store = createStore(rootReducer, initialState)
const stateListeners = debounce(state => storege('exel-state', state), 300)
store.subscribe(stateListeners)

const excel = new Excel('#app', {
    componets: [Header, Toolbar, Formula, Table],
    store,
})
excel.render()
