import * as React from "react"
import '../fonts/perpetua/perpeta.ttf'
import styled from "styled-components"
import { TweenMax, Power3 } from 'gsap'

//styles

const ProjectThumbnail = styled.div`
    background-color: #C4C4C4;
    margin-top: 2em;
    height: 12em;
    width: 15em;
`

const PortfolioBlock = () => {
    return (
        <div>
            <ProjectThumbnail />
        </div>
    )
}

export default PortfolioBlock