import { FaIdCardClip } from "react-icons/fa6";
import { FaScissors } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import "./Section.css"
import Time from "./timeButton/Time"

const Section = ({getDate, timeselected, inputName, addInfo, nameValue}) => {

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
                        <Time text="09:00" selectTime={timeselected}/>
                        <Time text="10:00" selectTime={timeselected}/>
                        <Time text="11:00" selectTime={timeselected}/>
                        <Time text="12:00" selectTime={timeselected}/>
                    </div>
                    <span className="span-subtitle">Tarde</span>
                    <div className="time-container">
                        <Time text="13:00" selectTime={timeselected}/>
                        <Time text="14:00" selectTime={timeselected}/>
                        <Time text="15:00" selectTime={timeselected}/>
                        <Time text="16:00" selectTime={timeselected}/>
                        <Time text="17:00" selectTime={timeselected}/>
                        <Time text="18:00" selectTime={timeselected}/>                        
                    </div>
                    <span className="span-subtitle">Noite</span>
                    <div className="time-container">
                        <Time text="19:00" selectTime={timeselected}/>
                        <Time text="20:00" selectTime={timeselected}/>
                        <Time text="21:00" selectTime={timeselected}/>
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