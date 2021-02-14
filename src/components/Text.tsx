import { FC, useEffect } from "react"
import { Symbol } from "./Symbol"
import { useDispatch, useSelector } from "react-redux"
import { AppStateType } from "../redux/store"
import { addIndexToErrors, createSymbols, finish, setActiveIndex, setErrorIndex, setIsLoading } from "../redux/actions"
import { http } from "../services/http"
import { Spinner } from "./Spinner"

export interface IResponse {
    status: string
    text: string
}

export const Text: FC = () => {
    const symbols = useSelector((state: AppStateType) => state.symbols)
    const activeIndex = useSelector((state: AppStateType) => state.activeIndex)
    const errorIndex = useSelector((state: AppStateType) => state.errorIndex)
    const errors = useSelector((state: AppStateType) => state.errors)
    const isLoading = useSelector((state: AppStateType) => state.isLoading)
    const dispatch = useDispatch()
    const DISABLE_KEYS = [
        "Shift",
        "Backspace",
        "Escape",
        "Alt",
        "Control",
        "Enter",
        "Tab",
        "CapsLock",
        "ArrowDown",
        "ArrowUp",
        "ArrowRight",
        "ArrowLeft",
        "NumLock",
        "Delete",
        "PrintScreen",
        "GroupNext"
    ]

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const keyPressHandler = (event: KeyboardEvent) => {
        if (!DISABLE_KEYS.includes(event.key)) {
            if (event.key === symbols[activeIndex]) {
                if (activeIndex === symbols.length - 1) {
                    dispatch(finish())
                } else {
                    dispatch(setActiveIndex(activeIndex + 1))
                    dispatch(setErrorIndex(null))
                }
            } else {
                dispatch(setErrorIndex(activeIndex))
                if (!errors.includes(activeIndex)) {
                    dispatch(addIndexToErrors(activeIndex))
                }
            }
        }
    }

    useEffect(() => {
        async function request() {
            dispatch(setIsLoading(true))
            const data = await http<IResponse>("https://fish-text.ru/get")
            dispatch(setIsLoading(false))
            dispatch(createSymbols(data.text))
        }

        request()
    }, [])

    useEffect(() => {
        document.addEventListener("keydown", keyPressHandler)
        return () => document.removeEventListener("keydown", keyPressHandler)
    }, [keyPressHandler])

    return (
        <div className="fs-5 me-4 d-block" style={{ width: "730px" }}>
            {
                isLoading
                    ? <Spinner/>
                    : symbols.map((char, index) =>
                        <Symbol
                            key={index}
                            char={char}
                            active={activeIndex === index}
                            error={errorIndex === index}
                            success={activeIndex > index}
                        />
                    )
            }
        </div>
    )
}