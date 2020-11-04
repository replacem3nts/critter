import React from "react"
import { Layout } from "../components/Layout"
import { PuzzleForm } from "../components/PuzzleForm"

const SolvePage = () => {
  return (
    <Layout>
      <PuzzleForm
        text={"to be or not to be, that is the question."
          .split(" ")
          .map(word => word.split(""))}
      />
    </Layout>
  )
}

export default SolvePage
