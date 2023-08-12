import rightActive from "../images/rightActive.PNG"
import rightInactive from "../images/rightInactive.png"
import leftActive from "../images/leftActive.png"
import leftInactive from "../images/leftInactive.PNG"
import "../CSS/Paging.css"
export default function Paging({start, end, forward, backward}){
    return (
        <div className="paging">
            {start === 1 ? <img width="20px" src={leftInactive} /> : <img width="20px" src={leftActive} onClick={backward} />}
            <span>{start} of {end}</span>
            {start === end ? <img width="20px" src={rightInactive} /> : <img width="20px" src={rightActive} onClick={forward} />}
        </div>
    )
}