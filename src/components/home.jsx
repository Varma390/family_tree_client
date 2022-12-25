import React from "react";
import Buttons from "./buttons";
import FamilyDetails from "./familydetails";
import FamilyTreeBox from "./familytreebox";
import '../styles/home.css'
import { useSelector } from 'react-redux';

const Home = () =>{
    const show = useSelector((state) => state.displaydetails);
    return(
        <>
        <div className="homecontainer">
        <FamilyTreeBox/>
        <div className="familydetailscontainer">{show.value && <FamilyDetails/>}</div>
        <Buttons/>
        </div>
        </>
    )
}

export default Home;