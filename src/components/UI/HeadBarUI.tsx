import { Link } from "gatsby"
import styled from "styled-components"

export const HeadBarCont = styled.div`
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

export const HeadNavCont = styled.div`
  display: grid;
  grid-auto-flow: column;
  height: 60px;
`

export const HeadLink = styled(Link)`
  display: grid;
  align-content: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  height: 46px;
  border-left: solid #ffffff 2px;
  border-bottom: solid #ffffff 2px;
  color: rgb(23, 26, 30);
  font-family: "Open Sans", sans-serif;
`
