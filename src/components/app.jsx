import React from "react";

import Profile from "./profile";

class App extends React.Component {

    render(){

        // function MyFunctionalComponent (){
        //     return <h2>Hello {10+10}</h2>;
        // }

        return (
            <div className="app">
                {/* <MyFunctionalComponent/> */}
                <Profile/>
            </div>

        );
    }
}


export default App;
