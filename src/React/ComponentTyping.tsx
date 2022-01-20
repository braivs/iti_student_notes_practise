import React from 'react';
import {TaskType} from "../types/types";

//Component typing
type PropsType = {
    title: string
    tasks: Array<TaskType>
}
//"Classic typing" - as need to do
export function TodolistClassicTipisation(props: PropsType) {}
//"fast typing" - no NEED to so this :) but need to understand
export function TodolistFastTipisation(props: { title: string, tasks: Array<TaskType>}) {}