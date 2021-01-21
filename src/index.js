import { Excel } from './components/excel';
import { Header } from './components/header'
import { Toolbar } from './components/toolbar'
import { Formula } from './components/formula'
import { Table } from './components/table'
import { createStore } from './core/createStore';
import './scss/index.scss';
import { rootReducer } from './duks/rootReducer';
import { storege } from './core/utils';

const store = createStore(rootReducer, storege('exel-state'))
store.subscribe(state => storege('exel-state', state))
const excel = new Excel('#app', {
    componets: [Header, Toolbar, Formula, Table],
    store,
})
excel.render()
