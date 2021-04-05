import React from 'react'
import styled from 'styled-components'
import dev from '../Components/dev.png'

const Introduction = () => {
    return (
        <Container>
        <Title>
        <h1># Introduction</h1>
        <p>A Component library made to beautify your website with variety of building blocks available for the developer.</p>
        </Title>
        <img src={dev} alt="devoloper"/>
        <Introductions>
        <p>A component library is a cloud-based folder that consists of all the designed/styled parts of a website or piece of software. It helps designers to work in a consistent way and becomes very time efficient when executed correctly.</p>
        </Introductions>
        </Container>
    )
}

export default Introduction
const Container= styled.div`
    text-align: center;
    line-height: 35px;
`

const Title = styled.div`
    padding: 3rem;
    color: black;
    p{
        margin-top: 2rem;
        font-size: 20px;
    }
`

const Introductions = styled.div`
text-align: center;
font-size: 1.3rem;
padding: 2rem;
`