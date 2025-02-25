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
export function deleteStoregItem(key) {
    localStorage.removeItem(`exel:${key}`)
}

export function isEqual(a, b) {
    if (typeof a === 'object' && typeof b === 'object') {
        return JSON.stringify(a) === JSON.stringify(b)
    }
    return a === b
}

export function camelToDashCase(myStr) {
    return myStr.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
}

export function toInlineStyles(styles = {}) {
    return Object.keys(styles)
        .map(key => `${camelToDashCase(key)}:${styles[key]};`)
        .join('')
}

export function debounce(fn, wait) {
    let timeout;
    return (...args) => {
        clearInterval(timeout)
        timeout = setTimeout(() => {
            fn(...args)
        }, wait);
    }
}

export function clone(obj) {
    return JSON.parse(JSON.stringify(obj))
}

export function parseIdTable(str) {
    return str.split(':')
}

export function preventDefault(e) {
    e.preventDefault()
}
