import { Divider } from "@material-ui/core"
import React, { useState } from "react"
import "./Definitions.css"
interface DefinitionsProps {
  word: string
  results: any[]
}

export const Definitions: React.FC<DefinitionsProps> = ({ word, results }) => {
  return (
    <div className="Definitions">
      {!word ? (
        <span className="subtitle">Start by typing a word.</span>
      ) : (
        results.map((result) =>
          result.meanings.map((meaning: any) =>
            meaning.definitions.map((def: any) => (
              <div className="definition">
                <b>{def.definition}</b> <i>{meaning.partOfSpeech}</i>
                <hr />
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
