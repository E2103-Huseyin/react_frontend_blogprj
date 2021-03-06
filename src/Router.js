import React from 'react'
import Detail from "./pages/Detail"
import Create from "./pages/Create"
import Update from "./pages/Update"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Mainpage from "./pages/Mainpage"
import Signup from "./pages/Signup"
import SuccessAlerts from "./components/Alert/SuccessAlert"
import {BrowserRouter ,Route, Switch} from "react-router-dom";
import PrimarySearchAppBar from "./components/Navbar/index";



const MyRouter = () => {
    return (
        <>
            <BrowserRouter >
            <PrimarySearchAppBar/>
            {/* <SuccessAlerts/> */}
            <Switch>
                <Route path="/detail/:slug" component={Detail} exect/>
                <Route path="/update/:slug" component={Update} exect/>
                <Route path="/create/" component={Create} exect/>
                <Route path="/register" component={Signup} exect/>
                <Route path="/user/profile/:username" component={Profile} exect/>
                <Route path="/auth/login" component={Login} exect/>
                <Route path="/" component={Mainpage}/>
            </Switch>
            </BrowserRouter>
            
        </>
    )
}

export default MyRouter
