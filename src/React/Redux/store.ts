import {applyMiddleware, combineReducers, createStore} from "redux";
import {TasksReducer} from "../Reducer/TasksReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {appReducer} from "../Reducer/appReducer";
import thunk from "redux-thunk";

// here we put our reducers
let rootReducer = combineReducers({
    //nickname: name of reducer
    tasks: TasksReducer,
    //insert: NextReducer
    app: appReducer
})

export type AppRootReducerType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<AppRootReducerType> = useSelector

// component
// there was in old times
// let isError = useSelector<AppRootStateType, string | null>(state => state.app.isError)
// but now we are using useAppSelector - no need to use typing AppRootStateType

//@ts-ignore
window.store = store

//creating store and put inside of it rootReducer
export const store=createStore(rootReducer, applyMiddleware(thunk))