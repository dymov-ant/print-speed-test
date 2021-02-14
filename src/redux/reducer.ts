import {
    ActionsTypes,
    ADD_INDEX_TO_ERRORS,
    CREATE_SYMBOLS,
    SET_ACTIVE_INDEX,
    SET_ERROR_INDEX,
    SET_FINISH,
    SET_IS_LOADING,
    SET_RESULT,
    SET_START
} from "./actions"

export interface IResult {
    speed: number
    truth: number
}

interface IRootState {
    symbols: string[]
    activeIndex: number
    errorIndex: number | null
    errors: number[]
    isStart: boolean
    isLoading: boolean
    result: IResult | null
    isFinish: boolean
}

const initialState: IRootState = {
    symbols: [],
    activeIndex: 0,
    errorIndex: null,
    errors: [],
    isStart: false,
    isLoading: false,
    result: null,
    isFinish: false
}

export const rootReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case CREATE_SYMBOLS:
            return {
                ...state,
                symbols: action.text.split("")
            }
        case SET_ACTIVE_INDEX:
            return {
                ...state,
                activeIndex: action.activeIndex
            }
        case SET_ERROR_INDEX:
            return {
                ...state,
                errorIndex: action.errorIndex
            }
        case ADD_INDEX_TO_ERRORS:
            return {
                ...state,
                errors: [...state.errors, action.index]
            }
        case SET_START:
            return {
                ...state,
                isStart: action.isStart,
                isFinish: false,
                result: null
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_FINISH:
            return {
                ...state,
                symbols: [],
                activeIndex: 0,
                errorIndex: null,
                errors: [],
                isStart: false,
                isFinish: true
            }
        case SET_RESULT:
            return {
                ...state,
                result: action.result
            }
        default:
            return state
    }
}