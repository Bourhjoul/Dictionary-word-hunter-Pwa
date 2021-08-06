import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core"
import { dark } from "@material-ui/core/styles/createPalette"
import React from "react"
import Languages from "../../DATA/Languages"
import "./Header.css"
interface HeaderProps {
  language: string
  setlanguage: React.Dispatch<React.SetStateAction<string>>
  word: string
  setword: React.Dispatch<React.SetStateAction<string>>
}

export const Header: React.FC<HeaderProps> = ({
  language,
  setlanguage,
  word,
  setword,
}) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#FEFEFE",
      },
      type: "dark",
    },
    typography: {
      fontFamily: "Space Grotesk",
    },
  })
  return (
    <div className="header">
      <span className="logo"> WORD HUNTER DECTIONARY </span>
      <div className="Inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            value={word}
            onChange={(e) => {
              setword(e.target.value)
            }}
            label="The Word to Hunt."
          />
          <TextField
            select
            label="Select"
            onChange={(e) => setlanguage(e.target.value)}
            value={language}
            helperText="Please select the language"
          >
            {Languages.map((language) => (
              <MenuItem key={language.label} value={language.label}>
                {language.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  )
}
