import React, { useState } from "react"
import { Layout } from "../components/Layout"
import { CreateForm, CreateFormCont } from "../components/UI/CreateFormUI"

const CreatePage = () => {
  const [profileUrl, setProfileUrl] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log(profileUrl)
  }

  return (
    <Layout>
      <CreateFormCont>
        <CreateForm onSubmit={handleSubmit}>
          <input
            type="text"
            value={profileUrl}
            onChange={e => setProfileUrl(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </CreateForm>
      </CreateFormCont>
    </Layout>
  )
}

export default CreatePage
