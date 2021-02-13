import { FC, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppStateType } from "../redux/store"
import { restart } from "../redux/actions"

export const Statistics: FC = () => {
    const [time, setTime] = useState(1)
    const activeIndex = useSelector((state: AppStateType) => state.activeIndex)
    const errorsCount = useSelector((state: AppStateType) => state.errorsCount)
    const symbolsCount = useSelector((state: AppStateType) => state.symbols.length)
    const truth = (symbolsCount - errorsCount) / symbolsCount * 100
    const dispatch = useDispatch()

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(time + 1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [time])

    const onRestart = () => {
        dispatch(restart())
        setTime(1)
    }

    return (
        <div className="border-start border-2 ps-2" style={{ width: "130px" }}>
            <div className="mb-2">
                <div className="text-muted d-flex align-items-center text-uppercase">
                    <i className="fas fa-tachometer-alt me-1"/> Скорость
                </div>
                <div className="text-info">
                    <span className="me-1" style={{ fontSize: "1.9rem" }}>{Math.floor(activeIndex / time * 60)}</span>
                    <span style={{ fontSize: "0.9rem" }}>зн./мин.</span>
                </div>
            </div>
            <div className="mb-2">
                <div className="text-muted d-flex align-items-center text-uppercase">
                    <i className="fas fa-bullseye"/> Точность
                </div>
                <div className="text-info">
                    <span className="me-1" style={{ fontSize: "2rem" }}>
                        {
                            truth < 0 ? 0 : truth === 100 ? truth : truth.toFixed(1)
                        }
                    </span>
                    <span style={{ fontSize: "0.9rem" }}>%</span>
                </div>
            </div>
            <button
                onClick={onRestart}
                onMouseDown={event => event.preventDefault()}
                className="btn btn-outline-primary"
            >
                Заново
            </button>
        </div>
    )
}