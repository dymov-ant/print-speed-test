import { FC } from "react"

interface ISymbolProps {
    char: string
    index: number
    active: boolean
}

export const Symbol: FC<ISymbolProps> = ({char, index, active}) => {
    return (
        <span className={active ? "bg-success text-white p-1 rounded-2" : "text-dark"}>
            {char}
        </span>
    )
}