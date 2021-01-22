export function parse(text = '') {
    if (text.startsWith('=')) {
        try {
            return eval(text.slice(1))
        } catch (error) {
            return text
        }
    }
}
