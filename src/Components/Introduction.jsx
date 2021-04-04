import React from 'react'
import styled from 'styled-components'


const Introduction = () => {
    return (
        <Container>
        <Title>
        <h1># Introduction</h1>
        <p>In computing, an avatar (also known as a profile picture or userpic) is a graphical representation of a user or the user's character or persona.</p>
        </Title>
        <Introductions>
       
        </Introductions>
        </Container>
    )
}

export default Introduction
const Container= styled.div``

const Title = styled.div`
    padding: 3rem;
    color: black;
    p{
        margin-top: 2rem;
        font-size: 20px;
    }
`

const Introductions = styled.div`
padding: 2rem;
`