import "../CSS/Status.css"

export default function Status({text, colorClass}){
    return (
        <>
        <p className={colorClass}>{text}</p>
        </>
    )
}