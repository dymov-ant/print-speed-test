import React, { FC } from "react"
import { Text } from "./components/Text"
import { Statistics } from "./components/Statistics"
import { useSelector } from "react-redux"
import { AppStateType } from "./redux/store"
import { StartFinish } from "./components/StartFinish"

export const App: FC = () => {
    const isStart = useSelector((state: AppStateType) => state.isStart)
    const isFinish = useSelector((state: AppStateType) => state.isFinish)

    if (!isStart || isFinish) {
        return (
            <div className="bg-info position-relative vh-100">
                <StartFinish/>
            </div>
        )
    }

    return (
        <div className="vh-100 bg-info user-select-none">
            <div className="container d-flex justify-content-center pt-5">
                <div className="d-flex justify-content-between bg-white rounded-3 p-5">
                    <Text/>
                    <Statistics/>
                </div>
            </div>
        </div>
    )
}