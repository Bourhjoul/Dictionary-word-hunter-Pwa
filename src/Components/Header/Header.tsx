import { createTheme, TextField, ThemeProvider } from "@material-ui/core"
import React from "react"
import "./Header.css"
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  })
  return (
    <div className="header">
      <span className="logo"> WORD HUNTER DECTIONARY </span>
      <div className="Inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField id="standard-basic" label="Enter The Word to hunt." />
        </ThemeProvider>
      </div>
    </div>
  )
}
