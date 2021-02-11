import { FC } from "react"

interface ISymbolProps {
    char: string
    active: boolean
    error: boolean
}

export const Symbol: FC<ISymbolProps> = ({char, active, error}) => {
    return (
        <span className={error ? "bg-danger text-white p-1 rounded-2" : active ? "bg-success text-white p-1 rounded-2" : "text-dark"}>
            {char}
        </span>
    )
}