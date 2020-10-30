import { Link } from "gatsby"
import styled from "styled-components"

export const HeadBarCont = styled.div`
  display: grid;
  position: relative;
`

export const HeadBarGrid = styled.div`
  display: grid;
  width: 100%;
  align-self: center;
  justify-self: center;
  box-sizing: border-box;
`

export const HeadNavCont = styled.div`
  display: grid;
  grid-auto-flow: column;
  height: 60px;
`

export const HeadLink = styled(Link)`
  display: grid;
  align-content: center;
  justify-content: center;
  font-size: 14px;
  height: 46px;
`
