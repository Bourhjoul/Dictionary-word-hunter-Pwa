import React from "react"
import "./Definitions.css"
interface DefinitionsProps {
  word: string
  results: any[]
  Language: string
}

export const Definitions: React.FC<DefinitionsProps> = ({
  word,
  results,
  Language,
}) => {
  //   console.log("results", results[0].phonetics[0].audio)
  return (
    <div className="Definitions">
      {results[0] && word && Language === "en" && (
        <audio controls style={{ backgroundColor: "#fefefe" }} autoPlay>
          <source
            src={results[0].phonetics[0] ? results[0].phonetics[0].audio : ""}
            type="audio/mp3"
          />
          Browser dosen't support audio files.
        </audio>
      )}
      {!word ? (
        <span className="subtitle">Start by typing a word.</span>
      ) : (
        results.map((result) =>
          result.meanings.map((meaning: any) =>
            meaning.definitions.map((def: any) => (
              <div className="definition">
                <div>
                  <b>{def.definition}</b>{" "}
                  <i>
                    {meaning.partOfSpeech + " "}
                    {result.phonetics[0] && result.phonetics[0].text}
                  </i>
                </div>
                <hr style={{ backgroundColor: "#0d1117", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example : </b>
                    {def.example}
                  </span>
                )}
                <br />
                {def.synonyms && (
                  <span>
                    <b>Synonyms : </b>
                    {def.synonyms.join("/")}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  )
}
