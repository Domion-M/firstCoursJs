import { parseIdTable, storege } from "../core/utils"

function toHTML(cur, index) {
    const id = parseIdTable(cur)
    const modal = storege(cur)
    const title = modal.title || `Таблица №${index + 1}`

    return `
    <li class="db__record">
    <a href="#exel/${id[1]}">${title}</a>
    <strong>${modal.openDate}</strong>
    </li>
    `
}

function getAllKeys() {
    const keys = []
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (!key.includes('exel')) {
            continue
        }
        keys.push(key)
    }
    return keys
}

export function getAllRecords() {
    const keys = getAllKeys()
    if (keys.length) {
        return keys.map(toHTML)
            .join('')
    }
    return `<p style="
    text-align: center;
    font-size: 1.4rem;
    margin-top: 30px;
    ">
    You are not creacte Table
    </p>`
}
