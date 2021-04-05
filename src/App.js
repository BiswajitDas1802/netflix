import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { auth } from "./firebase";
import {useDispatch} from 'react-redux'
import Homescreen from './screens/homescreen';
import Login from "./screens/LoginScreen";
import { logout,login, selectUser } from './features/userSlice'
import { useSelector } from "react-redux";
import ProfileScreen from "./screens/ProfileScreen";


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(
          login(
            {
              uid:userAuth.uid,
              email:userAuth.email,
            }
          )
        );
      }
      else{
        dispatch(logout());
      }
    });

         return unsubscribe;

  },[dispatch])

  return (
    <div className="app">

        <Router>
          {!user ? (
            <Login/>
          ):(
            <Switch>
              <Route path="/profile">
                <ProfileScreen />
              </Route>
              <Route exact path="/">
                <Homescreen />
              </Route>
          </Switch>
   
          )}
         </Router>  
    </div>
  );
}

export default App;
