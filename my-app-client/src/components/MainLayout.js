import React from 'react';
import NavbarMain from "./Navbar";
import Login from "./Login";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Books from "./Books";
import PersonalBooks from "./PersonalBooks";

const MainLayout = () => {
    return (
        <div className="mainLayout">
            <BrowserRouter>
                <NavbarMain />
                <Switch>
                    <Route exact path="/" component={Login} />
                    {/*<Route  exact path="/main" component={Login} />*/}
                    <Route  exact path="/books" component={Books} />
                    <Route  exact path="/personal-books" component={PersonalBooks} />

                </Switch>
            </BrowserRouter>

        </div>
    );
};

export default MainLayout;