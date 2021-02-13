export const CREATE_SYMBOLS = "CREATE_SYMBOLS"
export const SET_ACTIVE_INDEX = "SET_ACTIVE_INDEX"
export const SET_ERROR_INDEX = "SET_ERROR_INDEX"
export const SET_START = "SET_START"

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

interface ISetStart {
    type: typeof SET_START
    isStart: boolean
}

export type ActionsTypes = ICreateSymbols | ISetActiveIndex | ISetErrorIndex | ISetStart

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

export const setStart = (isStart: boolean): ISetStart => ({
    type: SET_START,
    isStart
})