import {
    CHANGE_TEXT,
    CHANGE_STYLES,
    TABLE_RESIZE,
    APPLY_STORE,
    CHANGE_TITLE,
    UPDATE_DATE,
} from "./type.action"
import moment from 'moment'
import { formatDate } from "../constants";

export function rootReducer(state, action) {
    let feild;
    let val;
    switch (action.type) {
        case TABLE_RESIZE:
            feild = action.data.type === 'col' ? 'colState' : 'rowState'
            return {
                ...state,
                [feild]: value(state, feild, action),
            }
        case CHANGE_TEXT:
            feild = 'dataState'
            return {
                ...state,
                currentText: action.data.value,
                [feild]: value(state, feild, action),
            }
        case CHANGE_STYLES:
            return {
                ...state,
                currentStyles: action.data,
            }
        case APPLY_STORE:
            feild = 'stylesState'
            val = state[feild] || {}
            action.data.ids.forEach(id =>
                val[id] = { ...val[id], ...action.data.value })
            return {
                ...state,
                [feild]: val,
                currentStyles: { ...state.currentStyles, ...action.data.value },
            }
        case CHANGE_TITLE:
            return { ...state, title: action.data }
        case UPDATE_DATE:
            return { ...state, openDate: moment().format(formatDate) }
        default: return state
    }
}

function value(state, feild, action) {
    const val = state[feild] || {}
    val[action.data.id] = action.data.value
    return val
}
