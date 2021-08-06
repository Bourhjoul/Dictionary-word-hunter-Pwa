import React from "react"
import "./Footer.css"
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillBehanceSquare,
} from "react-icons/ai"

interface FooterProps {
  DarkMode: boolean
}

export const Footer: React.FC<FooterProps> = ({ DarkMode }) => {
  return (
    <div className="Footer">
      <div>
        © {new Date().getFullYear()} Made by
        <a
          className="Link"
          rel="noreferrer"
          target="_blank"
          href="https://bourhjoul.vercel.app/"
          style={{
            color: DarkMode ? "#eaeaea" : "#0d1117",
            marginLeft: "6px",
          }}
        >
          Abdessamad Bourhjoul with Love.
        </a>
      </div>
      <div
        style={{
          display: "flex",
          justifySelf: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <a
          href="https://github.com/Bourhjoul"
          target="_blank"
          rel="noreferrer"
          style={{ color: DarkMode ? "#eaeaea" : "#0d1117" }}
        >
          <AiFillGithub size="28" />
        </a>
        <a
          href="https://www.linkedin.com/in/abdessamad-bourhjoul-35288a203/"
          target="_blank"
          rel="noreferrer"
          style={{ color: DarkMode ? "#eaeaea" : "#0d1117" }}
        >
          <AiFillLinkedin size="28" />
        </a>
        <a
          href="https://www.behance.net/abdessamadbourhjoul"
          target="_blank"
          rel="noreferrer"
          style={{ color: DarkMode ? "#eaeaea" : "#0d1117" }}
        >
          <AiFillBehanceSquare size="28" />
        </a>
      </div>
    </div>
  )
}
