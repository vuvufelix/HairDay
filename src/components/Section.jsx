import { FaIdCardClip } from "react-icons/fa6";
import { FaScissors } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import "./Section.css"

import { useState, useRef} from "react"

const Section = () => {

    const [data, setData] = useState(["vefgvf"])
    const [pressMoring, setPressMorning] = useState(null)
    const [pressLate, setPressLate] = useState(null)
    const [pressNight, setPressNight] = useState(null)

    const [time, setTime] = useState("")
    const [inputDate, setInputDate] = useState(null)
    const [inputName, setInputName] = useState("")

    const cc = useRef(0)
    const input = useRef()

    const times = {
        morning: ["09:00", "10:00", "11:00", "12:00"],
        late: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
        night: ["19:00", "20:00", "21:00"]
    }
    
    const markElementOfMorning = (index, event) => {
        console.log(inputDate)
        if(index === pressMoring) {
            setPressMorning(null)
            setTime("")
        } else {
            setPressMorning(index)
            setTime(event.target.innerHTML)
        }
    }

    const markElementOfLate = (index, event) => {
        if(index === pressLate) {
            setPressLate(null)
            setTime("")
        } else {
            setPressLate(index)
            setTime(event.target.innerHTML)
        }
    }

    const markElementOfNight = (index, event) => {
        if(index === pressNight) {
            setPressNight(null)
            setTime("")
        } else {
            setPressNight(index)
            setTime(event.target.innerHTML)
        }
    }

    const SendInfo = (e) => {
        e.preventDefault()
        setData([
            {id: cc.current++, periodo: time.slice(0, 2) < 13 ? "Manhã": time.slice(0, 2) < 19 ? "Tarde": "Noite", data: inputDate, horario: time, cliente: inputName}
        ])
        input.current.value = ""
        console.log(data)
    }

    return (
        <section className="section-container">
            <h1>HairDay <FaScissors style={{color: "#ebd404"}}/></h1>
            <form>
                <h2>Agende um atendimento</h2>
                <p>Selecione data, horário e informe o nome do cliente para criar o agendamento.</p>
                <div className="data-value">
                    <span>Data</span>
                    <div>
                        <CiCalendar style={{color: "#ebd404", position: "absolute", zIndex: "2", top: "0.5rem", right: "0.5rem"}}/>
                        <input type="date" onChange={e => setInputDate(e.target.value)}/>
                    </div>
                </div>
                <span className="span-title">Horário</span>
                <section>
                    <span>Manhã</span>
                    <div className="time-opcions">
                        {times.morning.map((time, index) => {
                            return <time className={pressMoring === index ? "markTime": ""} key={index} onClick={() => markElementOfMorning(index, event)}>{time}</time>
                        })}
                    </div>

                    <span>Tarde</span>
                    <div className="time-opcions">
                        {times.late.map((time, index) => {
                            return <time className={pressLate === index ? "markTime": ""} key={index} onClick={() => markElementOfLate(index, event)}>{time}</time>
                        })}
                    </div>

                    <span>Noite</span>
                    <div className="time-opcions">
                        {times.night.map((time, index) => {
                            return <time className={pressNight === index ? "markTime": ""} key={index} onClick={() => markElementOfNight(index, event)}>{time}</time>
                        })}
                    </div>
                </section>
                <span className="span-title">Cliente</span>
                <div className="clientName">
                    <div>
                        <FaIdCardClip className="icon-person" style={{color: "#ebd404"}}/>
                        <input type="text" placeholder="Ex: Helena Sousa" onChange={e => setInputName(e.target.value)} ref={input}/>
                    </div>
                    <button onClick={SendInfo}>AGENDAR</button>
                </div>
            </form>
        </section>
    )
}

export default Section