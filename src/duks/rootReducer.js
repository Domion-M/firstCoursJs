import { TABLE_RESIZE, TABLE_RESIZE_ROW } from "./type.action"

export function rootReducer(state, action) {
    let prevState;
    switch (action.type) {
        case TABLE_RESIZE:
            prevState = state.colState || {}
            prevState[action.data.id] = action.data.value
            return { ...state, colState: prevState }
        case TABLE_RESIZE_ROW:
            prevState = state.rowState || {}
            prevState[action.data.id] = action.data.value
            return { ...state, rowState: prevState }
        default: return state
    }
}
