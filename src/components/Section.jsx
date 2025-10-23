import { FaIdCardClip } from "react-icons/fa6";
import { FaScissors } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import "./Section.css"
import Time from "./timeButton/Time"

const Section = ({getDate}) => {

    return (
        <section>
            <h1 className="title">HairDay<FaScissors/></h1>
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
                        <Time text="09:00"/>
                        <Time text="10:00"/>
                        <Time text="11:00"/>
                        <Time text="12:00"/>
                    </div>
                    <span className="span-subtitle">Tarde</span>
                    <div className="time-container">
                        <Time text="13:00"/>
                        <Time text="14:00"/>
                        <Time text="15:00"/>
                        <Time text="16:00"/>
                        <Time text="17:00"/>
                        <Time text="18:00"/>                        
                    </div>
                    <span className="span-subtitle">Noite</span>
                    <div className="time-container">
                        <Time text="19:00"/>
                        <Time text="20:00"/>
                        <Time text="21:00"/>
                    </div>
                </div>
                <span className="span-title">Cliente</span>
                <di className="input-name">
                    <FaIdCardClip className="icon-person"/>
                    <input type="text" placeholder="EX: Helena Souza"/>
                </di>
                <button>AGENDAR</button>
            </form>
        </section>
    )
}

export default Section