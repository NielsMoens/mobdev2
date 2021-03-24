import {useState, createContext, useContext} from 'react';
import App from '../App/App';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Routes } from '../../core/routing';
import LoginPage from '../Onboarding/Login/LoginPage';
import storage from "../../core/Storage";

export const AuthContext = createContext();

const AuthProvider = () => {
    const [user, setUser] = useState(storage.getUser());

    const updateUser = (user) => {
        storage.storeUser(user)
        setUser(user);
    }

    if (user) {
        return (
            <AuthContext.Provider value={{user, setUser: updateUser}}>
                <App />
            </AuthContext.Provider>
        );
    }

    return (
        <Switch>
            <Route path={Routes.Login}>
                <LoginPage setUser={updateUser} />
            </Route>
            <Redirect to={Routes.Login} />
        </Switch>
    )
};

const useAuth = () => {
    return useContext(AuthContext);
}
export {
    useAuth,
}

export default AuthProvider;
