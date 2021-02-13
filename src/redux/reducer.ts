import { ActionsTypes, CREATE_SYMBOLS, SET_ACTIVE_INDEX, SET_ERROR_INDEX, SET_START } from "./actions"

interface IRootState {
    symbols: string[]
    activeIndex: number
    errorIndex: number | null
    isStart: boolean
}

const initialState: IRootState = {
    symbols: [],
    activeIndex: 0,
    errorIndex: null,
    isStart: false
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
        case SET_START:
            return {
                ...state,
                isStart: action.isStart
            }
        default:
            return state
    }
}