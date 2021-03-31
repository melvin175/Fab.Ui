import React from 'react'
import styled from 'styled-components'

function Card() {
    return (
        <Container>
        <Title>
        <h1># Card</h1>
        <p>A Card is a fundamental UI element that will heavily affect your interaction design. Cards have the power to compel users to convert, to carry out an action.</p>
        </Title>
        <Cards>
        <div class = "carbon-container">
        <iframe src="https://codesandbox.io/embed/goofy-rubin-51m22?fontsize=14&hidenavigation=1&theme=dark&view=preview"
        style={{width:'100%', height:'500px', border:'0', overflow:'hidden'}}
        title="Card"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
        </div>
        </Cards>
        </Container>
    )
}

export default Card

const Container= styled.div``

const Title = styled.div`
    padding: 3rem;
    color: black;
    p{
        margin-top: 2rem;
        font-size: 20px;
    }
`

const Cards = styled.div`
padding: 3rem;
`