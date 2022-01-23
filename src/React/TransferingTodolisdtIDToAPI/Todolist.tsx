import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchTasksThunk} from "../Reducer/TasksReducer";

type PropsType = {
    id: string
}

export const Todolist = React.memo(function (props: PropsType) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTasksThunk(props.id))
    })

    return <div>

    </div>
})