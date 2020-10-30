import React from "react"
import { Routes } from "./Routes"
import { HeadLink, HeadNavCont } from "./UI/HeadBarUI"

export const HeadNav = () => {
  return (
    <HeadNavCont>
      <HeadLink to={Routes.about}>About</HeadLink>
      <HeadLink to={Routes.new}>New</HeadLink>
      <HeadLink to={Routes.solve}>Solve</HeadLink>
    </HeadNavCont>
  )
}
