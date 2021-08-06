import { Container } from "@material-ui/core"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useCallback } from "react"
import "./App.css"
import { Definitions } from "./Components/Definitions/Definitions"
import { Header } from "./Components/Header/Header"
import { FaMoon } from "react-icons/fa"
import { BsSun } from "react-icons/bs"
function App() {
  const [meanings, setmeanings] = useState([])
  const [word, setword] = useState("")
  const [Language, setLanguage] = useState("en")
  const [DarkMode, setDarkMode] = useState(true)

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

  return (
    <div className={DarkMode ? "App" : "DarkApp"}>
      <div style={{ position: "absolute", top: 0, right: "10px" }}>
        <span>{DarkMode ? "Dark Mode" : "Light Mode"}</span>
        <button
          className="ThemeSwticher"
          onClick={() => setDarkMode(!DarkMode)}
          style={{ color: DarkMode ? "#eaeaea" : "#0d1117" }}
        >
          {DarkMode ? <BsSun size="20" /> : <FaMoon size="20" />}
        </button>
      </div>
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <Header
          word={word}
          setword={setword}
          language={Language}
          setlanguage={setLanguage}
          DarkMode={DarkMode}
        />
        {meanings && (
          <Definitions
            word={word}
            results={meanings}
            Language={Language}
            DarkMode={DarkMode}
          />
        )}
      </Container>
    </div>
  )
}

export default App
