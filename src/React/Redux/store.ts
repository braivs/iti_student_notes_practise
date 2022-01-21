import {combineReducers, createStore} from "redux";
import {TasksReducer} from "../Reducer/TasksReducer";

// here we put our reducers
let rootReducer = combineReducers({
    //nickname: name of reducer
    tasks: TasksReducer
    //insert: NextReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store=store

//creating store and put inside of it rootReducer
export let store=createStore(rootReducer)