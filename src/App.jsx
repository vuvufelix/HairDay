import Section from "./components/Section"
import PrincipalContainer from "./components/PrincipalContainer"
import "./App.css"
import { useState, useRef, useEffect } from "react"

import Toastify from 'toastify-js'

import { useContext } from "react"
import ToggleTimeContext from "./context/timeColor"

function getInitialData() {
    const saved = localStorage.getItem("dados")
    return saved ? JSON.parse(saved) : []
}

function message(text, color) {
  Toastify({ 
    text : text, 
    duration : 3000,
    close : true, 
    gravity : "top",
    position : "left",
    stopOnFocus : true,
    style : { 
      background : color,
      padding: "0.6rem",
    }
  }).showToast();
}

function App() {

  const altData = useContext(ToggleTimeContext)

  const [time, setTime] = useState("")
  const [date, setDate] = useState(null)
  const [name, setName] = useState("")
  const [data, setData] = useState(getInitialData)

  altData.setThemecolor(data)

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
    if(!time || !date || !name) return message("Preencha todos os campos", "red")
    
    let vr = data.find((agend) => {
      if(agend.hora === time && agend.data === date) return agend
    })

    if(vr) return message("Já existe agendamento neste horário para este dia", "red")

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
    message("Agendamento adicionado com sucesso!", "greenyellow")
    document.getElementsByClassName("toggle")[0].classList.remove("toggle")
    setName("")
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