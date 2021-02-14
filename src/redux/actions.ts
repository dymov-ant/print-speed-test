import { IResult } from "./reducer"

export const CREATE_SYMBOLS = "CREATE_SYMBOLS"
export const SET_ACTIVE_INDEX = "SET_ACTIVE_INDEX"
export const SET_ERROR_INDEX = "SET_ERROR_INDEX"
export const ADD_INDEX_TO_ERRORS = "ADD_INDEX_TO_ERRORS"
export const SET_START = "SET_START"
export const SET_IS_LOADING = "SET_IS_LOADING"
export const SET_FINISH = "SET_FINISH"
export const SET_RESULT = "SET_RESULT"

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

interface IAddIndexToErrors {
    type: typeof ADD_INDEX_TO_ERRORS
    index: number
}

interface ISetStart {
    type: typeof SET_START
    isStart: boolean
}

interface ISetIsLoading {
    type: typeof SET_IS_LOADING
    isLoading: boolean
}

interface ISetFinish {
    type: typeof SET_FINISH
}

interface ISetResult {
    type: typeof SET_RESULT
    result: IResult
}

export type ActionsTypes =
    ICreateSymbols
    | ISetActiveIndex
    | ISetErrorIndex
    | IAddIndexToErrors
    | ISetStart
    | ISetIsLoading
    | ISetFinish
    | ISetResult

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

export const addIndexToErrors = (index: number): IAddIndexToErrors => ({
    type: ADD_INDEX_TO_ERRORS,
    index
})

export const setStart = (isStart: boolean): ISetStart => ({
    type: SET_START,
    isStart
})

export const setIsLoading = (isLoading: boolean): ISetIsLoading => ({
    type: SET_IS_LOADING,
    isLoading
})

export const finish = (): ISetFinish => ({
    type: SET_FINISH
})

export const setResult = (result: IResult): ISetResult => ({
    type: SET_RESULT,
    result
})