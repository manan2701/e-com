import React, { useEffect } from "react";
import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav";
import { asynccurrentuser } from "./store/actions/userAction";
import { useDispatch } from "react-redux";
import { asyncgetproduct } from "./store/actions/productAction";
const App = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(asynccurrentuser());
        dispatch(asyncgetproduct())
    },[])
   return (
    <div className="main">
        <Nav/>
        <Mainroutes/>
    </div>
   );
};

export default App;
