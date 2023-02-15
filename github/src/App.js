import React from "react";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";
import "./styles.css"

class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="">
                <Header />
                <div className="main">
                <Sidebar />
                <Main />
                </div>
            </div>
            
        )
    }
}

export default App 