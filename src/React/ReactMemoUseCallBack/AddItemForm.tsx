import React, {useCallback} from 'react';
import {addTodolistAC} from "../Reducer/todolistReducer";
import {useDispatch} from "react-redux";

type AddItemFormPropsType = {

}

// wrapping component with React.memo
export const AddItemForm = React.memo((props: AddItemFormPropsType) => {
    const dispatch = useDispatch()

    // if we are using dispatch - then need to add it to dependencies
    const addTodolist = useCallback((title: string) => {
        const action = addTodolistAC(title)
        dispatch(action)
    },[dispatch])

    return <div>

    </div>
})

// depend from props
export function Todolist(props: PropsType) {
    const addTask = useCallback((title: string) => {
        props.addTask(title, props.id)
    }, [props.addTask, props.id])

    return <div>

    </div>
}

type PropsType = {
    addTask: (title: string, id: number) => void
    id: number
}

