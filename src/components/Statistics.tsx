import { FC } from "react"

export const Statistics: FC = () => {
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
            <div>
                <button type="button" className="btn btn-outline-primary btn-sm">Начать</button>
                <button type="button" className="btn btn-outline-warning btn-sm">Заново</button>
            </div>
        </div>
    )
}