import React, {useState} from "react";

import { display1} from "../actions/actions";
import { useDispatch } from "react-redux";

const Buttons = () => {
    const dispatch = useDispatch()
    // const [state,setstate] = useState()
    return(
        <>
        <div className="buttoncontainer">
            <button>Import Json</button>
            <button onClick={() => dispatch(display1(true))}>Add Family</button>
            {/* <button form="formsubmit" type="submit" onClick={() => {dispatch(display1());dispatch(addmember())}}>Export Json</button> */}
            <button form="formsubmit" type="submit" >Export Json</button>
            <button>Print Tree Family</button>
        </div>
        </>
    )
}

export default Buttons;