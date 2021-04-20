import * as React from "react"
import '../fonts/perpetua/perpeta.ttf'
import Portrait from '../images/protrait.png'
import styled from "styled-components"

// styles
const headingStyle = {
  color: 'red',
  fontFamily: 'Perpetua'
}

const HeaderContainer = styled.div`
display: flex;
justify-content: center;
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
      <h1 style={headingStyle}>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
     
      <HeaderContainer>
        <HeaderImg />
      </HeaderContainer>
      
    </main>
  )
}

export default IndexPage
