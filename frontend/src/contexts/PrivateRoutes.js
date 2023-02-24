import React from "react";
import { Route, Navigate } from "react-router-dom";
// import Cookies from "universal-cookie";
// const cookies = new Cookies();

// TODO: Test PrivateRoutes in App.js
// PrivateRoutes Component 
// receives component and any other props represented by ...rest
export default function PrivateRoutes({ component: Component, ...rest }) {
    return (

        // Takes assigned route from the App.js and returns the same route if condition is met
        <Route
            {...rest}
            render={(props) => {
                // Get token if user is logged in
                const token = localStorage.getItem('token')
                // const token = cookies.get("TOKEN");

                // if token exists return the component
                if (token) {
                    return <Component {...props} />;
                } else {
                    // else return to landing page
                    return (
                        <Navigate
                            to={{
                                pathname: "/home",
                                state: {
                                    // setting location user was about to assess before being redirected
                                    from: props.location,
                                },
                            }}
                        />
                    );
                }
            }}
        />
    );
}
