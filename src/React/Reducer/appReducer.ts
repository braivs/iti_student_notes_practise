const initialState: InitialStateType = {
    isError: null,
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-ERROR':
            return {...state, isError: action.isError}
        default:
            return {...state}
    }
}

export const setAppErrorAC = (isError: string | null) => ({type: 'APP/SET-ERROR', isError} as const)

export type InitialStateType = {
    isError: string | null
}

type ActionsType = ReturnType<typeof setAppErrorAC>