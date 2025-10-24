import "./PrincipalContainer.css"
import { CiCalendar } from "react-icons/ci";
import { FaStarAndCrescent } from "react-icons/fa6";
import { FaCloudSun } from "react-icons/fa6";
import { FaCloudMoon } from "react-icons/fa6"

import HairDay from "./hairDay/HairDay"

import { useContext } from "react"
import ToggleTimeContext from "../context/timeColor"

const PrincipalContainer = () => {

    const altData = useContext(ToggleTimeContext)

    function filterAgend(data) {
        let dataFilter = altData.themecolor.filter((agend) => agend.data === data)
        console.log(dataFilter)
        altData.setThemecolor(dataFilter)
    }

    return (
        <main>
            <header>
                <div className="header-info">
                    <h2>Sua agenda</h2>
                    <small>Consulte os seus cortes de cabelo agendados por dia</small>
                </div>
                <div className="header-option">
                    <CiCalendar className="icon-header"/>
                    <select name="consult" id="consult" onChange={(e) => filterAgend(e.target.value)}>
                        {altData.themecolor.map((agend) => <option key={agend.id} value={agend.data}>{agend.data}</option>)}
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
                    {
                        altData.themecolor
                        .filter((value) => value.periodo === "Manhã")
                        .map((agend) =>  
                            <HairDay 
                                key={agend.id} 
                                time={agend.hora} 
                                name={agend.nome} 
                                id={agend.id}
                            />
                        ) 
                    }
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
                    {
                        altData.themecolor
                        .filter((value) => value.periodo === "Tarde")
                        .map((agend) =>  
                            <HairDay 
                                key={agend.id} 
                                time={agend.hora} 
                                name={agend.nome} 
                                id={agend.id}
                            />
                        ) 
                    }
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
                    {
                        altData.themecolor
                        .filter((value) => value.periodo === "Noite")
                        .map((agend) =>  
                            <HairDay 
                                key={agend.id} 
                                time={agend.hora} 
                                name={agend.nome} 
                                id={agend.id}
                            />
                        )
                    }
                </ul>
            </div>
        </main>
    )
}

export default PrincipalContainer