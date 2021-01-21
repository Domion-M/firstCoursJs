export function capitalize(string) {
    if (typeof string !== 'string') {
        return ''
    }
    return string.charAt(0).toUpperCase() + string.slice(1)
}
export function renge(start, end) {
    if (start > end) {
        [end, start] = [start, end]
    }
    return new Array(end - start + 1)
        .fill('')
        .map((_, index) => {
            return start + index
        });
}
export function storege(key, data = null) {
    if (!data) {
        return JSON.parse(localStorage.getItem(key))
    }
    localStorage.setItem(key, JSON.stringify(data))
}
