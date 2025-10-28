import { FaIdCardClip } from "react-icons/fa6";
import { FaScissors } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import "./Section.css"
import Time from "./timeButton/Time"

const Section = ({getDate, timeselected, inputName, addInfo, nameValue}) => {

    const times = [
        [
            ["09:00", "10:00", "11:00", "12:00"]
        ],
        [
            ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]
        ],
        [
            ["19:00", "20:00", "21:00"]
        ]
    ]

    return (
        <section>
            <h1 className="title">HairDay<FaScissors className="icon-cissors"/></h1>
            <h2 className="second-title">Agende um atendimento</h2>
            <small className="legend-instruction">Selecione data, hora e informe o nome de cliente para cirar agendamento</small>

            <form>
                <label className="label-title" htmlFor="data">Data</label>
                <div className="input-date">
                    <CiCalendar className="icon-calendar"/>
                    <input type="date" name="data" id="data" onChange={(e) => getDate(e.target.value)}/>
                </div>
                <span className="span-title">Horário</span>
                <div className="time-option">
                    <span className="span-subtitle">Manhã</span>
                    <div className="time-container">
                        {times[0][0].map((time, index) => <Time key={index} text={time} selectTime={timeselected}/>)}
                    </div>
                    <span className="span-subtitle">Tarde</span>
                    <div className="time-container">
                        {times[1][0].map((time, index) => <Time key={index} text={time} selectTime={timeselected}/>)}                   
                    </div>
                    <span className="span-subtitle">Noite</span>
                    <div className="time-container">
                        {times[2][0].map((time, index) => <Time key={index} text={time} selectTime={timeselected}/>)}
                    </div>
                </div>
                <span className="span-title">Cliente</span>
                <di className="input-name">
                    <FaIdCardClip className="icon-person"/>
                    <input 
                        type="text" 
                        placeholder="EX: Helena Souza" 
                        onChange={(e) => 
                        inputName(e.target.value)}
                        ref={nameValue}
                    />
                </di>
                <button onClick={(e) => addInfo(e)}>AGENDAR</button>
            </form>
        </section>
    )
}

export default Section