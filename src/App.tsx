import React, { FC } from "react"
import { Text } from "./components/Text"
import { Statistics } from "./components/Statistics"
import { useSelector } from "react-redux"
import { AppStateType } from "./redux/store"
import { StartWindow } from "./components/StartWindow"

export const App: FC = () => {
    const isStart = useSelector((state: AppStateType) => state.isStart)

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
                <div className="d-flex justify-content-between bg-white rounded-3 p-5">
                    <Text/>
                    <Statistics/>
                </div>
            </div>
        </div>
    )
}