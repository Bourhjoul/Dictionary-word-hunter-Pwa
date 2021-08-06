import { Container } from "@material-ui/core"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useCallback } from "react"
import "./App.css"
import { Definitions } from "./Components/Definitions/Definitions"
import { Header } from "./Components/Header/Header"

function App() {
  const [meanings, setmeanings] = useState([])
  const [word, setword] = useState("")
  const [Language, setLanguage] = useState("en")
  const [fetchError, setfetchError] = useState("")
  const fetchDictionaryApi = useCallback(async () => {
    try {
      setmeanings([])
      const { data } = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${Language}/${word}`
      )
      setmeanings(data.length === 0 ? [] : data)
    } catch (error) {
      console.log(error)
    }
  }, [word, Language])
  useEffect(() => {
    fetchDictionaryApi()
  }, [fetchDictionaryApi])

  console.log(meanings)
  return (
    <div className="App">
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header
          word={word}
          setword={setword}
          language={Language}
          setlanguage={setLanguage}
        />
        {meanings && (
          <Definitions word={word} results={meanings} Language={Language} />
        )}
      </Container>
    </div>
  )
}

export default App
