import "./PrincipalContainer.css"
import { CiCalendar } from "react-icons/ci";
import { FaStarAndCrescent } from "react-icons/fa6";
import { FaCloudSun } from "react-icons/fa6";
import { FaCloudMoon } from "react-icons/fa6"

import HairDay from "./hairDay/HairDay"

const PrincipalContainer = ({ filterMoon, filterSum, filterStar }) => {

    //console.log(filterMoon)

    return (
        <main>
            <header>
                <div className="header-info">
                    <h2>Sua agenda</h2>
                    <small>Consulte os seus cortes de cabelo agendados por dia</small>
                </div>
                <div className="header-option">
                    <CiCalendar className="icon-header"/>
                    <select name="consult" id="consult">
                        <option value="consult">FIDELCIO</option>
                        <option value="consult">Magrelo</option>
                        <option value="consult">NZUZI TERESA</option>
                    </select>
                </div>
            </header>
            <div className="sections">
                <div className="section-data">
                    <div>
                        <FaCloudMoon className="iconTime"/>
                        <span>Manhã</span>
                    </div>
                    <span>09h até 12h</span>
                </div>
                <ul>
                    {filterMoon.map((agend) => <HairDay key={agend.id} time={agend.hora} name={agend.nome} id={agend.id}/>)}
                </ul>
            </div>

            <div className="sections">
                <div className="section-data">
                    <div>
                        <FaCloudSun className="iconTime"/>
                        <span>Tarde</span>
                    </div>
                    <span>13h até 18h</span>
                </div>
                <ul>
                    {filterSum.map((agend) => <HairDay key={agend.id} time={agend.hora} name={agend.nome} id={agend.id}/>)}
                </ul>
            </div>

            <div className="sections">
                <div className="section-data">
                    <div>
                        <FaStarAndCrescent className="iconTime"/>
                        <span>Noite</span>
                    </div>
                    <span>19h até 21h</span>
                </div>
                <ul>
                    {filterStar.map((agend) => <HairDay key={agend.id} time={agend.hora} name={agend.nome} id={agend.id}/>)}
                </ul>
            </div>
        </main>
    )
}

export default PrincipalContainer