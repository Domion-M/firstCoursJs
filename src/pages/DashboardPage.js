import { $ } from "../core/dom";
import { Page } from "../core/Page";
import { getAllRecords } from "./dashboard.function";

export class DashboarPage extends Page {
    constructor() {
        super()
    }
    getRoot() {
        const now = Date.now().toString()
        return $.create('div', 'db').html(`
        <div class="db__header">
                <h1>Excel Dashboard</h1>
            </div>
            <div class="db__new">
                <div class="db___view">
                    <a 
                    href="#exel/${now}" 
                    class="db__create"
                    >Новая <br>таблица</a>
                </div>
            </div>
            <div class="db__table db__view">
                <div class="db__list-header">
                    <span>Название таблице</span>
                    <span>Дата открытия</span>
                </div>
                <ul class="db__list">
                   ${getAllRecords()}
                </ul>

            </div>
        `)
    }
}
