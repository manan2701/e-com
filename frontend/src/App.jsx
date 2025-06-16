import React, { useEffect } from "react";
import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav";
import { asynccurrentuser } from "./store/actions/userAction";
import { useDispatch } from "react-redux";
const App = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(asynccurrentuser())
    },[])
   return (
    <div className="main">
        <Nav/>
        <Mainroutes/>
    </div>
   );
};

export default App;
