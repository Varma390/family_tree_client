import React, {useState} from "react";
import { addmember } from "../actions/actions";
import { useDispatch } from "react-redux";


const FamilyDetails = () => {
    const dispatch = useDispatch()

    const [member, setMember] = useState({name: "", spouse: "", location: "", birthYear: "", address:""})
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(member);
    // }
    return (
        <>
            <div >
                <h3>Family Details</h3>
                <div className='line'></div>
                <form className="form" id="formsubmit" onSubmit={(e) => {e.preventDefault();dispatch(addmember(member))}}>

                    <div>
                        <label>Name :</label>
                        <input type="text" onChange={(e) => { setMember({...member,name:e.target.value}) }} ></input>
                    </div>

                    <div>
                        <label>Spouse :</label>
                        <input type="text" onChange={(e) => { setMember({...member,spouse:e.target.value}) }}></input>
                    </div>

                    <div>
                        <label>Location :</label>
                        <input type="text" onChange={(e) => { setMember({...member,location:e.target.value}) }}></input>
                    </div>

                    <div>
                        <label>Birth Year :</label>
                        <input type="number" onChange={(e) => { setMember({...member,birthYear:e.target.value}) }}></input>
                    </div>

                    <div>
                        <label>Present Address :</label>
                        <input type="text" onChange={(e) => { setMember({...member,address:e.target.value}) }}></input>
                    </div>

                    <div>
                        <label>Family Photo :</label>
                        <img alt="pic"></img>
                    </div>

                </form>
            </div>
        </>
    )
}

export default FamilyDetails;