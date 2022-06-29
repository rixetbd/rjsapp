import React from "react";

import Bio from "./bio";
import Skills from "./skills";
import Social from "./social.jsx";

import './profile.css';


class Profile extends React.Component{

render(){

    return (

        <div className="container profile mt-4">
            <Bio/>
            <Skills/>
            <Social/>
        </div>

    );

};

}

export default Profile;