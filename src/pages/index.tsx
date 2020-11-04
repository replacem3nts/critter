import React from "react"
import { Link } from "gatsby"

import { PuzzleForm } from "../components/PuzzleForm"
import { Layout } from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <div>
      <h1>Hi folks!</h1>
      <p>Welcome to Critter</p>
      <p>
        You thought crypograms were hard, try solving crypotgrams that are
        tweets.
      </p>
      <p>On the plus side, you get to choose the twitter account...</p>
      <Link to="/page-2/">GFY</Link> <br />
      <Link to="/using-typescript/">THIS LINK DOESNT EXIST</Link>
    </div>
  </Layout>
)

export default IndexPage
