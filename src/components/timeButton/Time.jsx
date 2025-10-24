import "./Time.css"

const Time = ({ text, selectTime }) => {

    return <time onClick={(e) => selectTime(e.target.innerHTML)}>{text}</time>
}

export default Time