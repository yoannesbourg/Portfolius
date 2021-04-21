import * as React from "react"
import '../fonts/perpetua/perpeta.ttf'
import styled from "styled-components"
import { TweenMax, Power3 } from 'gsap'

//styles

const ProjectContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction:${props => props.reverse? 'row-reverse' : 'row'};
`

const ProjectThumbnail = styled.div`
    background-color: #C4C4C4;
    height: 16em;
    width: 22em;
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

            <ProjectContainer reverse>
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