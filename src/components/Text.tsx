import { FC } from "react"
import { Symbol } from "./Symbol"

interface ITextProps {
    symbols: string[]
    activeIndex: number
    errorIndex: number | null
}

export const Text: FC<ITextProps> = ({symbols, activeIndex, errorIndex}) => {
    return (
        <p className="fs-5 me-5">
            {
                symbols.map((char, index) => <Symbol key={index} char={char} active={activeIndex === index} error={errorIndex === index}/>)
            }
        </p>
    )
}