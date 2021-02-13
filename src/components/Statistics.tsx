import { FC } from "react"

export const Statistics: FC = () => {

    const onStart = () => {

    }
    const onRestart = () => {

    }

    return (
        <div className="border-start border-2 ps-3">
            <div>
                <i className="fas fa-tachometer-alt"/>
                Скорость
            </div>
            <div>
                <i className="fas fa-bullseye"/>
                Точность
            </div>
            <div className="d-flex">
                <button
                    onClick={onStart}
                    onMouseDown={event => event.preventDefault()}
                    className="btn btn-outline-success btn-sm me-1"
                >
                    Старт
                </button>
                <button
                    onClick={onRestart}
                    onMouseDown={event => event.preventDefault()}
                    className="btn btn-outline-primary btn-sm"
                >
                    Заново
                </button>
            </div>
        </div>
    )
}