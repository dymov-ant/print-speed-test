import { FC } from "react"
import { useDispatch } from "react-redux"
import { setStart } from "../redux/actions"

export const StartWindow: FC = () => {
    const dispatch = useDispatch()
    const onStartHandler = () => {
        dispatch(setStart(true))
    }

    return (
        <div
            className="position-absolute top-0 end-0 bottom-0 start-0 bg-white d-flex flex-column justify-content-center align-items-center p-3 rounded-3 shadow"
            style={{ width: "450px", height: "100px", margin: "auto" }}
        >
            <h5>Приготовьтесь и нажмите "Начать!"</h5>
            <button className="btn btn-outline-primary" onClick={onStartHandler}>
                Начать!
            </button>
        </div>
    )
}