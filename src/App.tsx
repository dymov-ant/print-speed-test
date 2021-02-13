import React, { FC, useEffect } from "react"
import { Text } from "./components/Text"
import { Statistics } from "./components/Statistics"
import { useDispatch } from "react-redux"
import { createSymbols } from "./redux/actions"

export const App: FC = () => {
    const dispatch = useDispatch()
    const data = "Давно выяснено, что при оценке дизайна. Давно выяснено, что при оценке дизайна. Давно выяснено, что при оценке дизайна. Давно выяснено, что при оценке дизайна. Давно выяснено, что при оценке дизайна. Давно выяснено, что при оценке дизайна."

    useEffect(() => {
        dispatch(createSymbols(data))
    }, [data])

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