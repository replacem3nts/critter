import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <h1>Welcome to Critter!</h1>
    <p>
      You thought crypograms were hard, try solving crypotgrams that are tweets.
      <br />
      <br />
      On the plus side, you get to choose the twitter account...
    </p>
    <Link to="/page-2/">GFY</Link> <br />
    <Link to="/using-typescript/">THIS LINK DOESNT EXIST</Link>
  </Layout>
)

export default IndexPage
