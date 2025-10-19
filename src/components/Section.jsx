import { FaIdCardClip } from "react-icons/fa6";
import { FaScissors } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import "./Section.css"

const Section = () => {
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
                        <input type="date" />
                    </div>
                </div>
                <span className="span-title">Horário</span>
                <section>
                    <span>Manhã</span>
                    <div className="time-opcions">
                        <time>09:00</time>
                        <time>10:00</time>
                        <time>11:00</time>
                        <time>12:00</time>
                    </div>

                    <span>Tarde</span>
                    <div className="time-opcions">
                        <time>13:00</time>
                        <time>14:00</time>
                        <time>15:00</time>
                        <time>16:00</time>
                        <time>17:00</time>
                        <time>18:00</time>
                    </div>

                    <span>Noite</span>
                    <div className="time-opcions">
                        <time>19:00</time>
                        <time>20:00</time>
                        <time>21:00</time>
                    </div>
                </section>
                <span className="span-title">Cliente</span>
                <div className="clientName">
                    <div>
                        <FaIdCardClip className="icon-person" style={{color: "#ebd404"}}/>
                        <input type="text" placeholder="Ex: Helena Sousa"/>
                    </div>
                    <button>AGENDAR</button>
                </div>
            </form>
        </section>
    )
}

export default Section