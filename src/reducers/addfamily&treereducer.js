
    const initialState = {
      loading:false,
      users: [],
      select:'',
      error: ''
  }
  export const familytree_and_addreducer = (state=initialState,action) => {
    switch(action.type) {
        case 'ADD':
          return {...state, users: state.users[0].children.push(action.payload)}; 
        case 'SELECT':
          return{...state,}; 
        case 'LOAD':
          return {...state, users:action.payload, loading:true};
        default:
            return state;
    }
}

// let intialstate = {value : 'false'}
// export const  familytree_and_addreducer = (state=intialstate,action) => {
//     switch(action.type) {
        // case 'LOAD':
        //     return {...state, value:'true'};
//         default:
//             return state;
//     }
// }