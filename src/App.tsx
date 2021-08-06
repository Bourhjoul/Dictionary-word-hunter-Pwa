import { Container } from "@material-ui/core"
import axios from "axios"
import React, { useEffect, useState } from "react"
import "./App.css"
import { Header } from "./Components/Header/Header"

function App() {
  const [meanings, setmeanings] = useState([])
  const [word, setword] = useState("")

  const fetchDictionaryApi = async () => {
    try {
      const { data } = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/play"
      )
      setmeanings(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchDictionaryApi()
  }, [])

  console.log(meanings)
  return (
    <div className="App">
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header />
      </Container>
    </div>
  )
}

export default App
