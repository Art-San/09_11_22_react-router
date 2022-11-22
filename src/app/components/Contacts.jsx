import React from "react";
import { Route, Link } from "react-router-dom";
import ContactDepartaments1 from "./ContactDepartaments1";
import ContactDepartaments2 from "./ContactDepartaments2";

const Contacts = () => {
    return (
        <>
            <h1>Контакты</h1>
            <ul>
                <li>
                    <Link to="/contacts/departaments-1">Департамент 1</Link>
                </li>
                <li>
                    <Link to="/contacts/departaments-2">Департамент 2</Link>
                </li>
            </ul>
                <Route
                    path="/contacts/departaments-1"
                    component={ContactDepartaments1}
                />
                <Route
                    path="/contacts/departaments-2"
                    component={ContactDepartaments2}
                />
        </>
    );
};

export default Contacts;