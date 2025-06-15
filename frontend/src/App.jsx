import React from "react";
import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav";
const App = () => {
   return (

    <div className="main">
        <Nav/>
        <Mainroutes/>
    </div>
   );
};

export default App;
