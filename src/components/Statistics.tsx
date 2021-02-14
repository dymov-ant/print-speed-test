import { FC, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppStateType } from "../redux/store"
import { setResult } from "../redux/actions"

export const Statistics: FC = () => {
    const [time, setTime] = useState(1)
    const activeIndex = useSelector((state: AppStateType) => state.activeIndex)
    const errorsCount = useSelector((state: AppStateType) => state.errors.length)
    const symbolsCount = useSelector((state: AppStateType) => state.symbols.length)
    const isLoading = useSelector((state: AppStateType) => state.isLoading)
    const truth = (symbolsCount - errorsCount) / symbolsCount * 100 || 0
    const speed = Math.floor(activeIndex / time * 60)
    const dispatch = useDispatch()

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isLoading) {
                dispatch(setResult({ speed, truth }))
                setTime(time + 1)
            }
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [time])

    return (
        <div className="border-start border-2 ps-2" style={{ width: "130px" }}>
            <div className="mb-2">
                <div className="text-muted d-flex align-items-center text-uppercase">
                    <i className="fas fa-tachometer-alt me-1"/> Скорость
                </div>
                <div className="text-info">
                    <span className="me-1" style={{ fontSize: "2rem" }}>{speed}</span>
                    <span style={{ fontSize: "0.9rem" }}>зн./мин.</span>
                </div>
            </div>
            <div className="mb-2">
                <div className="text-muted d-flex align-items-center text-uppercase">
                    <i className="fas fa-bullseye"/> Точность
                </div>
                <div className="text-info">
                    <span className="me-1" style={{ fontSize: "2rem" }}>
                        {truth && (truth < 0 ? 0 : (truth ^ 0) === truth ? truth : truth.toFixed(1))}
                    </span>
                    <span style={{ fontSize: "0.9rem" }}>%</span>
                </div>
            </div>
            <a
                href="/"
                tabIndex={-1}
                className="btn btn-outline-primary"
            >
                Заново
            </a>
        </div>
    )
}