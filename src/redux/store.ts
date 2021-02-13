import { createStore } from "redux"
import {rootReducer} from "./reducer"

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export default createStore(rootReducer)