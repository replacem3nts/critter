import React from "react"
import { Link } from "gatsby"

import { PuzzleForm } from "../components/PuzzleForm"
import { Layout } from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      <PuzzleForm
        text={"to be or not to be, that is the question."
          .split(" ")
          .map(word => word.split(""))}
      />
    </div>
  </Layout>
)

export default IndexPage
