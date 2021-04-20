import * as React from "react"
import '../fonts/perpetua/perpeta.ttf'
import Portrait from '../images/protrait.png'
import styled from "styled-components"

// styles
const HeaderContainer = styled.div`
display: flex;
flex-direction:column;
align-items: center;
`

const Heading = styled.h1`
  color: black;
  font-family: 'Perpetua';
  font-size: 8em;
  letter-spacing: 0.2em;

  @media (max-width: 1100px) {
    font-size: 4em;
    margin-top: 2em;
  }
`

const HeaderImg = styled.img.attrs({
  src: Portrait
})`
width: 40%;
margin: 0 auto;

@media(min-width: 1200px) {
  width: 30%;
}

@media(max-width: 768px) {
  width: 90%;
}
`

// markup
const IndexPage = () => {
  return (
    <main >
      <title>Portfolius</title>   
      <HeaderContainer>
      <Heading>
        Yoannesbourg
      </Heading>
        <HeaderImg />
      </HeaderContainer>
      
    </main>
  )
}

export default IndexPage
