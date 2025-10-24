import Section from "./components/Section"
import PrincipalContainer from "./components/PrincipalContainer"
import "./App.css"
import { useState, useRef, useEffect } from "react"

function App() {

  const [time, setTime] = useState("")
  const [date, setDate] = useState(null)
  const [name, setName] = useState("")
  const [data, setData] = useState([])

  const [moon, setMoon] = useState([])
  const [sun, setSun] = useState([])
  const [star, setStar] = useState([])

  const Increment = useRef(0)
  const nameValue = useRef()

  function getTime(e) {
    setTime(e)
  }

  function getDate(e) {
    setDate(e)
  }

  function getName(e) {
    setName(e)
  }

  function addInformation(e) {
    e.preventDefault()
    if(!time || !date || !name) return
    setData((old) => {
      return [
        {
          id: Increment.current++,
          periodo: time.slice(0, 2) < 13 ? "Manhã" : time.slice(0, 2) < 19 ? "Tarde" : "Noite",
          data: date,
          hora: time,
          nome: name
        },
        ...old
      ]

    })

    setName("")
    nameValue.current.value = ""

    console.log(data)
  }

  useEffect(() => {
    if(localStorage.getItem("dados") !== null) {
      setData(JSON.parse(localStorage.getItem("dados")))
    }
  }, [])

  useEffect(() => {
      localStorage.setItem("dados", JSON.stringify(data))
  }, [data])

  function Moon() {
    let dat = data.filter((agend) => agend.periodo === "Manhã")
    setMoon(dat)
  }

  function Sun() {
    let dat = data.filter((agend) => agend.periodo === "Tarde")
    setSun(dat)
  }

  function Star() {
    let dat = data.filter((agend) => agend.periodo === "Manhã")
    setStar(dat)
  }

  console.log(moon)

  return (
    <div className="app-container">
      <Section 
        timeselected={getTime} 
        getDate={getDate} 
        inputName={getName} 
        addInfo={addInformation}
        nameValue={nameValue}
      />
      <PrincipalContainer 
        filterMoon={moon} 
        filterSum={sun} 
        filterStar={star}
      />
    </div>
  )
}

export default App