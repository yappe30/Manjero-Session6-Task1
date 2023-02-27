import * as actions from "./actionType";

const initState ={
	count : 0,
    empData:{
        id: 1,
        name: 'Dexter',
        designation: 'Manager'
    },
    empDataTwo:{
        id: 1,
        name: 'alex',
        designation: 'IT'
    },

}
const reducer = (state = initState, action) => {

    switch(action.type){
        case actions.INC:
            return {...state, count: state.count + action.payload}
        case actions.ADDCLASS:
            return{...state, empData: action.payload}
        case actions.ADDFUNC:
            return{...state, empDataTwo: {name: state.empDataTwo.name, designation: action.payload }}
        default:
            return state
    }

}

export default reducer;