import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import movieInfoReducer from "./reducers/movieInfoReducer";



const store = createStore(movieInfoReducer,applyMiddleware(thunk));

export default store;

