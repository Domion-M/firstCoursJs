import { defaultStyles, defaultTitle, formatDate } from '../constants';
import { clone } from '../core/utils';
import moment from 'moment'

const normalize = state => ({
    ...state,
    currentStyles: defaultStyles,
    currentText: '',
})

const defaultState = {
    title: defaultTitle,
    colState: {},
    rowState: {},
    dataState: {},
    stylesState: {},
    currentText: '',
    currentStyles: defaultStyles,
    openDate: moment().format(formatDate),
}

export function normolizeInitialState(state) {
    return state ? normalize(state) : clone(defaultState)
}
