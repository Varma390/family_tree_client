import axios from "axios"

export const SHOW = "SHOW" 
export const display1 = (data) => {
    return {
        type: SHOW,
        payload: data
    }
}

//----------------------------------

export const select1 =  (data) => {
    return  (dispatch) => {
        // return axios.get('https://jsonplaceholder.typicode.com/users')
        // return axios.get('http://localhost:3000/user')
       axios.post('http://localhost:3000/user',data)
        .then((res) => {
            console.log('x');
            console.log(res.data)
            dispatch({
                type:"SELECT",
                payload: res.data
            })
        })
        .catch(err => console.log(err))
    }
}
//------------------------------------

// export const addmember = (data) => {
//     return {
//         type: 'ADD',
//         payload: data
//     }
// }

export const addmember =  (data) => {
    return (dispatch) => {
        // return axios.get('https://jsonplaceholder.typicode.com/users')
        axios.post('http://localhost:3000/users',data)
        .then((res) => {
            console.log('x');
            console.log(res.data)
            dispatch({
                type: 'ADD',
                payload: res.data
            })
            // getdata(res.data)
        })
        .catch(err => console.log(err))
    }
}

//--------------------------------------
// export const LOAD = "LOAD" 
//  const getdata = (data) => {
//     return {
//         type: LOAD,
//         payload: data
//     }
// }
// export const loaddata = () => {
//     return getdata('ravi')
// }
export const loaddata = () => {

        return   (dispatch) => {
        // return axios.get('https://jsonplaceholder.typicode.com/users')
        axios.get('http://localhost:3000/users')
        .then((res) => {
            console.log('x');
            console.log(res.data)
            dispatch({
                type: 'LOAD',
            payload: res.data
            })
        })
        .catch(err => console.log(err))
    }
}
// }
//-----------------------------------------