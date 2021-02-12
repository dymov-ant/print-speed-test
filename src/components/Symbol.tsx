import { FC } from "react"

interface ISymbolProps {
    char: string
    active: boolean
    error: boolean
    success: boolean
}

export const Symbol: FC<ISymbolProps> = ({ char, active, error, success }) => {
    return (
        <span className={
            error
                ? "bg-danger text-white p-1 rounded-2"
                : active
                    ? "bg-success text-white p-1 rounded-2"
                    : success
                        ? "text-success"
                        : "text-dark"
        }
        >
            {char}
        </span>
    )
}