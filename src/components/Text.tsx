import { FC } from "react"
import { Symbol } from "./Symbol"

export const Text: FC = () => {

    const data = "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "
    const symbols = data.split("")
    const activeIndex = 12
    return (
        <p className="fs-5 me-5">
            {
                symbols.map((char, index) => <Symbol key={index} char={char} index={index} active={activeIndex === index}/>)
            }
        </p>
    )
}