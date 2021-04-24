import * as React from "react"
import '../fonts/perpetua/perpeta.ttf'
import styled from "styled-components"
import PortfolioBlock from '../components/PortfolioBlock'
import { StaticImage } from "gatsby-plugin-image"
import { TweenMax, Power3 } from 'gsap'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle =createGlobalStyle`
  html {
    overflow-x: hidden;
  }
  ::selection {
    background-color: #000;
    color: white;
  }
`

// styles
const Container = styled.div`
display: flex;
flex-direction:column;
align-items: center;
width: 65%;
margin: 0 auto;
overflow-y: hidden; 

@media (max-width: 768px) {
  width: 80%;
}
`

const Heading = styled.h1`
  color: black;
  font-family: 'Perpetua';
  font-size: 6em;
  letter-spacing: 0.2em;
  font-weight: 200;
  opacity: 1;
  margin: 1em 0 .25em 0;
  transform: translate( 0, 30vh);

  @media (max-width: 1100px) {
    font-size: 3em;
    transform: translate( 0, 40vh);
  }
  @media (max-width: 475px) {
    font-size: 2em;
  }
`

const LayerElement = styled.div`
  width: 50%;
  height: 200px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  @media (max-width: 1424px) {
  width: 70%;
  }
`

const Text = styled.p`
  color: black;
  font-family: 'Perpetua';
  font-size: 2em;
  letter-spacing: 0.2em;
  font-weight: 200;
  line-height: 1.5;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.7em;
}
`

const SectionTitle = styled.h2`
  color: black;
  font-family: 'Perpetua';
  font-size: 1.7em;
  letter-spacing: 0.2em;
  font-weight: 200;
  line-height: 1.5;
  text-align: center;
  margin-top: 5em;
  margin-bottom: 0;
`

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 14em;
  width: 100%;
  font-size: .7em;
`

const Portrait = styled.div`
`

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  transform: translateY(500px);
`

// markup
const IndexPage = () => {
  let titleItem = React.useRef(null)
  let layer = React.useRef(null)
  let portraitItem = React.useRef(null)
  let descriptionItem = React.useRef(null)
  let main = React.useRef(null)



  React.useEffect(()=>{
    // TweenMax.to(
    //   titleItem, .8, { y: "40vh", duration: 3, stagger: 0.25, opacity: 1 }
    // )
    TweenMax.to(
      titleItem, 1, {y: '0', delay: 2}
    )
    TweenMax.to(
      layer, 2, {left: '120%' }
    )
    TweenMax.to(
      main, 1, {y: 0, delay: 2}
    )
  })

  return (
    <main >
      <title>Portfolius</title>   
      <GlobalStyle />
      <Container>

        <LayerElement ref={el => layer = el}/>
        
        <Heading ref={el => titleItem = el}>
          Yoannesbourg
        </Heading>
 
        <MainSection ref={el => main = el}>
          <Portrait>
            <StaticImage 
              src="../images/protrait.png" 
              alt="A dinosaur" 
              width={500}
              height={535}
              />
          </Portrait>

          <Text ref={el => descriptionItem = el}>
            Ave Cesar,<br />
            Moi Yoannus, fidèle serveur de l'empire gaulois<br />
            Et ecrivain de Javascriptum<br />
            Aprenti des arts obscures<br />
            Reactus, Express JSus et PostgreSQLus.
          </Text>

          {/*Portfolius*/}
          <SectionTitle>
            - PORTFOLIUS -
          </SectionTitle>

          <PortfolioBlock/>

          {/*Footer*/}
          <Footer>
          <a>
            <Text>
              Linkedin
            </Text>
          </a>

          <a>
            <Text>
              Github
            </Text>
          </a>

          <a>
            <Text>
              Malt
            </Text>
          </a>
          </Footer>
        </MainSection>
        
      </Container>
      
    </main>
  )
}

export default IndexPage
