import { storege } from "../core/utils";
import { defaultStyles, defaultTitle } from '../constants';

const normalize = state => ({
    ...state,
    currentStyles: defaultStyles,
    currentText: '',
})

export const initialState = normalize(storege('exel-state') || {
    title: defaultTitle,
    colState: {},
    rowState: {},
    dataState: {},
    stylesState: {},
    currentText: '',
    currentStyles: defaultStyles,
})
