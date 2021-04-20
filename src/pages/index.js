import * as React from "react"
import '../fonts/perpetua/perpeta.ttf'
import Portrait from '../images/protrait.png'
import styled from "styled-components"
import { TweenMax, Power3 } from 'gsap'

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
  font-weight: 200;
  opacity: 0;

  @media (max-width: 1100px) {
    font-size: 4em;
    margin-top: 2em;
  }
`

const HeaderImg = styled.img.attrs({
  src: Portrait
})`
  width: 35%;
  margin: -7em auto 1em auto;
  transform: translateY(-100%);
  opacity: 0;

@media(min-width: 1200px) {
  width: 30%;
}

@media(max-width: 768px) {
  width: 90%;
}
`

const Description = styled.p`
  color: black;
  font-family: 'Perpetua';
  font-size: 2em;
  letter-spacing: 0.2em;
  font-weight: 200;
  line-height: 1.5;
  text-align: center;

`

//animation


// markup
const IndexPage = () => {
  let titleItem = React.useRef(null)
  let portraitItem = React.useRef(null)
  let descriptionItem = React.useRef(null)

  React.useEffect(() => {
    TweenMax.to(
      titleItem, .8, { y: "0%", duration: 15, stagger: 0.25, opacity: 1 }
    )
    TweenMax.to(
      portraitItem, .8, { y: '0%', duration: 1.5 , opacity: 1, delay: 0.5}
    )
    TweenMax.to(
      descriptionItem, .8, { y: '0%', duration: 1.5 , opacity: 1, delay:1}
    )
  })

  return (
    <main >
      <title>Portfolius</title>   
      <HeaderContainer>

        <Heading ref={el => titleItem = el}>
          Yoannesbourg
        </Heading>

          <HeaderImg ref={el => portraitItem = el}/>

        <Description ref={el => descriptionItem = el}>
          Ave Cesar,<br />
          Moi Yoannus, fidèle serveur de l'empire gaulois<br />
          Et ecrivain de Javascriptum<br />
          Aprenti des arts obscures<br />
          Reactus, Express JSus et PostgreSQLus.
        </Description>

      </HeaderContainer>
      
    </main>
  )
}

export default IndexPage
