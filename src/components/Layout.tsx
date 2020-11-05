import React from "react"
import { HeadBar } from "./HeadBar"
import { Main, MainGrid } from "./UI/MainUI"

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Main>
      <HeadBar />
      <MainGrid>{children}</MainGrid>
    </Main>
  )
}
