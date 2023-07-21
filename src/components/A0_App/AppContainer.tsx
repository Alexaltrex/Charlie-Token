import React, {createContext} from 'react';
import {App} from "./App";
import {store, Store} from "../../store/store";
import {HashRouter} from "react-router-dom";

export const StoreContext = createContext<Store>({} as Store);

export const AppContainer = () => {
    return (
        <StoreContext.Provider value={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </StoreContext.Provider>
    );
}
