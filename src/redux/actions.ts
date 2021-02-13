export const CREATE_SYMBOLS = "CREATE_SYMBOLS"
export const SET_ACTIVE_INDEX = "SET_ACTIVE_INDEX"
export const SET_ERROR_INDEX = "SET_ERROR_INDEX"
export const ADD_ERRORS_COUNT = "ADD_ERRORS_COUNT"
export const SET_START = "SET_START"
export const RESTART = "RESTART"

interface ICreateSymbols {
    type: typeof CREATE_SYMBOLS
    text: string
}

interface ISetActiveIndex {
    type: typeof SET_ACTIVE_INDEX
    activeIndex: number
}

interface ISetErrorIndex {
    type: typeof SET_ERROR_INDEX
    errorIndex: number | null
}

interface IAddErrorsCount {
    type: typeof ADD_ERRORS_COUNT
}

interface ISetStart {
    type: typeof SET_START
    isStart: boolean
}

interface IRestart {
    type: typeof RESTART
}

export type ActionsTypes = ICreateSymbols | ISetActiveIndex | ISetErrorIndex | IAddErrorsCount | ISetStart | IRestart

export const createSymbols = (text: string): ICreateSymbols => ({
    type: CREATE_SYMBOLS,
    text
})

export const setActiveIndex = (activeIndex: number): ISetActiveIndex => ({
    type: SET_ACTIVE_INDEX,
    activeIndex
})

export const setErrorIndex = (errorIndex: number | null): ISetErrorIndex => ({
    type: SET_ERROR_INDEX,
    errorIndex
})

export const addErrorsCount = (): IAddErrorsCount => ({
    type: ADD_ERRORS_COUNT
})

export const setStart = (isStart: boolean): ISetStart => ({
    type: SET_START,
    isStart
})

export const restart = (): IRestart => ({
    type: RESTART
})