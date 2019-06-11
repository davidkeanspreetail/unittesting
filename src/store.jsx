import { configureStore } from "redux-starter-kit";
import rootReducer from "./redux/reducers";

const store = configureStore({
    reducer: rootReducer,
    devTools: true
});

export default store;
