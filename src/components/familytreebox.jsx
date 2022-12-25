import React, {useState, useEffect} from "react";
import { FamilyTree } from "./familytree";
import { useSelector,useDispatch } from 'react-redux';
import { loaddata } from "../actions/actions";

const FamilyTreeBox = () => {
   
    // const [expand, setExpand] = useState(false)
    const dispatch = useDispatch()
    let data = useSelector((state) => state.familyreducer);

  
    useEffect(()=>{
        dispatch(loaddata())

    },[])
    return(
        <>
        <div className="familytreecontainer" >
            <h3>Family Tree</h3>
            <div className='line'></div>
            <input placeholder="search"></input>
            <button >show</button> 
            {data.loading && <FamilyTree  data = {data}/>}
            {/* <FamilyTree  data = {data}/> */}
            {/* {data.loading && 
              <div>
              <span onClick={() => setExpand(!expand)}>{data.users.name}</span>
              
          </div> */}

            

        </div>

        </>
    )
}

export default FamilyTreeBox;