import React from "react"
import { HeadNav } from "./HeadNav"
import { HeadBarCont, HeadBarGrid } from "./UI/HeadBarUI"

export const HeadBar = () => {
  return (
    <HeadBarCont>
      <HeadBarGrid>
        <HeadNav />
      </HeadBarGrid>
    </HeadBarCont>
  )
}
