import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core"
import React from "react"
import Languages from "../../DATA/Languages"
import "./Header.css"
interface HeaderProps {
  language: string
  setlanguage: React.Dispatch<React.SetStateAction<string>>
  word: string
  setword: React.Dispatch<React.SetStateAction<string>>
  DarkMode: boolean
}

export const Header: React.FC<HeaderProps> = ({
  language,
  setlanguage,
  word,
  DarkMode,

  setword,
}) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: DarkMode ? "#eaeaea" : "#0d1117",
      },
      type: !DarkMode ? "light" : "dark",
    },
    typography: {
      fontFamily: "Space Grotesk",
    },
  })

  const handleLanguageChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setlanguage(e.target.value)
    setword("")
  }
  return (
    <div className="header">
      <span
        className="logo"
        style={{ color: DarkMode ? "#eaeaea" : "#0d1117" }}
      >
        {word ? word : "HUNTER DECTIONARY"}{" "}
      </span>
      <div className="Inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="Word"
            value={word}
            onChange={(e) => {
              setword(e.target.value)
            }}
            label="Word to Hunt."
          />
          <TextField
            select
            className="Language"
            label="Select"
            onChange={handleLanguageChange}
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
