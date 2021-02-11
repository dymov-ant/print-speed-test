import React, { FC, useEffect, useState } from "react"
import { Text } from "./components/Text"
import { Statistics } from "./components/Statistics"

export const App: FC = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [errorIndex, setErrorIndex] = useState<number | null>(null)
    const data = "Давно выяснено, что при оценке дизайна и "
    const symbols = data.split("")

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const keyPressHandler = (event: KeyboardEvent) => {
        if (event.key === symbols[activeIndex]) {
            console.log("Верно")
            setActiveIndex(prevState => prevState < symbols.length ? prevState + 1 : prevState)
            setErrorIndex(null)
        } else {
            setErrorIndex(activeIndex)
            console.log("Ошибка")
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", keyPressHandler)
        return () => document.removeEventListener("keydown", keyPressHandler)
    }, [keyPressHandler])


    return (
        <div className="vh-100 bg-info">
            <div className="container d-flex justify-content-center pt-5">
                <div className="d-flex justify-content-between bg-white rounded-3 p-5" style={{ width: "60rem" }}>
                    <Text symbols={symbols} activeIndex={activeIndex} errorIndex={errorIndex}/>
                    <Statistics/>
                </div>
            </div>
        </div>
    )
}