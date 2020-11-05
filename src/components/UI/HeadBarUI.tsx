import { Link } from "gatsby"
import styled from "styled-components"

export const HeadBarCont = styled.header`
  display: grid;
  position: relative;
  background: #9ea0a8;
`

export const HeadBarGrid = styled.div`
  display: grid;
  width: 100%;
  align-self: center;
  justify-self: center;
  box-sizing: border-box;
  grid-template-columns: 1fr 1fr;
`

export const LogoCont = styled.span`
  display: grid;
  align-content: center;
  justify-content: center;
  height: 60px;
  margin: 0;
  border: solid #ffffff 2px;
`

export const LogoLink = styled(Link)`
  font-size: 32px;
  color: #36d6e7;
  font-weight: bold;
  font-family: "Helvetica", sans-serif;
`

export const HeadNavCont = styled.nav`
  display: grid;
  grid-auto-flow: column;
  height: 60px;
  border: solid #ffffff 2px;
`

export const HeadLink = styled(Link)`
  display: grid;
  align-content: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  border-left: solid #ffffff 2px;
  border-right: solid #ffffff 2px;
  color: rgb(23, 26, 30);
  font-family: "Open Sans", sans-serif;
`
