import "./PrincipalContainer.css"
import { CiCalendar } from "react-icons/ci";
import HairDaySection from "./HairDaySection/HairDaySection"
import { useContext, useState, useEffect} from "react"
import GlobalContext from "../context/globalContext"
import Message from "./message/Message"

const PrincipalContainer = () => {

    const altData = useContext(GlobalContext)
    const [morning, setMorning] = useState([])
    const [late, setLate] = useState([])
    const [nigth, setNigth] = useState([])

    // Função para inicializar os estados com TODOS os dados na primeira renderização
    // Apenas para que o HairDaySection consiga mapear tudo no início
    useEffect(() => {
        // Inicializa os estados com os dados do contexto divididos por período
        const allAgendamentos = altData.themecolor;

        setMorning(allAgendamentos.filter(agend => agend.periodo === "Manhã"));
        setLate(allAgendamentos.filter(agend => agend.periodo === "Tarde"));
        setNigth(allAgendamentos.filter(agend => agend.periodo === "Noite"));

        // Não precisa marcar como filtrado no carregamento
    }, [altData.themecolor]);

    function filterAgend(data) {

        // Se a opção selecionada for um valor 'vazio' (opcional, para resetar o filtro)
        if (!data) { // Verifica se o valor é vazio (do novo option)
            // Lógica de RESET: Volta para o estado inicial
            const allAgendamentos = altData.themecolor;
            setMorning(allAgendamentos.filter(agend => agend.periodo === "Manhã"));
            setLate(allAgendamentos.filter(agend => agend.periodo === "Tarde"));
            setNigth(allAgendamentos.filter(agend => agend.periodo === "Noite"));
            return; // Sai da função após resetar
        }

        const Filter = altData.themecolor.filter((agend) => agend.data === data);

        const filterMorning = Filter.filter(agend => agend.periodo === "Manhã");
        const filterLater = Filter.filter(agend => agend.periodo === "Tarde");
        const filterNigth = Filter.filter(agend => agend.periodo === "Noite");

        // 3. ATUALIZAÇÃO CORRETA: O operador ternário garante que o estado é sempre um array
        setMorning(filterMorning.length > 0 ? filterMorning : []);
        setLate(filterLater.length > 0 ? filterLater : []);
        setNigth(filterNigth.length > 0 ? filterNigth : []);
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
                        <option value="">Todos os Agendamentos</option>
                        {altData.themecolor.map((agend) => <option key={agend.id} value={agend.data}>{agend.data}</option>)}
                    </select>
                </div>
            </header>

            {altData.error && <Message />}

            <HairDaySection 
                periodo="Manhã" 
                start_end="09h até 12h" 
                array_value={morning} 
                array_state="Manhã"
            />
            <HairDaySection 
                periodo="Tarde" 
                start_end="12h até 18h" 
                array_value={late} 
                array_state="Tarde"
            />
            <HairDaySection
                periodo="Noite" 
                start_end="19h até 21h" 
                array_value={nigth} 
                array_state="Noite"
            />
        </main>
    )
}

export default PrincipalContainer