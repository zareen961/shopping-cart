import './BackDrop.css'

function BackDrop({show, click}) {
    return (
        <div className={`${show && 'backDrop'}`} onClick={click}></div>
    )
}

export default BackDrop
