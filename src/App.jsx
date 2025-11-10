import Section from "./components/Section"
import PrincipalContainer from "./components/PrincipalContainer"
import "./App.css"
import { useState, useRef, useEffect } from "react"

import { useContext } from "react"
import GlobalContext from "./context/globalContext"

function getInitialData() {
  const saved = localStorage.getItem("dados")
  return saved ? JSON.parse(saved) : []
}

function App() {

  const altData = useContext(GlobalContext)

  const [time, setTime] = useState("")
  const [date, setDate] = useState(null)
  const [name, setName] = useState("")
  const [data, setData] = useState(getInitialData)

  altData.setDataLocalStorage(data)

  const nameValue = useRef()

  function getTime(e) {
    setTime(e.target.innerHTML)
    altData.setToggle(!altData.toggle)

    Array.from(document.getElementsByClassName("toggle")).forEach(element => element.classList.remove("toggle"))
    if(altData.toggle) {
      e.target.classList.add("toggle")
    } else {
      e.target.classList.remove("toggle")
    }
  }

  function getDate(e) {
    setDate(e)
  }

  function getName(e) {
    setName(e)
  }

  function addInformation(e) {
    e.preventDefault()
    if(!time || !date || !name) {
      // Message
      altData.setError(true)
      altData.setMessage("Selecione todos os campos por favor!.")
      return setTimeout(() => {
        altData.setError(false)
      }, 2500)
    }
    
    let vr = data.find((agend) => {
      if(agend.hora === time && agend.data === date) return agend
    })

    if(vr) {
      // Message
      altData.setError(true)
      altData.setMessage("Já existe agendamento neste horário para este dia!.")
      return setTimeout(() => {
        altData.setError(false)
      }, 2500)
    }

    setData((old) => {
      return [
        ...old,
        {
          id: Date.now(),
          periodo: time.slice(0, 2) < 13 ? "Manhã" : time.slice(0, 2) < 19 ? "Tarde" : "Noite",
          data: date,
          hora: time,
          nome: name
        }
      ]

    })

    // Message
    altData.setError(true)
    altData.setMessage("Agendamento adicionado com sucesso!.")
    setTimeout(() => {
      altData.setError(false)
    }, 2500)

    document.getElementsByClassName("toggle")[0].classList.remove("toggle")
    setName("")
    setTime("")
    nameValue.current.value = ""

    //console.log(data)
  }

  useEffect(() => {
    localStorage.setItem("dados", JSON.stringify(data))
  }, [data])

  useEffect(() => {
    let deleted = data.filter((agend) => agend.id !== altData.remove_)
    setData(deleted)
    localStorage.setItem("dados", JSON.stringify(data))
  }, [altData.remove_])

  return (
    <div className="app-container">
      <Section 
        timeselected={getTime} 
        getDate={getDate} 
        inputName={getName} 
        addInfo={addInformation}
        nameValue={nameValue}
      />
      <PrincipalContainer />
    </div>
  )
}

export default App