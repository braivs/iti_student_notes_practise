import React from 'react';
import {useSelector} from "react-redux";
import {AppRootReducerType} from "./Redux/store";
import {TaskType} from "../types/types";

export function Todolist(props: PropsType) {
    // have inserted here useSelector and the line 28 we are drawing state without any props
    let tasks = useSelector<AppRootReducerType, Array<TaskType>>(state => state.tasks)
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {
                tasks.map(t => <li key={t.id}>
                        <input type='checkbox' checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={() => {
                            props.removeTask(t.id)
                        }}>x
                        </button>
                    </li>
                    )
            }
        </ul>

    </div>
}

type PropsType = {
    title: string
    removeTask: (id: string) => void
}