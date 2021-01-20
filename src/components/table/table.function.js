import { renge } from '../../core/utils';

export function shouldResize(e) {
    return e.target.dataset.resize
}
export function isCell(event) {
    return event.target.dataset.type === 'cell'
}
export function matrix($target, $current) {
    const current = $current.id('/');
    const target = $target.id('/');
    const cols = renge(current.col, target.col);
    const rows = renge(current.row, target.row);
    return cols.reduce((acc, col) => {
        rows.forEach(row => acc.push(`${row}/${col}`))
        return acc
    }, [])
}

export function nextSelector(key, { col, row }, maxRow) {
    const MIN_VALUE = 0;
    const MAX_COLS = 25;
    switch (key) {
        case 'Enter':
        case 'ArrowDown':
            row = row + 1 < maxRow - 1 ? row + 1 : maxRow - 1
            break
        case 'Tab':
        case 'ArrowRight':
            col = col + 1 < MAX_COLS ? col + 1 : MAX_COLS
            break
        case 'ArrowLeft':
            col = col - 1 < MIN_VALUE ? MIN_VALUE : col - 1
            break
        case 'ArrowUp':
            row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1
            break
    }
    return `[data-id="${row}/${col}"]`
}

