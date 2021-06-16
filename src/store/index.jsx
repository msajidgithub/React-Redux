import auth_reducer from './reducer/auth_reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig ={
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, auth_reducer)

const store =  createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store); 

export default store;
