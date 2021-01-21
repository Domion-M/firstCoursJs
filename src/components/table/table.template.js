const CODES = {
    A: 65,
    Z: 90,
}
const DEFAULT_WIDTH = 120

function getWhith(state, index) {
    return (state.colState[index] || DEFAULT_WIDTH) + 'px';
}

function toCell(row, state) {
    return function cell(_, col) {
        const width = getWhith(state, col)
        return `
        <div 
        class="cell" 
        data-col="${col}" 
        data-type="cell"
        data-id="${row}/${col}" 
        style="width:${width}"
        contenteditable>
        </div>
        `
    }
}

function toColumn({ col, index, width }) {
    return `
    <div 
    class="column" 
    data-type="resizable" 
    data-col="${index}"
    style="width:${width}"
    >
    ${col}
    <div class="col-resize" data-resize="col"></div>
    </div>
    `
}

function createRows(index, content) {
    const resize = index ?
        '<div class="row-resize" data-resize="row"></div>' : ''
    return `
    <div class="row" data-type="resizable" data-row="${index - 1}">
        <div class="row-info">${index ?? ''}
        ${resize}        
        </div >
    <div class="row-data" > ${content}</div>
    </div >
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

function withWidthFrom(state) {
    return function get(col, index) {
        return {
            col, index, width: getWhith(state, index),
        }
    }
}

export function createTable(rowsCount = 15, state = {}) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []
    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(withWidthFrom(state))
        .map(toColumn)
        .join('');

    rows.push(createRows(null, cols));

    for (let row = 0; row < rowsCount; row++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(toCell(row, state))
            .join('')
        rows.push(createRows(row + 1, cells))
    }
    return rows.join('')
}
