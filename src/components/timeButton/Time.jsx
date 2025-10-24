import "./Time.css"

const Time = ({ text, selectTime }) => {
    return <time onClick={(e) => selectTime(e)}>{text}</time>
}

export default Time