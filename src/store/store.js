/**
 * TOUS LES IMPORTS DES FONCTIONS ET LIBRAIRIES ICI
 */
import { combineReducers, legacy_createStore } from "redux";
import LocalStorage from "../reducers/LocalStorageReducers.js"

const rootReducers=combineReducers({
    //pokedex reducer
    pokedex: LocalStorage
})

const store= legacy_createStore(rootReducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;