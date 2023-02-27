import * as actions from './actionType'

export const onChange = (val) => {
    return {
        type: actions.ADDCLASS,
        payload: val
    }
} 

export const onChangeTwo = (val) => {
    return {
        type: actions.ADDFUNC,
        payload: val
    }
} 