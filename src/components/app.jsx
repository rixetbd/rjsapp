import React from "react";

class App extends React.Component {

    render(){
        return (
            
            <h1>Hello</h1>
            
        );
    }
}


export default App;

function MyFunctionalComponent (){
    let name = "Rabiul Islam";
    return <h2>Hello ${name}</h2>
}

const AnoterFunction = () => ( "hi");

AnoterFunction();

MyFunctionalComponent();