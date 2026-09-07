import "./css/PopUp.css"
import Button from './Button';
import { useGame } from "../hooks/useGame"

const PopUp = ({title, text, textBtn, eventBtn}) => {
    const { game } = useGame()
    const { onPopUp } = game

    const flex = text ? "" : "flex-row-c"
    const bg = onPopUp === "victory" 
        ? "pop-up__victory" 
        : onPopUp === "continue" ? "pop-up__continue" 
        : onPopUp === "defeat" ? "pop-up__defeat" : ""
    
    return (
        <div className="pop-up flex-row-xy">
            <div className={`pop-up__inner ${bg} ${flex}`}>
                <h3 className="pop-up__title">{title}</h3>
                <p className="pop-up__text">{text}</p>
                <Button type="type" className="pop-up__btn" onClick={eventBtn}>{textBtn}</Button>
            </div>
        </div>
    )
}

export default PopUp;
