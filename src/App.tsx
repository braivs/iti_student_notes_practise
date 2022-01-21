import React, {useReducer} from 'react';
import './App.css';
import { Body } from './React/Routing/Body';
import {Navigation} from "./React/Routing/Navigation";
import {removeTaskAC, TasksReducer} from "./React/Reducer/TasksReducer";
import {removeTodolistAC, todolistReducer} from "./React/Reducer/todolistReducer";
import {useDispatch} from "react-redux";
import {Todolist} from "./React/Todolist";
import {useAppSelector} from "./React/Redux/store";

// here is out app: menu(Nam) and Body
// is the body will be drawing our page
function App() {
    //[state, dispatchState] = useReducer(connecting tasksReducer...
    //[any name, any name]...
    let [tasks, tasksDispatch] = useReducer(TasksReducer, [
        { id: 1, title: 'HTML&CSS', isDone: true},
        { id: 2, title: 'HTML&CSS', isDone: true},
        { id: 3, title: 'HTML&CSS', isDone: true},
        { id: 4, title: 'HTML&CSS', isDone: true},
        { id: 5, title: 'HTML&CSS', isDone: true},
    ])

    //as much state - as reducers
    let [todolist, todolistDispatch] = useReducer(todolistReducer, [
        {id: 1, title: '10', filter: false}
    ])

    //creating dispatch - one for all useSelector
    let dispatch = useDispatch()
    //task - now we will get our state
    //           <from store, typing of our state>(we take state from needed reducer)

    let isError = useAppSelector<string | null>(state => state.app.isError)

    function removeTask(id: number) {
        // here was with useState:
        // let filteredTasks = tasks.filter(t => t.id != id)
        // setTasks(filteredTasks)
        //--------------------------------------------------
        //and now with TasksReducer
        tasksDispatch(removeTaskAC(id))
        // dispatch(calls ActionCreator(in which we put all necessary))
        //--------------------------------------------------
        //one function can use multiple reducers:
        todolistDispatch(removeTodolistAC(id))
    }

    function removeTaskWithRedux(id: number) {
        dispatch(removeTodolistAC(id))
    }

    return (
        <div className="App">
            {/*<Immutability />*/}
            <Navigation />
            <Body />
            <Todolist
                // tasks - no more input tasks
                title={'What to learn'}
                removeTask={removeTask}
            />
        </div>
    );
}



export default App;




