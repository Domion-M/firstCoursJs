import { TABLE_RESIZE, TABLE_RESIZE_ROW } from "./type.action";

export function tableResize(data) {
    return {
        type: TABLE_RESIZE,
        data,
    }
}
export function tableResizeRow(data) {
    return {
        type: TABLE_RESIZE_ROW,
        data,
    }
}
