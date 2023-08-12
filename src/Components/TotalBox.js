import "../CSS/TotalBox.css"

export default function TotalBox(props){
    return (
        <section className={`totalBox ${props.backGround} ${props.color}`}>
            <p className="totalAndDate"><span>Total {props.text}</span>  <span>{String(new Date()).slice(4, 16)}</span></p>
            <p className="boxNumber">713 {props.text}</p>
        </section>
    )
}