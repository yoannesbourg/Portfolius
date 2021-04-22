import * as React from "react"
import '../fonts/perpetua/perpeta.ttf'
import styled from "styled-components"
import PortfolioBlock from '../components/PortfolioBlock'
import { StaticImage } from "gatsby-plugin-image"

// styles
const Container = styled.div`
display: flex;
flex-direction:column;
align-items: center;
width: 50%;
margin: 0 auto;
`

const Heading = styled.h1`
  color: black;
  font-family: 'Perpetua';
  font-size: 8em;
  letter-spacing: 0.2em;
  font-weight: 200;
  opacity: 1;

  @media (max-width: 1100px) {
    font-size: 4em;
    margin-top: 2em;
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

// markup
const IndexPage = () => {

  return (
    <main >
      <title>Portfolius</title>   
      <Container>

        <Heading>
          Yoannesbourg
        </Heading>
 
        <StaticImage src="../images/protrait.png" alt="A dinosaur" />

        <Text >
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
        
      </Container>
      
    </main>
  )
}

export default IndexPage
