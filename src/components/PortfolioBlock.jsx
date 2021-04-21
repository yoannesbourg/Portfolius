import * as React from "react"
import '../fonts/perpetua/perpeta.ttf'
import styled from "styled-components"
import { TweenMax, Power3 } from 'gsap'

//styles

const ProjectContainer = styled.div`
    margin-top: ${props => props.first? '6em' : '10em'};
    display: flex;
    align-items: center;
    flex-direction:${props => props.reverse? 'row-reverse' : 'row'};
    width: 41%;
    
    @media (max-width: 1200px) {
        flex-direction: column;
        margin-top: 6em;
    }
`

const ProjectThumbnail = styled.div`
    background-color: #C4C4C4;
    height: 16em;
    width: 24em;
    margin-right: 6em;

    @media (max-width: 1200px) {
        margin-right: 0;
    }
`

const ProjectTitle = styled.h3`
  color: black;
  font-family: 'Perpetua';
  font-size: 1.3em;
  letter-spacing: 0.2em;
  font-weight: 200;
  text-align: center;
  margin: 0;
`

const ProjectDescription = styled.p`
    color: black;
    font-family: 'Perpetua';
    font-size: 1.7em;
    letter-spacing: 0.2em;
    font-weight: 200;
    line-height: 1.5;
    padding: 1em;
    text-align: center;
`

const PortfolioBlock = () => {
    return (
        <>
            <ProjectContainer first>
                <ProjectThumbnail />
                <ProjectDescription>
                    <ProjectTitle>
                    - Reddit -
                    </ProjectTitle>
                    Next JS<br />
                    Redux ToolKit<br />
                </ProjectDescription>
            </ProjectContainer>

            <ProjectContainer >
            <ProjectThumbnail />
            <ProjectDescription>
                <ProjectTitle>
                - Reddit -
                </ProjectTitle>
                Next JS<br />
                Redux ToolKit<br />
            </ProjectDescription>
            </ProjectContainer>

            <ProjectContainer>
            <ProjectThumbnail />
            <ProjectDescription>
                <ProjectTitle>
                - Reddit -
                </ProjectTitle>
                Next JS<br />
                Redux ToolKit<br />
            </ProjectDescription>
            </ProjectContainer>
        </>
    )
}

export default PortfolioBlock