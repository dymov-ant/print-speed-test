import { FC } from "react"

export const Spinner: FC = () => {
    return (
        <div className="d-flex justify-content-center align-items-center h-100">
            <p className="display-6">Загрузка...</p>
        </div>
    )
}