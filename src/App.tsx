import React, { FC, useEffect } from "react"
import { Text } from "./components/Text"
import { Statistics } from "./components/Statistics"
import { useDispatch, useSelector } from "react-redux"
import { createSymbols } from "./redux/actions"
import { AppStateType } from "./redux/store"
import { StartWindow } from "./components/StartWindow"

export const App: FC = () => {
    const dispatch = useDispatch()
    const data = "Давно выяснено, что при оценке дизайна. Давно выяснено, что при оценке дизайна. Давно выяснено, что при оценке дизайна. Давно выяснено, что при оценке дизайна. Давно выяснено, что при оценке дизайна. Давно выяснено, что при оценке дизайна."
    const isStart = useSelector((state: AppStateType) => state.isStart)
    useEffect(() => {
        dispatch(createSymbols(data))
    }, [data])

    if (!isStart) {
        return (
            <div className="bg-info position-relative vh-100">
                <StartWindow/>
            </div>
        )
    }

    return (
        <div className="vh-100 bg-info">
            <div className="container d-flex justify-content-center pt-5">
                <div className="d-flex justify-content-between bg-white rounded-3 p-5" style={{ width: "60rem" }}>
                    <Text/>
                    <Statistics/>
                </div>
            </div>
        </div>
    )
}