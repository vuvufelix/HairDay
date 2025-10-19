import "./Main.css"
import { CiCalendar } from "react-icons/ci";
import { FaTrashCan } from "react-icons/fa6";
import { FaStarAndCrescent } from "react-icons/fa6";
import { FaCloudSun } from "react-icons/fa6";
import { FaCloudMoon } from "react-icons/fa6"

const Main = () => {
    return (
        <main>
            <div>
                <div>
                    <h2>Sua agenda</h2>
                    <p>Consulte os seus cortes de cabelo agendados por dia</p>
                </div>
                <div>
                    <CiCalendar className="icon-calendar"/>
                    <select>
                        <option>Fidelcio Miguel</option>
                        <option>Magrelo123</option>
                        <option>vuvu félix</option>
                    </select>
                </div>
            </div>
            <div className="morning">
                <div className="data-info">
                    <span><FaCloudMoon style={{color: "#ebd404", fontSize: "1.2rem"}}/>Manhã</span>
                    <time>09h-12h</time>
                </div>
                <ul>
                    <li>
                        <div>
                            <time>11:00</time>
                            <span>Vuvu Félix</span>
                        </div>
                        <span><FaTrashCan style={{color: "#ebd404"}}/></span>
                    </li>
                </ul>
            </div>

            <div className="morning">
                <div className="data-info">
                    <span><FaCloudSun style={{color: "#ebd404", fontSize: "1.2rem"}}/>Tarde</span>
                    <time>13:00h</time>
                </div>
                <ul>
                    <li>
                        <div>
                            <time>11:00</time>
                            <span>Vuvu Félix</span>
                        </div>
                        <span><FaTrashCan style={{color: "#ebd404"}}/></span>
                    </li>
                </ul>
            </div>

            <div className="morning">
                <div className="data-info">
                    <span><FaStarAndCrescent style={{color: "#ebd404", fontSize: "1.2rem"}}/>Noite</span>
                    <time>19:00h</time>
                </div>
                <ul>
                    <li>
                        <div>
                            <time>11:00</time>
                            <span>Vuvu Félix</span>
                        </div>
                        <span><FaTrashCan style={{color: "#ebd404"}}/></span>
                    </li>
                </ul>
            </div>

            {/* Outro teste */}

            <div className="morning">
                <div className="data-info">
                    <span><FaStarAndCrescent style={{color: "#ebd404", fontSize: "1.2rem"}}/>Noite</span>
                    <time>19:00h</time>
                </div>
                <ul>
                    <li>
                        <div>
                            <time>11:00</time>
                            <span>Vuvu Félix</span>
                        </div>
                        <span><FaTrashCan style={{color: "#ebd404"}}/></span>
                    </li>
                </ul>
            </div>

            <div className="morning">
                <div className="data-info">
                    <span><FaStarAndCrescent style={{color: "#ebd404", fontSize: "1.2rem"}}/>Noite</span>
                    <time>19:00h</time>
                </div>
                <ul>
                    <li>
                        <div>
                            <time>11:00</time>
                            <span>Vuvu Félix</span>
                        </div>
                        <span><FaTrashCan style={{color: "#ebd404"}}/></span>
                    </li>
                </ul>
            </div>

            <div className="morning">
                <div className="data-info">
                    <span><FaStarAndCrescent style={{color: "#ebd404", fontSize: "1.2rem"}}/>Noite</span>
                    <time>19:00h</time>
                </div>
                <ul>
                    <li>
                        <div>
                            <time>11:00</time>
                            <span>Vuvu Félix</span>
                        </div>
                        <span><FaTrashCan style={{color: "#ebd404"}}/></span>
                    </li>
                </ul>
            </div>

            <div className="morning">
                <div className="data-info">
                    <span><FaStarAndCrescent style={{color: "#ebd404", fontSize: "1.2rem"}}/>Noite</span>
                    <time>19:00h</time>
                </div>
                <ul>
                    <li>
                        <div>
                            <time>11:00</time>
                            <span>Vuvu Félix</span>
                        </div>
                        <span><FaTrashCan style={{color: "#ebd404"}}/></span>
                    </li>
                </ul>
            </div>
            <div className="morning">
                <div className="data-info">
                    <span><FaStarAndCrescent style={{color: "#ebd404", fontSize: "1.2rem"}}/>Noite</span>
                    <time>19:00h</time>
                </div>
                <ul>
                    <li>
                        <div>
                            <time>11:00</time>
                            <span>Vuvu Félix</span>
                        </div>
                        <span><FaTrashCan style={{color: "#ebd404"}}/></span>
                    </li>
                </ul>
            </div>

            <div className="morning">
                <div className="data-info">
                    <span><FaStarAndCrescent style={{color: "#ebd404", fontSize: "1.2rem"}}/>Noite</span>
                    <time>19:00h</time>
                </div>
                <ul>
                    <li>
                        <div>
                            <time>11:00</time>
                            <span>Vuvu Félix</span>
                        </div>
                        <span><FaTrashCan style={{color: "#ebd404"}}/></span>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default Main