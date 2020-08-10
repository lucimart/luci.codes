import React from "react"
import Header from "../components/header"

export default function Home() {
  return (
    <>
      <Header />
      <p style={{ marginTop: 300 }}>
        Nothing to see here{" "}
        <span role="img" aria-label="eyes emoji">
          👀
        </span>
      </p>
    </>
  )
}
