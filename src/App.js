import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import { useEffect } from "react";
import { auth } from "./firebase";
/* import { dispatch } from "./firebase"; */
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";


function App() {

  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...


    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <div className="app">
      <Router>
        <Routes>
     
          <Route exact path="/" element={[<Header/>, <Home/>]} />
          <Route path="/Checkout" element={[<Header/>, <Checkout/>]}/>
          <Route path="/Login" element={<Login/>}/>
          
        </Routes>
        </Router>
      </div>
  );
}
export default App;