import React from "react";
import NavBarUser from "../components/NavBarAccount";
import {AuthContextProvider} from "../context/AuthContext";

const Dashboard = () => {

    return(
        <AuthContextProvider>
        <div>
            <NavBarUser/>
        </div>
        </AuthContextProvider>

    );

}

export default Dashboard;