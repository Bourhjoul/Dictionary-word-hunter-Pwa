import axios from "axios"
import React, { useEffect, useState } from "react"
import "./App.css"

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
  return <div className="App">Word Hunter</div>
}

export default App
