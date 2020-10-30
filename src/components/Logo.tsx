import React from "react"
import { Routes } from "./Routes"
import { LogoCont, LogoLink } from "./UI/HeadBarUI"

export const Logo = () => {
  return (
    <LogoCont>
      <LogoLink to={Routes.home}>CRITTER</LogoLink>
    </LogoCont>
  )
}
