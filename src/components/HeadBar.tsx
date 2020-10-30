import React from "react"
import { HeadNav } from "./HeadNav"
import { Logo } from "./Logo"
import { HeadBarCont, HeadBarGrid } from "./UI/HeadBarUI"

export const HeadBar = () => {
  return (
    <HeadBarCont>
      <HeadBarGrid>
        <Logo />
        <HeadNav />
      </HeadBarGrid>
    </HeadBarCont>
  )
}
