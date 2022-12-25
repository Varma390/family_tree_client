let intialstate = {value : false}
export const  displayreducer = (state=intialstate,action) => {
    switch(action.type) {
        case 'SHOW':
            return {...state, value:action.payload};
        default:
            return state;
    }
}


