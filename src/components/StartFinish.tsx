import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setStart } from "../redux/actions"
import { AppStateType } from "../redux/store"

export const StartFinish: FC = () => {
    const isFinish = useSelector((state: AppStateType) => state.isFinish)
    const result = useSelector((state: AppStateType) => state.result)
    const dispatch = useDispatch()
    const onStartHandler = () => {
        dispatch(setStart(true))
    }


    return (
        <div
            className="position-absolute top-0 end-0 bottom-0 start-0 bg-white d-flex flex-column justify-content-center align-items-center p-3 rounded-3 shadow"
            style={{ width: "600px", height: "300px", margin: "auto" }}
        >
            {
                (isFinish && result) && (
                    <>
                        <h4>Ваш результат:</h4>
                        <div className="mb-2">
                            <div className="text-muted d-flex align-items-center text-uppercase">
                                <i className="fas fa-tachometer-alt me-1"/> Скорость
                            </div>
                            <div className="text-info">
                                <span className="me-1" style={{ fontSize: "1.9rem" }}>{result.speed}</span>
                                <span style={{ fontSize: "0.9rem" }}>зн./мин.</span>
                            </div>
                        </div>
                        <div className="mb-2">
                            <div className="text-muted d-flex align-items-center text-uppercase">
                                <i className="fas fa-bullseye"/> Точность
                            </div>
                            <div className="text-info">
                                <span className="me-1" style={{ fontSize: "2rem" }}>
                                    {(result.truth ^ 0) === result.truth ? result.truth : result.truth.toFixed(1)}
                                </span>
                                <span style={{ fontSize: "0.9rem" }}>%</span>
                            </div>
                        </div>
                    </>
                )
            }
            <h5>
                {isFinish ? "Чтобы попробывать еще раз нажмите \"Начать!\"" : "Приготовьтесь и нажмите \"Начать!\""}
            </h5>
            <button className="btn btn-outline-primary" onClick={onStartHandler}>
                Начать!
            </button>
        </div>
    )
}