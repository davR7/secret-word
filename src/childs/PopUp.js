import "./css/PopUp.css"
import { useGame } from "../hooks/useGame"

const PopUp = ({title, text, textBtn, eventBtn}) => {
    const { gameProps } = useGame()
    const { onPopUp } = gameProps

    const flex = text ? "" : "flex-row-c"
    const bg = onPopUp === "victory" ? "pop-up__victory" : 
        onPopUp === "defeat" ? "pop-up__defeat" : ""

    return (
        <div className="pop-up flex-row-c">
            <div className={`pop-up__inner ${bg} ${flex}`}>
                <button type="btn" className="pop-up__btn btn" onClick={eventBtn}>{textBtn}</button>
                <h3 className="pop-up__title">{title}</h3>
                {text ? 
                    (<p className="pop-up__text">{text}</p>) : 
                    (<></>)}
            </div>
        </div>
    )
}

export default PopUp;