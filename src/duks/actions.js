import {
    CHANGE_TEXT,
    TABLE_RESIZE,
    CHANGE_STYLES,
    APPLY_STORE,
    CHANGE_TITLE,
} from "./type.action";

export function tableResize(data) {
    return {
        type: TABLE_RESIZE,
        data,
    }
}
export function changeText(data) {
    return {
        type: CHANGE_TEXT,
        data,
    }
}
export function changeStyles(data) {
    return {
        type: CHANGE_STYLES,
        data,
    }
}
export function applyStyle(data) {
    return {
        type: APPLY_STORE,
        data,
    }
}

export function changeTitle(data) {
    return {
        type: CHANGE_TITLE,
        data,
    }
}
